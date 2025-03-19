 export const findNotesInArchieve=(archieve,id)=>{
    return archieve.some(note=>note.id===id);//Checking if note in array
  }
  //some functions returns true or false
