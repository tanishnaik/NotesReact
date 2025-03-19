import { createContext, useReducer, useContext } from "react";
import { notesReducer } from "../NotesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archieve:[],
    bin:[],
    important:[]
    
  };

  const [{ title, text, notes,archieve,bin,important}, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider value={{ title, text, notes,archieve,bin,important, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
