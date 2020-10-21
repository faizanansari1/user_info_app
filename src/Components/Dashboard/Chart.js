import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StorageIcon from "@material-ui/icons/Storage";
import RefreshIcon from "@material-ui/icons/Refresh";
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import DateRangeIcon from '@material-ui/icons/DateRange';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
export default function Chart() {
  return (
    <div>
      <Grid spacing={2} container className="grid-container">
        <Grid item lg={3} sm={12} xs={12} style={{}}>
          <Paper  style={{boxShadow:'0 0 5px gray'}}  data-aos="fade-left">
            <div className="grid-box">
              <StorageIcon style={{ fontSize: "45px", color: "#F3BB45" }} />
              <div>
                <h5>Capacity</h5>
                <h2>105GB</h2>
              </div>
            </div>
            <div style={{display:'flex', margin:'0 25px', padding:"5px 0", borderTop:'1px solid rgb(128 128 128 / 47%)'}}>
              <RefreshIcon  style={{color:'#ccc'}}/>
              <button className="button"> 
              <i>Updated now</i>
              </button>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3} sm={12} xs={12} style={{}}>
          <Paper style={{boxShadow:'0 0 5px gray'}} data-aos="fade-left">
            <div className="grid-box">
              <CollectionsBookmarkIcon style={{ fontSize: "45px", color: "#7AC29A" }} />
              <div>
                <h5>Revenue</h5>
                <h2>$1,345</h2>
              </div>
            </div>
            <div style={{display:'flex', margin:'0 25px', padding:"5px 0", borderTop:'1px solid rgb(128 128 128 / 47%)'}}>
              <DateRangeIcon  style={{color:'#ccc'}}/>
              <button className="button"> 
              <i>Lats day</i>
              </button>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3} sm={12} xs={12} style={{}}>
          <Paper  style={{boxShadow:'0 0 5px gray'}} data-aos="fade-left">
            <div className="grid-box">
              <ErrorOutlineIcon style={{ fontSize: "45px", color: "#EB5E28" }} />
              <div>
                <h5>Error</h5>
                <h2>25</h2>
              </div>
            </div>
            <div style={{display:'flex', margin:'0 25px', padding:"5px 0", borderTop:'1px solid rgb(128 128 128 / 47%)'}}>
              <QueryBuilderIcon  style={{color:'#ccc'}}/>
              <button className="button"> 
              <i>In the last hour</i>
              </button>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3} sm={12} xs={12} style={{}}>
          <Paper  style={{boxShadow:'0 0 5px gray'}} data-aos="fade-left" >
            <div className="grid-box">
              <TwitterIcon style={{ fontSize: "45px", color: "#68B3C8" }} />
              <div>
                <h5>Followers</h5>
                <h2>+45</h2>
              </div>
            </div>
            <div style={{display:'flex', margin:'0 25px', padding:"5px 0", borderTop:'1px solid rgb(128 128 128 / 47%)'}}>
              <RefreshIcon  style={{color:'#ccc'}}/>
              <button className="button"> 
              <i>Updated now</i>
              </button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
