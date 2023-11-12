import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
const AppContext = React.createContext();

const initialState = {
    menuflag: "", services: ""
}

const AppProvider = ({ children }) => {

    const fetchServicesApi = (data) => {
        return dispatch({
            type: "FETCHSERVICES",
            payload: {
                services: data
            }
        })
    }

    const menuClose = () => {
        return dispatch({
            type: "CLOSE",
            payload: {
                menuflag: ""
            }
        })
    }
    const openMenu = () => {
        return dispatch({
            type: "OPEN",
            payload: {
                menuflag: "open"
            }
        })
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{ ...state, menuClose, openMenu, fetchServicesApi }}>
        {children}
    </AppContext.Provider>
}



const useGlobleContext = () => {
    return useContext(AppProvider);
}

export { AppContext, AppProvider, useGlobleContext };
