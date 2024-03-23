import React from 'react';
import ReactDOM from 'react-dom'; 
import { Chart } from "react-google-charts";

/**export const data = [
    [
      { type: "number", label: "x" },
      { type: "number", label: "values" },
      { id: "i0", type: "number", role: "interval" },
      { id: "i1", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
    ],
    [1, 100, 90, 110, 85, 96, 104, 120],
    [2, 120, 95, 130, 90, 113, 124, 140],
    [3, 130, 105, 140, 100, 117, 133, 139],
    [4, 90, 85, 95, 85, 88, 92, 95],
    [5, 70, 74, 63, 67, 69, 70, 72],
    [6, 30, 39, 22, 21, 28, 34, 40],
    [7, 80, 77, 83, 70, 77, 85, 90],
    [8, 100, 90, 110, 85, 95, 102, 110],
  ];**/
  export const data = [
    [
      "Assignment Number",
      "Weekly Reports",
      "Presentations",
      "Peer Reviews",
      "Project Reports"
    ],
    [1, 80, 76.8, 91, 85],
    [2, 85, 79.5, 85, 86],
    [3, 79, 88, 90, 88],
    [4, 80, 83, 89, 87],
    [5, 80, 87, 77, 89],
  ];
  
  export const options = {
    chart: {
      title: "CSCE 483: Senior CAPSTONE DESIGN",
      subtitle: "Categorized into multiple grade segments",
      hAxis: { title: "Grade per category", minValue: 0, maxValue: 100 },
      vAxis: { title: "Assignment Number", minValue: 0, maxValue: 100 },
      legend: "none",
    },
  };

  export const data_1 = [
    [
      "Assignment Number",
      "Quizzes",
      "Homeworks",
      "Exams",
    ],
    [1, 80, 76.8, 91],
    [2, 85, 79.5, 85],
    [3, 79, 88, 90],
    [4, 80, 83, 89],
    [5, 80, 87, 77],
  ];
  
  export const options_1 = {
    chart: {
      title: "CSCE 465: Network Security",
      subtitle: "Categorized into multiple grade segments",
      hAxis: { title: "Grade per category", minValue: 0, maxValue: 100 },
      vAxis: { title: "Assignment Number", minValue: 0, maxValue: 100 },
      legend: "none",
    },
  };

  export const data_2 = [
    [
      "Assignment Number",
      "Programming Assignments",
      "Contest",
      "Quizzes",
      "Midterms"
    ],
    [1, 80, 76, 85, 79],
    [2, 78, 79.5, 83, 89],
    [3, 84, 78, 96, 92],
    [4, 85, 84, 83, 83],
    [5, 82, 88, 90, 89],
  ];
  
  export const options_2 = {
    chart: {
      title: "CSCE 420: Artificial Intelligence",
      subtitle: "Categorized into multiple grade segments",
      hAxis: { title: "Grade per category", minValue: 0, maxValue: 100 },
      vAxis: { title: "Assignment Number", minValue: 0, maxValue: 100 },
      legend: "none",
    },
  };
  export const data_3 = [
    [
      "Assignment Number",
      "Weekly Assignments",
      "Programming Assignments",
      "Quizzes",
      "Exams"
    ],
    [1, 70, 80, 90, 85],
    [2, 85, 79.5, 85, 86],
    [3, 92, 88, 87, 79],
    [4, 84, 88, 89, 90],
    [5, 90, 91, 87, 90],
  ];
  
  export const options_3 = {
    chart: {
      title: "ECEN 424: Fundamentals of Networking",
      subtitle: "Categorized into multiple grade segments",
      hAxis: { title: "Grade per category", minValue: 0, maxValue: 100 },
      vAxis: { title: "Assignment Number", minValue: 0, maxValue: 100 },
      legend: "none",
    },
  };
  export const data_4 = [
    [
      "Assignment Number",
      "Papers", 
      "Quizzes", 
      "Exams"
    ],
    [1, 85, 86, 88],
    [2, 87, 89, 87],
    [3, 89, 76, 85],
    [4, 81, 82, 84],
    [5, 83, 77, 89],
  ];
  
  export const options_4 = {
    chart: {
      title: "CSCE 402: Law and Policy in Cybersecurity",
      subtitle: "Categorized into multiple grade segments",
      hAxis: { title: "Grade per category", minValue: 0, maxValue: 100 },
      vAxis: { title: "Assignment Number", minValue: 0, maxValue: 100 },
      legend: "none",
    },
  };
      
const Grades = () =>{
    return(
        <div> 
            <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
            <br></br>
            <br></br>
            <Chart 
                chartType="Line"
                width="100%"
                height="400px"
                data={data_1}
                options={options_1}
            />
            <br></br>
            <br></br>
            <Chart 
                chartType="Line"
                width="100%"
                height="400px"
                data={data_2}
                options={options_2}
            />
            <br></br>
            <br></br>
            <Chart 
                chartType="Line"
                width="100%"
                height="400px"
                data={data_3}
                options={options_3}
            />
            <br></br>
            <br></br>
            <Chart 
                chartType="Line"
                width="100%"
                height="400px"
                data={data_4}
                options={options_4}
            />     
            <br></br>
            <br></br>       
        </div>
    )
};
export default Grades;