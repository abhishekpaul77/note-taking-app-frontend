import {configureStore} from '@reduxjs/toolkit'
import noteSlice from '../../modules/notes/redux/note-slice'

export default configureStore({
    reducer:{
        noteSlice
    }
})