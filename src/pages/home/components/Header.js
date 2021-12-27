import * as React from 'react';
import { Container, Grid, Typography, Item, Button } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const Header = () =>{
    return (
        <React.Fragment>
            <Container maxWidth='sm' style={{marginTop: '50px'}}>
                <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                    Welcome to Travel App
                </Typography>
                <Typography variant='p' align='center' color='textSecondary' paragraph>
                    Here at Travel App, we provide free tourist information on everything you can 
                    imagine from famous attractions, maps, favorite tours, transportation and yes, MUST-DO lists too.
                    We too offer paid service to arrange you everything you need on your wonderful trip. 
                </Typography>
                <div>
                    <Grid container spacing={2} justifyContent='center'>
                        <Grid item>
                            <Button variant='outlined' startIcon={<LoginIcon fontSize='medium'/>}>Click to login</Button> 
                        </Grid>
                        <Grid item>
                            <Button variant='contained' endIcon={<ReadMoreIcon fontSize='medium'/>}>View attractions</Button>  
                        </Grid>
                    </Grid>
                </div>
            </Container>
    </React.Fragment>
    )
}

export default Header