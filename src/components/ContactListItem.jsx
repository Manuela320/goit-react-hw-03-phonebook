import React from 'react';

const ContactListItem = ({ contact, onDeleteContact }) => {
    return (
        <li>
            {contact.name}: {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
    );
};

export default ContactListItem;