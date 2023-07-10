// api link
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// 
// function init(){

//     function updatePlotly(){

        d3.json(url).then((urlData) => {

        // Pulling data from api
            var sampleList = urlData.samples
            console.log(sampleList);

        //getting top 10 otu_ids
            let topTen = sampleList.slice(0,10)
            console.log(topTen)

            trace1 = {
                x: topTen.otu_ids,
                y: topTen.sample_values,
                text: topTen.otu_labels,
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

            // trace2 = {
                // x:
                // y:
                // text:
                // mode:'markers'
                // marker:{
                //     size:[40, 60, 80, 100]
                // }
            // }

            // layout2 = {
            //     title: 'Bubble Chart',
            //     showlegend: false,
            //     height: 600,
            //     width: 600
            // };

            // Plotly.newPlot('bubble',trace2);
            
            // display the MetaData for the individual

            
        

        });
//     }    

// Plotly.restyle("plot", "x", [x]);
// Plotly.restyle("plot", "y", [y]);

// }
// init();




