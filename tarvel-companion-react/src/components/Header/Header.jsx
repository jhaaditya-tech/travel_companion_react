import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles';

const Header = () => {
    const classes=useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className="classes.title">
                    Travel Companion
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className="classes.title">
                        Explore the World
                    </Typography>

                </Box>
            </Toolbar>

        </AppBar>

    )
}

export default Header;