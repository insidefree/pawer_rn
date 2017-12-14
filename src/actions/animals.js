import { SELECT_ANIMAL, START_LOADING, END_LOADING, FETCH_ANIMALS_LIST } from '../constants'

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