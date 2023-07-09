/*
1. Create a new component for the contact details view.
2. In the ContactList component:
   - Add a state variable to track the selected contact, e.g., selectedContact.
   - Define a function, handleContactClick, that takes the clicked contact as an argument and updates the selectedContact state with the clicked contact.
   - Pass the handleContactClick function as a prop to the ContactRow component.
3. In the ContactRow component:
   - Add an onClick event handler to the contact row element.
   - Call the handleContactClick function, passing the current contact as an argument.
4. In the ContactList component:
   - Use conditional rendering to display the ContactDetails component only if a contact is selected.
   - Pass the selectedContact as a prop to the ContactDetails component.
5. In the ContactDetails component:
   - Receive the selectedContact prop.
   - Display the details of the selected contact, such as name, email, phone, etc.
6. Implement navigation to the separate view:
   - Use a routing library like React Router to define routes and navigation between views.
   - Define a route for the ContactList component and another route for the ContactDetails component.
   - Set up the routing configuration to navigate to the ContactDetails view when a contact row is clicked.
*/

