import './App.css';
import { useState, useEffect } from 'react';
import Container from './Container/Cotainer';
import Section from './Section/Section';
import AddContactBox from './AddContactBox/AddContact';
import Contacts from './Contacts/Contacts';
import shortid from 'shortid';

const examplesArray = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }];



function App (){
  const [contacts, setContacts] = useState(examplesArray);
  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, );
  
  const addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
      
    };
 
    if (!contacts.find(contact => contact.name === name)) {
      setContacts([...contacts, newContact])
    }
    else {
      alert(`${name} is alredy in your phonebook`)
    };
  };


  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };


  const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );


  return (
    <Container>
      <Section title='Phonebook'>
        <AddContactBox addContact={addContact} />
      </Section>

      <Section title='Contacts'>
        <Contacts listContacts={visibleContacts} toFilter={e=>setFilter(e.target.value.toLocaleLowerCase())} currentFilter={filter} toDelete={deleteContact} />
      </Section>

    </Container>
  );
};





// class App extends Component  {
//   state = {
//     contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
//     filter: ''
//   };

//   // componentDidMount() {
//   //   const savedContacts = localStorage.getItem("contacts");
//   //   const parsedContacts = JSON.parse(savedContacts);

//   //   this.setState({contacts:parsedContacts})
//   // }
  
//   componentDidUpdate() {
//     const { contacts } = this.state;
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }

//   addContact = ({name , number}) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
      
//     };
 
//     if (!this.state.contacts.find(contact => contact.name === name)) {
//       this.setState({
//         contacts: [...this.state.contacts, newContact]
//       })
//     }
//     else {
//         alert(`${name} is alredy in your phonebook`)
//     } 
    
//   }

//   handleChangeFilter = (e) => {
//     this.setState({
//       filter : e.target.value
//     })

//   }

//   deleteContact = id => {
//     this.setState(state =>({
//       contacts: state.contacts.filter(contact => contact.id !== id),
//     }));
//   }


//   render() {
//     const { contacts,filter,  } = this.state;
//     const optimizedFilter = filter.toLocaleLowerCase();


//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(optimizedFilter),
//     );


//     return (
//       <Container>
//         <Section title='Phonebook'>
//           <AddContactBox addContact={this.addContact}/>
//         </Section>

//         <Section title='Contacts'>
//           <Contacts listContacts={visibleContacts} toFilter={this.handleChangeFilter} currentFilter={filter} toDelete={this.deleteContact}/>
//         </Section>

//       </Container>
//    )
//   }
// };

export default App;