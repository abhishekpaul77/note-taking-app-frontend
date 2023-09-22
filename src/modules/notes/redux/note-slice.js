import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../../shared/services/api-client";

export const fetchNotes=createAsyncThunk('notes/fetch',async ()=>{
    try{
    const response= await apiClient.read();
    return response;
    }
    catch(err){
        throw err
    }
})

const noteSlice=createSlice({
    name:'noteslice',
    initialState:{"notes":[],'total':0,"search-results":[],isLoading:true,err:null},
    reducers:{
        //CRUD operations
        //Sync operations
        //action-coming from the component
        //state-uodate the centralised store
        addNote(state,action){
            const noteObject=action.payload;
            console.log("payload is:",action.payload)
            state.notes.push(noteObject)
        },
        removeNote(state,action){

        },
        getTotalRecords(state,action){
            state.total=state.notes.length
        },
        searchNote(state,action){
            const searchObj=action.payload
            state['search-results']=state.notes.filter(note=>note.title.includes(searchObj.search))
        },
        sortNote(state,action){
            const sortObj=action.payload;
            const key=sortObj.sortBy;
            state.notes.sort((first,second)=>{
                if(key==='id'){
                    return first[key]-second[key];
                }
                else{
                    return first[key].localeCompare(second[key])
                }
            })
        },
        getNote(state,action){

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNotes.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(fetchNotes.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.notes=action.payload
        })
        .addCase(fetchNotes.rejected,(state,action)=>{
            state.isLoading=false;
            state.notes=[];
            state.err=action.payload;
        })
    }
    
});
export const {addNote, removeNote, getNote,getTotalRecords,searchNote,sortNote}=noteSlice.actions;
export default noteSlice.reducer;