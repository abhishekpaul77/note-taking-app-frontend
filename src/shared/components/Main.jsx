import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNote from '../../modules/notes/components/AddNote'
import DeleteNote from '../../modules/notes/components/DeleteNote'
import SearchNote from '../../modules/notes/components/SearchNote'
import UpdateNote from '../../modules/notes/components/UpdateNote'
import ViewAll from '../../modules/notes/components/ViewAll'
import List from '../../modules/notes/components/List'

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ViewAll/>}/>
        <Route path='add-note' element={<AddNote/>}/>
        <Route path='delete-note' element={<DeleteNote/>}/>
        <Route path='view-all/:screentype' element={<List/>}/>
        <Route path='search-note' element={<SearchNote/>}/>
        <Route path='update-note' element={<UpdateNote/>}/>
      </Routes>
    </div>
  )
}

export default Main
