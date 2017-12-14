import { SELECT_ANIMAL, START_LOADING, END_LOADING, FETCH_ANIMALS_LIST } from '../constants'


const INITIAL_STATE = {
    selectedAnimal: null,
    animalsList: [],
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ANIMAL:
            return {
                ...state,
                selectedAnimal: state.animalsList.filter(animal => animal.name === action.payload)[0]
            }
        case FETCH_ANIMALS_LIST:
            return {
                ...state,
                animalsList: action.payload,
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