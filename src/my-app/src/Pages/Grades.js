import React from 'react';
import ReactDOM from 'react-dom'; 
const google = window.google;
google.load("visualization", "1", {packages:["corechart"]});

function initialize() {
        var opts = {sendMethod: 'auto'};
        // Replace the data source URL on next line with your data source URL.
        var query = new google.visualization.Query('', opts);         
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
const Grades = () =>{
    return(
        <div> 

        </div>
    )
}
export default Grades;