// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    
    //console.log(ufoData);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });

});


var button = d3.select("#filter-btn");
//console.log(button)

var form = d3.select("#form");
//console.log(form)

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");

    console.log(inputElement);
   
      
    var inputValue = inputElement.property("value");
     
    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    tbody.html("")


    filteredData.forEach(function(dateFilter){
        console.log(dateFilter);
        

        var row = tbody.append("tr");

        Object.entries(dateFilter).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });

       

    });

}
     
   
  