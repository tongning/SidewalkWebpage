// Takes a set of points and a set of street geometries. Fits labels to those streets, giving counts of how many labels
// of each label type are closest to each street. Streets are then also split up into smaller line segments, and the
// same counts are then tabulated for each of those segments.
function setupIRR(data) {
    // unpack different pieces of data
    var streetsData = data.streets;
    var labelsData = data.labels;


    
}

// Takes the results of the IRR setup and outputs the CSVs on the client machine. Maybe all in a .tar or something?
function outputData() {
    
}

function irr(turf) {
    document.getElementById("irr-button").addEventListener("click", function() {
        var route = document.getElementById('route-text').value;
        var hit = document.getElementById('hit-text').value;
        // TODO get data from server once controller is set up
        // $.getJSON("/irr/" + route + "/" + hit, function (data) {
        //     $("#irr-result").html(data["what did we run?"]);
        // })
    });
}