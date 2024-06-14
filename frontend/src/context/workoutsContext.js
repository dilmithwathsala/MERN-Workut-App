import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                workoutes: action.payload
            }
        case "CREATE_WORKOUT":
            return {
                workoutes: [action.payload, ...state.workoutes]
            }
            default:
                return state
        }

}

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] =useReducer(workoutsReducer, {
        workoutes: null
    })
    
    // dispatch({type: "SET_WORKOUTS", payload: [{}, {}]})

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}
export default WorkoutsContextProvider