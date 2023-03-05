import React from "react";
import Card from "./components/Card";
import contacts from "./contacts";

function createCard(contact){
    return <Card
    key={contact.id}
    name={contact.name}
    img = {contact.imgURL} 
    tel = {contact.phone}
    email = {contact.email}
    />
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
            {
            contacts.map((contact)=>(<Card
                                        key={contact.id}
                                        name={contact.name}
                                        img = {contact.imgURL} 
                                        tel = {contact.phone}
                                        email = {contact.email}
                                    />)
                                )
            }
            {contacts.map(
                function(contact){
                    return <Card
                    key={contact.id}
                    name={contact.name}
                    img = {contact.imgURL} 
                    tel = {contact.phone}
                    email = {contact.email}
                    />
                }
            )}
            {/* <Card
                name={contacts[0].name}
                img= {contacts[0].imgURL}
                tel= {contacts[0].phone}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                img= {contacts[1].imgURL}
                tel= {contacts[1].phone}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                img= {contacts[2].imgURL}
                tel= {contacts[2].phone}
                email={contacts[2].email}
            /> */}
            
        </div>
    );
}

export default App;