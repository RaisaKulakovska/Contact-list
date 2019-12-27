import React, { Fragment } from 'react';
import "./contactList.css";
import ContactItem from "./ContactItem/contactItem";
import Search from "../SearchComponent/search";

const ContactList = ({ 
    ContactList, 
    onDelete, 
    FavoriteNewF, 
    GetContactID,
    EditContact
    }) => {    
    const ListItem = ContactList.map((item) => {
        return <ContactItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            description={item.description}
            gender={item.gender}
            Facebook={item.Facebook}
            Twitter={item.Twitter}
            LinkedIn={item.LinkedIn}
            Skype={item.Skype}
            e_mail={item.e_mail}
            onDelete={() => onDelete(item.id)}
            FavoriteNewF={()=>FavoriteNewF(item.id)}
            favorite={item.favorite}
            GetContactID={()=>GetContactID(item.id)}   
            EditContact={()=>EditContact(item.id)}          
        >
        </ContactItem>
    })
    return (
        <Fragment>
            <Search></Search>          
            {ListItem}
        </Fragment>
    )
}

export default ContactList;