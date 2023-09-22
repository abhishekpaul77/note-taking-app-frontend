import { Note } from "../models/note"


//Services--->CRUD operations
export const noteOperations={
    notes:[],
    addNote(id,title,desc,cdate,colorVal){
        const noteObject=new Note(id,title,desc,cdate,colorVal)
        this.notes.push(noteObject);
        console.log("All notes are:",this.notes)
        return noteObject
    },
    getNotes(){
        return this.notes;
    }

}