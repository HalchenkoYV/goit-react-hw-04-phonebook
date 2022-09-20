import './AddContact.module.css';
import  {useState } from 'react';

function AddContactBox({addContact}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handlSubmit = e => {
        e.preventDefault();
       
        addContact({name,number});
        setName('');
        setNumber('');
    };


        return (
            <form onSubmit={handlSubmit} >
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={e=>setName(e.target.value)}/>
                </label>
                <label>Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={e=>setNumber(e.target.value)}/>
                </label>
                <button type='submit' >Add contact</button>
            </form>
   )
};


// class AddContactBox extends Component  {
//   state = {
//       name: '',
//       number:''
//     }

//     handleChange = e => {
//         const { name, value } = e.target
        
//      this.setState({[name]:value});
//     };


//  handlSubmit = e => {
//         e.preventDefault();
       
//         this.props.addContact(this.state);
//         console.log(e.target.name)
//         this.setState({name: '',number:''});
//     };

//     render() {
//         const { name, number } = this.state;

//         return (
//             <form onSubmit={this.handlSubmit} >
//                 <label>Name
//                     <input
//                         type="text"
//                         name="name"
//                         value={name}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         onChange={this.handleChange}/>
//                 </label>
//                 <label>Number
//                     <input
//                         type="tel"
//                         name="number"
//                         value={number}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         onChange={this.handleChange}/>
//                 </label>
//                 <button type='submit' >Add contact</button>
//             </form>
//    )
//   }
// };

export default AddContactBox;