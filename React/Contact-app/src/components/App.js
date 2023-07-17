import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./contactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Ayush",
      email: "ayushb@gmail.com",
    },
    {
      id: "2",
      name: "Piyush",
      email: "piyushb@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
