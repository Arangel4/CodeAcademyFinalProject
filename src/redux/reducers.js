// Reducers are functions that match the name of the fields in the Redux store. These functions are used to change the vlue of those related fields.
import { combineReducers } from 'redux';

// Define the reducer functions, one per field in your Redux store. Use the same exact name as what you would use for your fields.
const user = (state = null) => {
    // For the most basic of reducers, just return the state parameter.
    // You could use these reducer functions to carry on other tasks, like formatting data, performing calculations, etc.
    return state;
}

export default combineReducers({user})