import {
    SELECT_ANIMAL,
    START_LOADING,
    END_LOADING,
    FETCH_ANIMALS_LIST,
    FETCH_ANIMALS_LIST_FIRST_LOAD,
    FETCH_ANIMALS_LIST_BY_BATCH
} from '../constants'

// fakedata
// import animals from '../fakeData/animals'

// config
import { animalsRef } from '../config/firebase'


export const selectAnimal = animalID => ({
    type: SELECT_ANIMAL,
    // payload: animals.filter(animal => animal.id === animalID)[0]
    payload: animalID
})


export const fetchAnimals = () => {
    return dispatch => {
        dispatch({ type: START_LOADING })
        animalsRef
            .on('value', snap => {
                let animalsList = []
                snap.forEach(animal => {
                    const { age, description, name, images, id } = animal.val()
                    animalsList.push({ age, description, name, images, id })
                });
                dispatch({ type: END_LOADING })
                //   const sortByDate = animals.sort(function(a, b) {
                //     var dateA = new Date(a.createdAt),
                //         dateB = new Date(b.createdAt);
                //     return dateB - dateA;
                //   });
                //   console.log(sortByDate);
                // console.log('action Animals', animalsList)
                dispatch({
                    type: FETCH_ANIMALS_LIST,
                    payload: animalsList
                })
            })
    }
}

export const fetchAnimalsFirstLoad = () => {
    return dispatch => {
        dispatch({ type: START_LOADING })
        // var productsRef = ref.child('products');
        var lastKnownAnimal = null;
        var pageQuery = animalsRef.limitToFirst(3);
        console.log('pageQuery', pageQuery)
        pageQuery
            .on('value', function (snapshot) {
                let animalsList = []
                console.log('snapshot', snapshot)
                snapshot.forEach(function (childSnapshot) {
                    const { age, description, name, images, id } = childSnapshot.val()
                    animalsList.push({ age, description, name, images, id })
                    lastKnownAnimal = childSnapshot.val();
                });
                dispatch({ type: END_LOADING })
                dispatch({
                    type: FETCH_ANIMALS_LIST_FIRST_LOAD,
                    payload: { animalsList, lastKnownAnimal }
                })
            });
    }
}

export const fetchAnimalsByBatch = (lastKnownAnimalId) => {
    console.log('lastKnownAnimalId', lastKnownAnimalId)
    return dispatch => {
        dispatch({ type: START_LOADING })
        var nextQuery = animalsRef.orderByChild('id').startAt(lastKnownAnimalId).limitToFirst(6)
        console.log('nextQuery', nextQuery)
        nextQuery
            .on('value', function (snapshot) {
                console.log('snapshot', snapshot)
                let animalsList = []

                snapshot.forEach(function (childSnapshot) {
                    console.log('childSnapshot', childSnapshot)
                    const { age, description, name, images, id } = childSnapshot.val()
                    animalsList.push({ age, description, name, images, id })
                    console.log('animalsList', animalsList)

                });
                animalsList.shift()
                dispatch({ type: END_LOADING })
                dispatch({
                    type: FETCH_ANIMALS_LIST_BY_BATCH,
                    payload: { animalsList, lastKnownAnimal: animalsList.slice(-1)[0] }
                })
            });
    }
}