import { Fragment } from "react";
import { Navbar } from "../../Components/Navbar";
import { SideBar } from "../../Components";
import { useNotes } from "../../notesContext";
import { NotesCard } from "../../Components/NotesCard";

export const Bin = () => {
  const { bin,notesDispatch} = useNotes();
  const onDeletePermanentlyClick=(id)=>{
    notesDispatch({
        type:"PERMANANT_DELETE",
        payload:{id}
    })
  }

  return (
    <Fragment>
      <Navbar />
      <main className="flex min-h-screen">
        {/* Sidebar */}
        <SideBar className="w-64 flex-shrink-0" />

        {/* Notes Container */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Bin</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {bin?.length > 0 ? (
              bin.map((note) => (
                <div
                  key={note.id}
                  className="p-4 bg-white shadow-lg rounded-lg border border-gray-300"
                >
                  <h3 className="text-lg font-semibold">{note.title}</h3>
                  <p className="text-gray-700 mt-2">{note.text}</p>
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      onClick={() => onDeletePermanentlyClick(note.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <span className="material-symbols-outlined">
                        delete_forever
                      </span>
                    </button>
                    
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No Deleted notes found.</p>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
