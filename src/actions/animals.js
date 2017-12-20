import {
    SELECT_ANIMAL,
    START_LOADING,
    END_LOADING,
    FETCH_ANIMALS_LIST,
    FETCH_ANIMALS_LIST_FIRST_LOAD,
    FETCH_ANIMALS_LIST_BY_BATCH
} from '../constants'

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
        var lastKnownAnimal = null;
        var pageQuery = animalsRef.limitToFirst(3);
        pageQuery
            .on('value', function (snapshot) {
                let animalsList = []
                snapshot.forEach(function (childSnapshot) {
                    const { age, description, name, images, id } = childSnapshot.val()
                    animalsList.push({ age, description, name, images, id })
                    lastKnownAnimal = childSnapshot.val();
                });
                dispatch({ type: END_LOADING })
                dispatch({
                    type: FETCH_ANIMALS_LIST_FIRST_LOAD,
                    payload: { animalsList }
                })
            });
    }
}

export const fetchAnimalsByBatch = (lastKnownAnimalId) => {
    return dispatch => {
        dispatch({ type: START_LOADING })
        var nextQuery = animalsRef.orderByChild('id').startAt(lastKnownAnimalId).limitToFirst(6)
        nextQuery
            .on('value', function (snapshot) {
                let animalsList = []
                snapshot.forEach(function (childSnapshot) {
                    const { age, description, name, images, id } = childSnapshot.val()
                    animalsList.push({ age, description, name, images, id })

                });
                animalsList.shift()
                dispatch({ type: END_LOADING })
                dispatch({
                    type: FETCH_ANIMALS_LIST_BY_BATCH,
                    payload: { animalsList }
                })
            });
    }
}