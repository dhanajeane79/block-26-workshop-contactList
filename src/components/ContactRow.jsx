/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

export default function ContactRow({ contact }) {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }