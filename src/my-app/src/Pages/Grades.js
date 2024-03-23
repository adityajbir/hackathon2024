import React from 'react';
import ReactDOM from 'react-dom'; 
import { VictoryChart, VictoryPolarAxis } from 'victory'
import { VictoryArea, VictoryAxis, VictoryTheme, VictoryLine } from 'victory'
const Grades = () =>{
    return(
        <head>
            <script src="https://www.gstatic.com/charts/loader.js"></script>
            <script> 
                google.charts.load('current', {packages: ['corechart'], callback: drawChart});
                google.charts.setOnLoadCallback(drawChart);
                google.charts.safeLoad({ packages: ['corechart'] });
                google.load("visualization", "1", {packages:["corechart"]});

                function initialize() {
                    var opts = {sendMethod: 'auto'};
                    // Replace the data source URL on next line with your data source URL.
                    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Xiz2MaSceoSpGCV1TJ-19F8HfJziot6gxsxspr1NOCI/edit#gid=0', opts);         
                    -
                    // Optional request to return only column C and the sum of column B, grouped by C members.
                    //query.setQuery('select C, sum(B) group by C');

                    // Send the query with a callback function.
                    query.send(handleQueryResponse);
                }

                function handleQueryResponse(response) {
                    if (response.isError()) {
                        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                        return;
                    }

                    var data = response.getDataTable();

                var options = {
                    title: 'Company Performance'
                };

                var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                chart.draw(data, options);
                }

                google.setOnLoadCallback(initialize);
            </script> 
        </head>
    )
}
export default Grades;