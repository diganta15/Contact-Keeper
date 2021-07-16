import React, { useReducer } from "react";
import { v4 as uuid } from 'uuid'
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACT,
	CLEAR_FILTER,
	SET_ALERT,
	REMOVE_ALERT,
} from "../types";
import contactContext from "./contactContext";

const ContactState = props =>{
    const initialState = {
        contacts:[
            {
                id:1,
                name:"Connor Kenway",
                email:"connor@indian.com",
                phone:"111-222-333",
                type:"professional"
            },
            {
                id: 2,
                name: "Desmond Miles",
                email: "desmond@abstergo.com",
                phone: "222-333-111",
                type: "personal"
            },
            {
                id: 3,
                name: "Layla Hussan",
                email: "layla@ileftabstergo.com",
                phone: "333-111-222",
                type: "personal"
            },
        ],
        current:null,
        filtered:null,
    }

    const [state,dispatch] = useReducer(ContactReducer,initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid();

        dispatch({type:ADD_CONTACT, payload:contact})
    }
    //Delete Contact
    const deleteContact = (id) =>{
        dispatch({type:DELETE_CONTACT,  payload:id})
    }
    //Set Current Contact
    const setCurrentContact = (contact) =>{
        dispatch({type:SET_CURRENT,payload:contact})
    }
    //Clear Current Contact
    const clearCurrentContact = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    //Update Contact
    const updateContact = (contact) =>{
        dispatch({type:UPDATE_CONTACT,payload:contact})
    }
    //Filter Contacts
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACT, payload: text })
    }
    //Clear Filter
    const clearFilterContacts = () => {
        dispatch({ type: CLEAR_FILTER })
    }
    return(
        <contactContext.Provider value={{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            addContact,
            deleteContact,
            setCurrentContact,
            clearCurrentContact,
            updateContact,
            filterContacts,
            clearFilterContacts  
        }}>
            {props.children}
        </contactContext.Provider>
    )
};

export default ContactState;