import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
    },
  })
);

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <DashboardIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            User Dashboard
          </Typography>
          <Link to="/" style={{textDecoration:'none', color:'#fff', fontWeight:'bold'}}>Log Out</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
