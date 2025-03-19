export const Restore=(bin,id)=>{
    return bin.some(note=>note.id===id);//Checking if note in array
  }
  //some functions returns true or false
