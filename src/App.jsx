/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      <ContactList selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
    </>
  );
}