import * as React from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
function Nav() {
  return (
      <React.Fragment>
          <CssBaseline/>
          <AppBar position='relative'>
              <Toolbar>
                <TravelExploreIcon fontSize='large'/>
                <Typography variant='h5'>
                    Travel App
                </Typography>
              </Toolbar>
          </AppBar>
      </React.Fragment>
  )
}
export default Nav
