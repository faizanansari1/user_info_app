import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Chart from "./Chart";
import Graph from "./Graph";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20,
    },
    paper: {
      textAlign: "center",
      boxShadow: "0 0 3px #3f51b5",
    },
    paper2: {
      textAlign: "center",
      boxShadow: "0 0 3px #3f51b5",
    },
    gridContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    bgBox: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 150,
      width: "100%",
    },
    proBox: {
      width: 100,
      height: 100,
      backgroundColor: "blue",
      margin: "0 auto",
      borderRadius: 100,
      marginTop: -40,
      border: "5px solid #efefef",
    },
    proImg: {
      width: "100%",
      borderRadius: 100,
    },
  })
);

export default function UserCard({ userINFO }) {
  console.log("NewProps2", userINFO);
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.gridContainer}>
        {userINFO.map((item) => {
          return (
            <Grid item lg={3} xs={12} key={item.id}>
              <Paper className={classes.paper}>
                <div
                  className={classes.bgBox}
                  style={{ backgroundImage: `url(${item.bgimage})` }}
                ></div>
                <div className={classes.proBox}>
                  <img
                    className={classes.proImg}
                    src={item.image}
                    alt="image"
                  ></img>
                </div>
                <h2 style={{ marginBottom: 10 }}>{item.name}</h2>
                <h6
                  style={{
                    color: "gray",
                    margin: 0,
                    paddingBottom: "5px",
                    lineHeight: 2,
                    fontSize: "12px",
                  }}
                >
                  ( {item.country} , {item.city} )
                </h6>
                <h4
                  style={{
                    color: "#808080a6",
                    margin: 0,
                    padding: "0 30px",
                    paddingBottom: "10px",
                    lineHeight: 2,
                  }}
                >
                  <i>
                    "I like the way you work it No diggity I wanna bag it up"
                  </i>
                </h4>
                <div>
                  <List
                    style={{
                      borderTop: "1px solid gray",
                      margin: "0 20px",
                      padding: "2px 0",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                  >
                    <ListItem style={{ padding: "5px 0", textAlign: "left" }}>
                      <ListItemText primary={<b>Religion</b>} />
                      <ListItemText
                        primary={item.religion}
                        style={{ textAlign: "right" }}
                      />
                    </ListItem>
                    <ListItem style={{ padding: "5px 0", textAlign: "left" }}>
                      <ListItemText primary={<b>Gender</b>} />
                      <ListItemText
                        primary={item.gender}
                        style={{ textAlign: "right" }}
                      />
                    </ListItem>
                    <ListItem
                      button
                      onClick={handleClick}
                      style={{ padding: "5px 0", textAlign: "left" }}
                    >
                      <ListItemText primary={<b>more</b>} />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem
                          style={{ padding: "5px 0", textAlign: "left" }}
                        >
                          <ListItemText primary={<b>Education</b>} />
                          <ListItemText
                            primary={item.education}
                            style={{ textAlign: "right" }}
                          />
                        </ListItem>

                        <ListItem
                          style={{ padding: "5px 0", textAlign: "left" }}
                        >
                          <ListItemText primary={<b>Relationship</b>} />
                          <ListItemText
                            primary={item.relationship}
                            style={{ textAlign: "right" }}
                          />
                        </ListItem>
                        {/* <ListItem
                          style={{ padding: "5px 0", textAlign: "left" }}
                        >
                          <ListItemText primary={<b>Hobbies</b>} />
                          <ListItemText
                            primary={item.hobbies}
                            style={{ textAlign: "right" }}
                          />
                        </ListItem> */}
                        <ListItem
                          style={{ padding: "5px 0", textAlign: "left" }}
                        >
                          <ListItemText primary={<b>Favirote Food</b>} />
                          <ListItemText
                            primary={item.favfood}
                            style={{ textAlign: "right" }}
                          />
                        </ListItem>
                      </List>
                    </Collapse>
                  </List>
                </div>
              </Paper>
            </Grid>
          );
        })}

        <Grid
          item
          lg={9}
          xs={12}
          style={{ paddingTop: '0' }}
        >
          <Chart />
          <Graph />
        </Grid>
      </Grid>
    </div>
  );
}
