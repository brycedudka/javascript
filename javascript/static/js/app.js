// from data.js - source data file 
var tableData = data;
var tbody = d3.select("tbody");
function buildTable(data){
//Clear Data
  tbody.html("");
//Loop through data
  data.forEach((dataRow) => {
// Append Table Row tr to the Table Body (tbody)
      let row = tbody.append("tr");
// Object.values & forEach to Iterate Through Values and append each value
      Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
      });
  })
}
// when user clicks 
function handleClick(){
  // Prevents refresh
  d3.event.preventDefault();
  // Select HTML Input Element & Get the Value Property 
  let date = d3.select("#datetime").property("value");
  let filterData = tableData;
  // Check if a Date was Entered & activate filter;
  if(date) {
      // Apply Filter to the Table Data
      filterData = filterData.filter((row) => row.datetime === date);
  }
  // Build Table with filtered data
  buildTable(filterData);
}
// On Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js
buildTable(tableData);