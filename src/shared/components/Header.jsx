import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalRecords } from '../../modules/notes/redux/note-slice';
import { useEffect } from 'react';


export default function Header() {
  const {total}=useSelector(state=>state.noteSlice)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getTotalRecords())
  })
  
  
  return (

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Panna Chaap App
          </Typography>
          <Typography>
           Total Records: {total} &nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
  );
}