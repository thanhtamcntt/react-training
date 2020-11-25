import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const contacts = res.data
                this.setState({ contacts })
            })
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <ul className="list-contact">
                    {this.state.contacts.map(contact => 
                        <li key={contact.id}>
                            <p>{contact.name}</p>
                            <p>{contact.username}</p>
                            <p>{contact.email}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Contact;