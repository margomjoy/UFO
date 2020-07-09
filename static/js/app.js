// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");

$searchBtn.addEventListener("click", handleSearchButtonClick);

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      // Get get the current data object and its fields
      var data = tableData[i];
      var fields = Object.keys(data);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
      }
    }
  }
  
  function handleSearchButtonClick(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    var filterDate = $dateInput.value.trim();
    if (filterDate != "") {
      tableData = data.filter(function (data) {
        var dataDate = data.datetime;
        return dataDate === filterDate;
      });
  };
  renderTable();
    }
  function resetData() {
    tableData = data;
    $dateInput.value = "";
  
    renderTable();
}

renderTable();