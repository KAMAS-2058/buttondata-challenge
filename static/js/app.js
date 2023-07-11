// api link
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// demo data

let yellow = [22,55,77,99]
let xray = ['blue','green','yellow','orange']
let demoText = "ayy lamo"


// initiating the function
function init(){
    console.log("init function working")
    // Horizontal Bar graph
    trace1 = {
        x: xray,
        y: yellow,
        text: demoText,
        type: 'bar',
        orientation: 'h'
    };

    layout1 = {
        x:'Otu Labels',
        y:'Sample Value',
        title: 'Top ten otu ids\' for this individual',
        height: 500,
        width : 350
    };

    Plotly.newPlot('bar',trace1,layout1);

    // Making the Bubble Chart

    trace2 = {
        x: xray,
        y: yellow,
        text: demoText,
        mode:'markers',
        marker:{
            size:[40, 60, 80, 100]
        }
    }

    layout2 = {
        title: 'Bubble Chart',
        showlegend: false,
        height: 600,
        width: 600
    };

    Plotly.newPlot('bubble',trace2);

    // display the MetaData for the individual


};

d3.selectAll("#selDataset").on("change", getData);

function updatePlots(){
    let dropdownMenu =  d3.selesct("#selDataset")
    let dataset = d3.dropdownmentu.property("value")
    console.log("function to update plot working")
    
        d3.json(url).then((urlData) => {
            console.log("api call working")
            // take data from info from id the is equal to user selection
            
            

            
        

        })
    updatePlots(data);
};

function updatePlots(data_refreshed) {
console.log("refreshed data input function working!")

Plotly.restyle('Bar',,[data_refreshed])
Plotly.restyle('Bubble',,[data_refreshed])
}
init();