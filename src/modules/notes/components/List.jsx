import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
// import { noteOperations } from "../services/note-operation";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, getTotalRecords, searchNote, sortNote } from "../redux/note-slice";
import { TextField } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// import { apiClient } from "../../../shared/services/api-client";

const List = (props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalRecords());
    dispatch(fetchNotes())
    // const promise=apiClient.read();
    // promise.then(result=>{
    //   console.log('Result is',result)
    // }).catch(err=>{
    //   console.log('Error is',err)
    // }
    // )
    // eslint-disable-next-line
  },[]);

  const noteObject=useSelector(state=>{
    return {'notes':state.noteSlice.notes,'total':state.noteSlice.total,'results':state.noteSlice['search-results'],'isLoading':state.noteSlice.isLoading}
  })

  const takeSearchValue=(event)=>{
    const searchValue=event.target.value;
    const searchData={search:searchValue};
    dispatch(searchNote(searchData));
  }

  const [sort, setSort] = useState('')

  const sortIt=(event)=>{
    const sortBy=event.target.value
    setSort(sortBy)
    dispatch(sortNote({sortBy}))
  }

  return (
    <div>
      {/* List {props.note.id} {props.note.title} {props.note.desc} */}
      <h1>Total Records : {noteObject.total.length} </h1>
      {noteObject.isLoading ? <p>Loading.....</p> : <p>Data Acquired</p>}
      <TextField onChange={takeSearchValue} id="outlined-basic" label="Search by title" variant="outlined" />
     <br/>
     <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={sortIt}
        >
          <MenuItem value="id">By id</MenuItem>
          <MenuItem value="title">By title</MenuItem>
          <MenuItem value="desc">By desc</MenuItem>
        </Select>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Id</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Completion Date</StyledTableCell>
              <StyledTableCell align="right">Importance</StyledTableCell>
              <StyledTableCell align="right">Operations</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noteObject.results.length>0 && noteObject.results.map(note=>{
              return (
                <StyledTableRow>
                  <TableCell align="right">{note.id}</TableCell>
                  <TableCell align="left">{note.title}</TableCell>
                  <TableCell align="left">{note.desc}</TableCell>
                  <TableCell align="left">{note.cdate}</TableCell>
                  <TableCell align="right">{note.colorVal}</TableCell>
                  <TableCell align="right">
                    {<DeleteIcon />}
                    {<EditIcon />}
                  </TableCell>
                </StyledTableRow>
              );
            })}
            {noteObject.results.length===0 && noteObject.notes.map((note) => {
              return (
                <StyledTableRow>
                  <TableCell align="right">{note.id}</TableCell>
                  <TableCell align="left">{note.title}</TableCell>
                  <TableCell align="left">{note.desc}</TableCell>
                  <TableCell align="left">{note.cdate}</TableCell>
                  <TableCell align="right">{note.colorVal}</TableCell>
                  <TableCell align="right">
                    {<DeleteIcon />}
                    {<EditIcon />}
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
