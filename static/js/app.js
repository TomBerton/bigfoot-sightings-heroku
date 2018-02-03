/* data route */
var url = "/data";

function buildPlot() {
    // YOUR CODE HERE
    // fetch the data from your api
    // plot the results
    Plotly.d3.json(url, function(error, response) {

        var data = response;
        trace1 = {
            "x": data[0],
            "y": data[1],
            "type": "scatter",
            "mode": "lines"
        };
        data = [trace1];
    
        // Plot it
        Plotly.plot("plot", data);
    });

}

buildPlot();
