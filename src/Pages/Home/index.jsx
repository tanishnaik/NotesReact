import { Fragment } from "react";
import { Navbar } from "../../Components/Navbar";
import { SideBar } from "../../Components";
// import { notesReducer } from "../../NotesReducer";
import { NotesCard } from "../../Components/NotesCard";
import { useNotes } from "../../notesContext";

export const Home = () => {
  const {title,text,notes,notesDispatch,archieve}=useNotes();
  
  const onTitleChange = (e) => {
    notesDispatch({ type: "TITLE", payload: e.target.value });
  };
  const onTextChange = (e) => {
    notesDispatch({ type: "TEXT", payload: e.target.value });
  };
  const onAddClick = () => {
    notesDispatch({ type: "ADD_NOTE" });
  };
console.log(notes);
//Segregating pinnedNotes
const pinnedNotes=notes?.length>0 ?notes.filter(({isPinned})=>isPinned):[];
console.log(pinnedNotes);
//Other notes
const otherNotes=notes?.length>0 ?notes.filter(({isPinned})=>!isPinned):[];
console.log(otherNotes);
console.log(archieve);
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-0  bg-gray-100 min-h-screen">
        <SideBar />
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <div className="flex flex-col gap-4">
            <input
              value={title}
              placeholder="Enter the title"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={onTitleChange}
            />
            <textarea
              value={text}
              placeholder="Enter the text"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={onTextChange}
            ></textarea>
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400 hover:bg-blue-600"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          {
            pinnedNotes?.length>0 &&  <div className="mt-6 grid grid-cols-1 gap-4">
            <h3>Pinned Notes</h3>
            {pinnedNotes.map(({ id, title, text,isPinned }) => (
              <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
            ))}
          </div>

          }
         
          {
            otherNotes?.length>0 && <div className="mt-6 grid grid-cols-1 gap-4">
            <h3>other Notes</h3>
            {otherNotes.map(({ id, title, text,isPinned }) => (
              <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
            ))}
          </div>
          }
        </div>
      </main>
    </Fragment>
  );
};
