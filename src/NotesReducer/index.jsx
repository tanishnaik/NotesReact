import { v4 as uuid } from "uuid";
export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: state.title, text: state.text, id: uuid(), isPinned: false },
        ],
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    
      case "ARCHIEVE":
        return {
          ...state,
          archieve:[...state.archieve,state.notes.find(({id})=>id ===payload.id)],
          notes:[state.notes.filter(({id})=>id !==payload.id)],
          
        }
        case "UNARCHIEVE":{
          //first add to note array then remove from archieve
          return {
            ...state,
            notes:[...state.notes,state.archieve.find(({id})=>id ===payload.id)],
            archieve:state.archieve.filter(({id})=>id !==payload.id),
            
            
          }
        }
        case "BIN":
          return {
            ...state,
            bin:[...state.bin,state.notes.find(({id})=>id ===payload.id)],
            notes:[state.notes.filter(({id})=>id !==payload.id)],
            
          }
          
          
    default:
      return state;
  }
};
