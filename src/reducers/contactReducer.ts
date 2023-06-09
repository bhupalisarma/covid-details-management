import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types";

// Define the contact interface
export interface Contact {
	id: number;
	name: string;
	email: string;
}

// Define the contact state interface
export interface ContactState {
	contacts: Contact[];
}

// Set the initial state for contacts
export const initialState: ContactState = {
	contacts: [],
};

// Create a contact slice using createSlice function
const contactSlice = createSlice({
	name: "contacts", // Name of the slice
	initialState, // Initial state
	reducers: {
		// Reducer for adding a contact
		addContact: (state, action: PayloadAction<Contact>) => {
			state.contacts.push(action.payload); // Add the new contact to the state
		},
		// Reducer for deleting a contact
		deleteContact: (state, action: PayloadAction<number>) => {
			state.contacts = state.contacts.filter(
				(contact) => contact.id !== action.payload // Remove the contact with the given ID from the state
			);
		},
		// Reducer for updating a contact
		updateContact: (state, action: PayloadAction<Contact>) => {
			const { id, name, email } = action.payload;
			const contactToUpdate = state.contacts.find(
				(contact) => contact.id === id // Find the contact with the given ID in the state
			);
			if (contactToUpdate) {
				contactToUpdate.name = name; // Update the contact's name
				contactToUpdate.email = email; // Update the contact's email
			}
		},
	},
});

// Export the actions generated by the contact slice
export const { addContact, deleteContact, updateContact } =
	contactSlice.actions;

// Selector function to retrieve the contacts from the state
export const selectContacts = (state: RootState) => state.contacts.contacts;

// Export the reducer function generated by the contact slice
export default contactSlice.reducer;
