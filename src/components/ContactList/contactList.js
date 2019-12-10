import React, { Fragment } from 'react';
import "./contactList.css";
import ContactItem from "./ContactItem/contactItem";
import Search from "../SearchComponent/search";

const ContactList = ({ ContactList, onDelete }) => {
    console.log("Array", ContactList);
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
            favorite={item.favorite}
        >
        </ContactItem>
    })
    return (
        <Fragment>
            <Search></Search>
            {/* <h2>Contact List</h2> */}
            {ListItem}

        </Fragment>
    )
}

export default ContactList;