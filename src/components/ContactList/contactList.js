import React, {Fragment} from 'react';
import "./contactList.css";
import ContactItem from "./ContactItem/contactItem";


const ContactList=({ContactList})=>{
    console.log("Array",ContactList);
    const ListItem=ContactList.map((item)=>{
       
        return <ContactItem avatar={item.avatar} name={item.name} description={item.description} gender={item.gender} ></ContactItem>
    })
    return(
        <Fragment> 
            <h2>Contact List</h2>           
            {ListItem}
            
        </Fragment>
    )
}

export default ContactList;