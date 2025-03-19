import { Fragment } from "react";
import { Navbar } from "../../Components/Navbar";
import { SideBar } from "../../Components";
import { useNotes } from "../../notesContext";
import { NotesCard } from "../../Components/NotesCard";

export const Bin = () => {
  const {bin}=useNotes();
  
 
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
                        bin.map(({ id, title, text, isPinned }) => (
                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
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

