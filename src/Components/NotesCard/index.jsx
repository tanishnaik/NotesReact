import { useNotes } from "../../notesContext";
import { findNotesInArchieve } from "../../utils/findNotesInArchieve";
import { findNotesInImportant } from "../../utils/isNotesinImportant";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archieve, important } = useNotes();
  const isNotesInArchieve = findNotesInArchieve(archieve, id);
  const isNotesinImportant = findNotesInImportant(important, id);

  const onPinCLick = (id) => {
    notesDispatch({
      type: isPinned ? "UNPIN" : "PIN",
      payload: { id },
    });
  };

  const onArchieveClick = (id) => {
    notesDispatch({
      type: isNotesInArchieve ? "UNARCHIEVE" : "ARCHIEVE",
      payload: { id },
    });
  };

  const onDeletebtnClick = () => {
    notesDispatch({
      type: "BIN",
      payload: { id },
    });
  };

  const onImportantClick = (id) => {
    notesDispatch({
      type: isNotesinImportant ? "UNIMPORTANT" : "IMPORTANT",
      payload: { id },
    });
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg border border-gray-200 transition-transform duration-200 hover:shadow-lg hover:scale-105">
      {/* Title & Pin */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {!isNotesInArchieve && (
          <button
            onClick={() => onPinCLick(id)}
            className={`p-1 rounded-full transition ${
              isPinned ? "bg-red-300 text-white" : "text-gray-600 hover:text-blue-500"
            }`}
          >
            <span className="material-symbols-outlined">push_pin</span>
          </button>
        )}
      </div>

      {/* Note Content */}
      <p className="text-gray-700 mt-2 text-sm">{text}</p>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        {/* Archive Button */}
        <button
          onClick={() => onArchieveClick(id)}
          className={`p-2 rounded-full transition ${
            isNotesInArchieve ? "bg-amber-400 text-white" : "text-gray-600 hover:text-blue-500"
          }`}
        >
          <span className="material-symbols-outlined">archive</span>
        </button>

        {/* Important Button */}
        <button
          onClick={() => onImportantClick(id)}
          className={`p-2 rounded-full transition ${
            isNotesinImportant ? "bg-yellow-500 text-white" : "text-gray-600 hover:text-yellow-500"
          }`}
        >
          <span className="material-symbols-outlined">label_important</span>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDeletebtnClick(id)}
          className="p-2 rounded-full text-red-600 hover:text-red-800 transition"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};
