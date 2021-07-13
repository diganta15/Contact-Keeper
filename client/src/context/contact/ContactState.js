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
                number:"111-222-333",
                type:"professional"
            },
            {
                id: 2,
                name: "Desmond Miles",
                email: "desmond@abstergo.com",
                number: "222-333-111",
                type: "personal"
            },
            {
                id: 3,
                name: "Layla Hussan",
                email: "layla@ileftabstergo.com",
                number: "333-111-222",
                type: "personal"
            },
        ]
    }

    const [state,dispatch] = useReducer(ContactReducer,initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid();

        dispatch({type:ADD_CONTACT, payload:contact})
    }
    //Delete Contact

    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return(
        <contactContext.Provider value={{
            contacts:state.contacts,
            addContact  
        }}>
            {props.children}
        </contactContext.Provider>
    )
};

export default ContactState;