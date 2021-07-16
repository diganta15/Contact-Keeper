import React,{useContext, useRef, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const { filterContacts, clearFilterContacts, filtered} = contactContext;
    const text = useRef('');

    useEffect(()=>{
        if(filtered === null){
            text.current.value=''
        }
    },[contactContext, filtered])

    const onChange = (e) =>{
        if(text.current.value !== ''){
            filterContacts(e.target.value)
        }
        else{
            clearFilterContacts();
        }
    }

    return (
        <form >
            <input type="text" ref={text} name="" id="" onChange={onChange} />
        </form>
    )
}

export default ContactFilter
