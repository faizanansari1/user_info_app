import { Paper } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
      displayName: "BarExample",
    },
  ],
};

export default function Graph() {
  return (
    <>
      <Paper style={{ margin: "0 10px", padding: "20px",}}>
        <div>
          <h2
            style={{
              margin: 0,
              marginBottom: "17px",
              color: "#3f51b5",
              float: "left",
              borderBottom: "2px solid #ccc",
              paddingBottom: "3px",
              display: "inline-block",
              textShadow: "3px 3px 3px #ccc",
            }}
          >
            <i>User Progress</i>
          </h2>
          <Bar
            data={data}
            width={100}
            height={250}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </Paper>
    </>
  );
}
