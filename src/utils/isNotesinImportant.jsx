export const findNotesInImportant=(important,id)=>{
    return important.some(note=>note.id===id);//Checking if note in array
  }
  //some functions returns true or false
