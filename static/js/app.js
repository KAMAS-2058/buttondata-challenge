// api link
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

d3.json(url).then((urlData) =>{
    console.log("1")

    //making the dropdown fill
    function dropDown(){
        console.log("2")
        for (let i=0; i < urlData.names.length; i++){
            d3.select("#selDataset").append("option").text(urlData.names[i])
        }
    };
    dropDown();
});





function graphing(){


    d3.json(url).then((urlData) => {
        console.log(urlData)

        d3.select("#selDataset").on("change", function () {
            let userInput = d3.select(this).property("value");

            let chosen_otu = urlData.samples.find((sample) => sample.id === userInput);
                console.log("chosen otu is chosen ", chosen_otu);


            let samples_y = chosen_otu.sample_values.slice(0, 10);
                console.log(samples_y);


            let ids_x = chosen_otu.otu_ids.slice(0, 10);
                console.log(ids_x);


            let otu_text = chosen_otu.otu_labels.slice(0, 10);
                console.log(otu_text);
                

            let metadata = urlData.metadata.find((meta) => meta.id === parseInt(userInput));
            console.log("chosen otu metadata ", metadata);


        function bar(){

            const trace1 = {
                type: 'bar',
                x: samples_y.reverse(),
                y: ids_x.reverse(),
                orientation: 'h',
                text: otu_text.reverse(),
                
            };

            const layout1 = {
                title: 'The most common Bacteria in Subject',
                barmode: 'stack',
                bargap: 0.2, 
                width: 800, 
                height: 400
            };

            Plotly.newPlot('bar',[trace1],layout1)
        }
        bar();
        
        function bubble(){
            
            const trace2 = {
                x: ids_x.reverse(),
                y: samples_y.reverse(),
                text: otu_text.reverse(),
                mode : 'markers',
                marker:{
                    size: samples_y,
                    color: ids_x
                }
            };

            const layout2 = {
                title: 'The most common Bacteria in Subject',
            };

            Plotly.newPlot('bubble',[trace2],layout2)

        }
        bubble();
    
        makingDemographics(metadata);
})})}; // end for function for graphing 

function makingDemographics (metadata){
    var demoTable = d3.select("#sample-metadata");

  // Clear the existing table if any
  demoTable.html("");

  // Create the table element
 var table = demoTable.append("table").classed("sample-metadata", true);

  // Create table rows and cells
  Object.entries(metadata).forEach(([key, value]) => {
    var row = table.append("tr");
    row.append("td").text(key);
    row.append("td").text(value);
  });
}

 
graphing();