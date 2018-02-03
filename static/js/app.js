/* data route */
var url = "/data";

function buildPlot() {
    Plotly.d3.json(url, function(error, response) {

        var data = response;
        trace1 = {
            "x": data[0],
            "y": data[1],
            "type": "scatter",
            "mode": "lines"
        };
        
        data = [trace1];
        var layout = {
            title: "Bigfoot Sightings Per Year",
            xaxis: {
                type: "date"
            },
            yaxis: {
                autorange: true,
                type: "linear"
            }
        };
    
        // Plot it
        Plotly.plot("plot", data);
    });

}

buildPlot();
