import { Container, Grid} from "@mui/material";
import Header from "../../../shared/components/Header";
// import Menu from "../../../shared/components/Menu";
// import Main from "../../../shared/components/Main";
// import AddNote from "../components/AddNote";
// import List from "../components/List";
// import { useState } from "react";
// import { noteOperations } from "../services/note-operation";
import Main from "../../../shared/components/Main";
import Menu from "../../../shared/components/Menu";

export const DashBoard=()=>{

    // const [notes, setNotes] = useState([])

    // const collectNoteData=()=>{
    //     setNotes([...noteOperations.getNotes()])
    // }

    return(
        <Container fixed>
        <Header/>
        <Grid container spacing={2}>
        <Grid item xs={4}>
        <Menu/>
        </Grid>
        <Grid item xs={8}>
        <Main/>
        </Grid>

        </Grid>
        </Container>
    );
}