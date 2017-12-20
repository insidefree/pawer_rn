import {
    SELECT_ANIMAL,
    START_LOADING,
    END_LOADING,
    FETCH_ANIMALS_LIST,
    FETCH_ANIMALS_LIST_FIRST_LOAD,
    FETCH_ANIMALS_LIST_BY_BATCH
} from '../constants'


const INITIAL_STATE = {
    selectedAnimal: null,
    animalsList: [],
    refreshLoadingAnimals: [],
    loading: false,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ANIMAL:
            return {
                ...state,
                selectedAnimal: state.animalsList.filter(animal => animal.id == action.payload)[0]
            }
        case FETCH_ANIMALS_LIST:
            return {
                ...state,
                animalsList: action.payload,
            }
        case FETCH_ANIMALS_LIST_FIRST_LOAD:
            return {
                ...state,
                animalsList: action.payload.animalsList,
            }
        case FETCH_ANIMALS_LIST_BY_BATCH:
            return {
                ...state,
                animalsList: state.animalsList.concat(action.payload.animalsList),
            }
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case END_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}