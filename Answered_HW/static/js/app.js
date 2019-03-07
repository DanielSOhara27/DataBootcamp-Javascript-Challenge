// from data.js
var tableData = data;

// YOUR CODE HERE!
/*
* Date | City | State | Country | Shape | Duration | Comments
* */
function createTable(tableData){
    let table = d3.select("#ufo-table");
    let tbody = table.select("tbody");
    tbody.html("");

    tableData.forEach( (data) => {
        let row = tbody.append("tr");
        row.append("td").text(data["datetime"]);
        row.append("td").text(data["city"]);
        row.append("td").text(data["state"]);
        row.append("td").text(data["country"]);
        row.append("td").text(data["shape"]);
        row.append("td").text(data["durationMinutes"]);
        row.append("td").text(data["comments"]);
    });
}

var filterButton = d3.select("#filter-btn");
filterButton.on("click", function(){
    d3.event.preventDefault();
    let filter = d3.select("#datetime");
    let filterDate = filter.property("value");
    filter.property("value","");

    if(filterDate != "") {
        let filteredData = tableData.filter(data => data["datetime"] === filterDate);
        console.log(filteredData);
        createTable(filteredData);
    }
    else{
        createTable(tableData);
    }


});

createTable(tableData);
