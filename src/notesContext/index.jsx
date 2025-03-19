import { createContext, useReducer, useContext } from "react";
import { notesReducer } from "../NotesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archieve:[],
    bin:[]
  };

  const [{ title, text, notes,archieve,bin }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider value={{ title, text, notes,archieve,bin, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
