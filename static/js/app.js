// from data.js
var tableData = data;
var tbody = d3.select("tbody")

function buildtable (data){
    tbody.html("")
    data.forEach((datarow) => {
    var row = tbody.append("tr")
    Object.values(datarow).forEach((value)=>{
    var cell = row.append("td")
    cell.text(value)
    })
    });
}

buildtable(tableData)

function filtering (){
    d3.event.preventDefault();
    var input = d3.select("#datetime").property("value")
var filtered_data = tableData;
if (input){
filtered_data = filtered_data.filter(row => row.datetime === input)
}
buildtable(filtered_data)}

var button = d3.select("#filter-btn")
button.on("click",filtering);