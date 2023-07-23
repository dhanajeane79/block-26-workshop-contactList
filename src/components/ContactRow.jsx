/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

export default function ContactRow({ setSelectedContactId, contact }) {
  const handleClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={handleClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}