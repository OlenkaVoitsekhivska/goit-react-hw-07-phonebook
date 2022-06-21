
// import {useSelector } from 'react-redux';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import style from './ContactsList.module.css';


import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts-Api';


function ContactsList() {


  // let filter = useSelector(state => state.contacts.filter);


const {data:contacts} = useGetContactsQuery();
const [deletedContact] = useDeleteContactMutation();


  return (
    <div className={style.contactsBox}>
      <h2>Contacts</h2>
      <ul>
   
        {contacts&&contacts.map(({ id, name, phone }) => {
          return (
            <ContactsItem
              key={id}
              name={name}
              phone={phone}
             
              // onDeleteContact={()=>handleContactDelete(id)}
              onDeleteContact={()=>deletedContact(id)}
            />
          );
        })}
    

 

      </ul>
    </div> 
  );

}

export default ContactsList;
