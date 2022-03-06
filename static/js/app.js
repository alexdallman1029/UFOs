// import data from data.js
const tableData = data;

// reference HTML table using d3
//code breakdown: Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    // This clears existing data
    tbody.html("");
    // ForEach function only works on array
    data.forEach((dataRow) => {
        // Tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
        let row = tbody.append("tr");
    //we're telling our code put each sighting onto its own row of data. The val argument represents each 
    //item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {
            // Set up the action of appending data into a table data tag (<td>)
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Filter data using D3 and buttons
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);