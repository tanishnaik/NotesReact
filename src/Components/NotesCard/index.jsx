import { useNotes } from "../../notesContext";
import { findNotesInArchieve } from "../../utils/findNotesInArchieve";
export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archieve } = useNotes();
  const isNotesInArchieve = findNotesInArchieve(archieve, id);
  const onPinCLick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  
  const onArchieveClick = (id) => {
    !isNotesInArchieve
      ? notesDispatch({
          type: "ARCHIEVE",
          payload: { id },
        })
      : notesDispatch({
          type: "UNARCHIEVE",
          payload: { id },
        });
  };
const onDeletebtnClick=()=>{
  notesDispatch({
    type:"BIN",
    payload:{id}
  })

}
const onPermantClick=(id)=>{
  notesDispatch({
    type:"PERMANTDELETE",
    payload:{id}
  })
}
  return (
    <div
      key={id}
      className="p-4 bg-white shadow-lg rounded-lg border border-gray-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {!isNotesInArchieve ? (
          <button onClick={() => onPinCLick(id)}>
            <span
              className={`material-symbols-outlined text-gray-600 hover:text-blue-500 ${
                isPinned ? "bg-red-300" : ""
              }`}
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <p className="text-gray-700 mt-2">{text}</p>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="text-gray-600 hover:text-blue-500"
          onClick={() => onArchieveClick(id)}
        >
          <span
            className={
              isNotesInArchieve ? "bg-amber-400" : "material-symbols-outlined"
            }
          >
            archive
          </span>
        </button>

        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => onDeletebtnClick(id)}
        >
          
          <span onClick={()=>onPermantClick(id)}
            className="material-symbols-outlined"
            
          >
            delete
          </span>
        </button>
      </div>
    </div>
  );
};
