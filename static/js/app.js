// api link
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// demo data

let yellow = [22,55,77,99]
let xray = ['blue','green','yellow','orange']
let demoText = "ayy lamo"


// initiating the function
function init(){
    console.log("init function working");

    function userInput(){
        
        // making drop down menu
        d3.selectAll("#selDataset").on("change",getUserInput)

            function getUserInput(){
                    d3.json(url).then((data) =>{
                    console.log(data);

                    data.names.forEach((name) =>{
                        dropdown.append('option').text(name).property('value')
                    })
                })
                console.log('user input dropdown section working')
            };
        function getData(){
            





            function dataPlotMeta(){






                // Horizontal Bar graph
                trace1 = {
                    x: xray,
                    y: yellow,
                    text: demoText,
                    type: 'bar',
                    orientation: 'h',
                };

                layout1 = {
                    x:'Otu Labels',
                    y:'Sample Value',
                    title: 'Top ten otu ids\' for this individual',
                };

                Plotly.newPlot('bar',[trace1],layout1);

                // Making the Bubble Chart

                trace2 = {
                    x: xray,
                    y: yellow,
                    text: demoText,
                    mode:'markers',
                    marker:{
                        size:[40, 60, 80, 100]
                    },
                }

                layout2 = {
                    title: 'Bubble Chart',
                    showlegend: false,

                };

                Plotly.newPlot('bubble', [trace2], layout2);

                // display the MetaData for the individual
            
            
            
            };// data Plot Meta
        };//get data
    };//user input
   
}; // init function
init();


// function updatePlots(){
//     // Use d3 to select the dropdown menu
//     let dropdownMenu =  d3.selesct("#selDataset")
//     //Assign the value of the dropdown mentu otion to a variable
//     let dataset = d3.dropdownmentu.property("userInput")

//     console.log("function to update plot working")
    
        
//     updatePlots(data);
// };

// function updatePlots(data_refreshed) {
// console.log("refreshed data input function working!")

// Plotly.restyle('Bar',,[data_refreshed])
// Plotly.restyle('Bubble',,[data_refreshed])
// }
