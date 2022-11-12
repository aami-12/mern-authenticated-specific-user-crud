import create from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    name:"",
    phoneno:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
  },

  updateForm: {
    _id: null,
     name: "",
       phoneno: "",
       address1: "",
       address2: "",
       city: "",
       state: "",
  },

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get("/notes");

    // Set to state
    set({ notes: res.data.notes });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes } = notesStore.getState();
    const res = await axios.post("/notes", createForm);

    set({
      notes: [...notes, res.data.note],
      createForm: {
         name: "",
           phoneno: "",
           address1: "",
           address2: "",
           city: "",
           state: "",
     
      },
    });
  },

  deleteNote: async (_id) => {
    // Delete the note
    const res = await axios.delete(`/notes/${_id}`);
    const { notes } = notesStore.getState();

    // Update state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });

    set({ notes: newNotes });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id,name,phoneno,address1,address2,city,state }) => {
    set({
      updateForm: {
        name,
        phoneno,
        address1,
        address2,
        city,
        state,
      
        _id,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {
      updateForm: { name,phoneno,address1,address2,city,state, _id },
      notes,
    } = notesStore.getState();

    // Send the update request
    const res = await axios.put(`/notes/${_id}`, {
       name,
       phoneno,
       address1,
       address2,
       city,
       state,
    
    });

    // Update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
          name: "",
            phoneno: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
    
      },
    });
  },
}));

export default notesStore;
