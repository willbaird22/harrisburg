// Set Dimensions
const xSize = 800;
const ySize = 550;
const margin = 80;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Fetch data
let unitedKingdomData = [
    // [-29, 4.0], 
    // [-28, 0.0]
    [-27, 1.0],
    [-26, 1.0],
    [-25, 1.0],
    [-24, 2.0],
    [-23, 4.0],
    [-22, 3.0],
    [-21, 3.0],
    [-20, 2.0],
    [-19, 6.0],
    [-18, 2.0],
    [-17, 2.0],
    [-16, 4.0],
    [-15, 5.0],
    [-14, 5.0],
    [-13, 11.0],
    [-12, 11.0],
    [-11, 7.0],
    [-10, 7.0],
    [-9, 20.0],
    [-8, 21.0],
    [-7, 22.0],
    [-6, 24.0],
    [-5, 10.0],
    [-4, 1.0],
    [-3, -14.0],
    [-2, -8.0],
    [-1, -24.0],
    [0, -26.0],
    [1, -28.0],
    [2, -29.0],
    [3, -39.0],
    [4, -46.0],
    [5, -32.0],
    [6, -30.0],
    [7, -32.0],
    [8, -32.0],
    [9, -30.0],
    [10, -36.0],
    [11, -41.0],
    [12, -31.0],
    [13, -29.0],
    [14, -27.0],
    [15, -20.0],
    [16, -33.0],
    [17, -32.0],
    [18, -63.0],
    [19, -41.0],
    [20, -26.0],
    [21, -27.0],
    [22, -27.0],
    [23, -30.0],
    [24, -37.0],
    [25, -40.0],
    [26, -30.0],
    [27, -28.0],
    [28, -28.0],
    [29, -27.0],
    [30, -26.0],
    [31, -32.0],
    [32, -37.0],
    [33, -29.0],
    [34, -33.0],
    [35, -30.0],
    [36, -28.0],
    [37, -27.0],
    [38, -30.0],
    [39, -37.0],
    [40, -27.0],
    [41, -25.0],
    [42, -22.0],
    [43, -15.0],
    [44, -28.0],
    [45, -29.0],
    [46, -37.0],
    [47, -25.0],
    [48, -23.0],
    [49, -23.0],
    [50, -21.0],
    [51, -21.0],
    [52, -25.0],
    [53, -29.0],
    [54, -20.0],
    [55, -18.0],
    [56, -16.0],
    [57, -16.0],
    [58, -18.0],
    [59, -23.0],
    [60, -25.0],
    [61, -23.0],
    [62, -14.0],
    [63, -15.0],
    [64, -12.0],
    [65, -12.0],
    [66, -16.0],
    [67, -19.0],
    [68, -13.0],
    [69, -15.0],
    [70, -19.0],
    [71, -17.0],
    [72, -17.0],
    [73, -22.0],
    [74, -23.0],
    [75, -17.0],
    [76, -17.0],
    [77, -19.0],
    [78, -17.0],
    [79, -17.0],
    [80, -17.0],
    [81, -20.0],
    [82, -14.0],
    [83, -13.0],
    [84, -14.0],
    [85, -15.0],
    [86, -11.0],
    [87, -10.0],
    [88, -17.0],
    [89, -13.0],
    [90, -10.0],
    [91, -8.0],
    [92, -6.0],
    [93, -9.0],
    [94, -15.0],
    [95, -19.0],
    [96, -14.0],
    [97, -12.0],
    [98, -13.0],
    [99, -11.0],
    [100, -12.0]
];

let spainData = [
    // [-29, -1.0], 
    // [-28, 3.0],
    [-27, 1.0],
    [-26, 0.0],
    [-25, 1.0],
    [-24, 1.0],
    [-23, 2.0],
    [-22, 2.0],
    [-21, 10.0],
    [-20, 3.0],
    [-19, -1.0],
    [-18, 4.0],
    [-17, 8.0],
    [-16, -7.0],
    [-15, 4.0],
    [-14, 6.0],
    [-13, 1.0],
    [-12, 3.0],
    [-11, 4.0],
    [-10, 2.0],
    [-9, 2.0],
    [-8, 1.0],
    [-7, 7.0],
    [-6, 4.0],
    [-5, 18.0],
    [-4, 17.0],
    [-3, 27.0],
    [-2, 33.0],
    [-1, -8.0],
    [0, -49.0],
    [1, -33.0],
    [2, -39.0],
    [3, -36.0],
    [4, -58.0],
    [5, -39.0],
    [6, -53.0],
    [7, -73.0],
    [8, -46.0],
    [9, -50.0],
    [10, -51.0],
    [11, -52.0],
    [12, -49.0],
    [13, -57.0],
    [14, -76.0],
    [15, -55.0],
    [16, -55.0],
    [17, -53.0],
    [18, -52.0],
    [19, -48.0],
    [20, -56.0],
    [21, -77.0],
    [22, -51.0],
    [23, -41.0],
    [24, -31.0],
    [25, -66.0],
    [26, -90.0],
    [27, -44.0],
    [28, -74.0],
    [29, -65.0],
    [30, -41.0],
    [31, -46.0],
    [32, -46.0],
    [33, -45.0],
    [34, -54.0],
    [35, -76.0],
    [36, -56.0],
    [37, -51.0],
    [38, -47.0],
    [39, -51.0],
    [40, -46.0],
    [41, -52.0],
    [42, -66.0],
    [43, -50.0],
    [44, -45.0],
    [45, -41.0],
    [46, -30.0],
    [47, -88.0],
    [48, -31.0],
    [49, -44.0],
    [50, -35.0],
    [51, -32.0],
    [52, -32.0],
    [53, -33.0],
    [54, -34.0],
    [55, -38.0],
    [56, -57.0],
    [57, -28.0],
    [58, -29.0],
    [59, -26.0],
    [60, -30.0],
    [61, -29.0],
    [62, -31.0],
    [63, -41.0],
    [64, -23.0],
    [65, -21.0],
    [66, -20.0],
    [67, -18.0],
    [68, -19.0],
    [69, -23.0],
    [70, -33.0],
    [71, -17.0],
    [72, -16.0],
    [73, -15.0],
    [74, -12.0],
    [75, -13.0],
    [76, -16.0],
    [77, -26.0],
    [78, -16.0],
    [79, -11.0],
    [80, -10.0],
    [81, -10.0],
    [82, -10.0],
    [83, -14.0],
    [84, -25.0],
    [85, -12.0],
    [86, -14.0],
    [87, -8.0],
    [88, -13.0],
    [89, -9.0],
    [90, -13.0],
    [91, -17.0],
    [92, -10.0],
    [93, -10.0],
    [94, -7.0],
    [95, -8.0],
    [96, -8.0],
    [97, -12.0],
    [98, -11.0],
    [99, -6.0],
    [100, null]
];

let southKoreaData = [
    [-50, null], 
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-50, null],
    [-8, null],
    [-7, 0.0],
    [-6, 0.0],
    [-5, -6.0],
    [-4, -3.0],
    [-3, -1.0],
    [-2, -3.0],
    [-1, -4.0],
    [0, -6.0],
    [1, -18.0],
    [2, 6.0],
    [3, -13.0],
    [4, -7.0],
    [5, -10.0],
    [6, -17.0],
    [7, -10.0],
    [8, -8.0],
    [9, -1.0],
    [10, -7.0],
    [11, -10.0],
    [12, -11.0],
    [13, -8.0],
    [14, -7.0],
    [15, -14.0],
    [16, 1.0],
    [17, -11.0],
    [18, -3.0],
    [19, -5.0],
    [20, -5.0],
    [21, 1.0],
    [22, 1.0],
    [23, 1.0],
    [24, -5.0],
    [25, -1.0],
    [26, -13.0],
    [27, -2.0],
    [28, 4.0],
    [29, -8.0],
    [30, 6.0],
    [31, 0.0],
    [32, 1.0],
    [33, -8.0],
    [34, -4.0],
    [35, 2.0],
    [36, 11.0],
    [37, 4.0],
    [38, 2.0],
    [39, 0.0],
    [40, -2.0],
    [41, 1.0],
    [42, 5.0],
    [43, 14.0],
    [44, 6.0],
    [45, 2.0],
    [46, 0.0],
    [47, -2.0],
    [48, 2.0],
    [49, 10.0],
    [50, -10.0],
    [51, 10.0],
    [52, 9.0],
    [53, 23.0],
    [54, -2.0],
    [55, -7.0],
    [56, 8.0],
    [57, 1.0],
    [58, 5.0],
    [59, -1.0],
    [60, -3.0],
    [61, -2.0],
    [62, 2.0],
    [63, 9.0],
    [64, 1.0],
    [65, 11.0],
    [66, 8.0],
    [67, 17.0],
    [68, 29.0],
    [69, 22.0],
    [70, 10.0],
    [71, 19.0],
    [72, 30.0],
    [73, 23.0],
    [74, 9.0],
    [75, 7.0],
    [76, 8.0],
    [77, -2.0],
    [78, 1.0],
    [79, 14.0],
    [80, 7.0],
    [81, 8.0],
    [82, 7.0],
    [83, -3.0],
    [84, 12.0],
    [85, 25.0],
    [86, 4.0],
    [87, 7.0],
    [88, 12.0],
    [89, 7.0],
    [90, 8.0],
    [91, 14.0],
    [92, 4.0],
    [93, 18.0],
    [94, 8.0],
    [95, 11.0],
    [96, 7.0],
    [97, 9.0],
    [98, 11.0],
    [99, 21.0],
    [100, 16.0]
];



// Create data points
// const numPoints = 100;
// let unitedKingdomData = [];
// for (let i = 0; i < numPoints; i++) {
//     unitedKingdomData.push([Math.random() * xMax, Math.random() * yMax]);
// }
// let spainData = [];
// for (let i = 0; i < numPoints; i++) {
//     spainData.push([Math.random() * xMax, Math.random() * yMax]);
// }
// console.log(spainData);

// let southKoreaData = [];
// for (let i = 0; i < numPoints; i++) {
//     southKoreaData.push([Math.random() * xMax, Math.random() * yMax]);
// }

// Append SVG Object to the Page
const svg = d3.select("#myPlot")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "800px")
  .attr("class", "mt-4")
//   .style("background", "grey")
  .append("g")
  .attr("transform","translate(" + margin + "," + margin + ")");


// X Axis
const x = d3.scaleLinear()
//   .domain([-30, 100])
  .domain([d3.min(spainData, (d) => d[0]), d3.max(spainData, (d) => d[0])])
  .range([0, xMax]);

svg.append("g")
  .attr("transform", "translate(0," + yMax + ")")
  .style("font-size", "1.2rem")
  .attr("class", "fw-lighter")
  .call(d3.axisBottom(x));

svg.append("text") // x-axis label
  .attr("x", xMax / 2)
  .attr("y", yMax + (margin/1.2))
  .attr("class", "fw-lighter")
  .style("font-size", "1.2rem")
  .style("text-anchor", "middle")
  .text("Days from start of lockdown");


// Y Axis
const y = d3.scaleLinear()
  .domain([d3.min(spainData, (d) => d[1]), d3.max(spainData, (d) => d[1])])
  .range([ yMax, 0]);

svg.append("g")
  .style("font-size", "1.2rem")
  .attr("class", "fw-lighter")
  .call(d3.axisLeft(y));

svg.append("text") // y-axis label
  .attr("transform", "rotate(-90)")
  .attr("x", 0 - (margin*2)-40)
  .attr("y", 0 - (margin / 1.25))
  .attr("class", "fw-lighter")
  .style("font-size", "1.2rem")
  .style("text-anchor", "middle")
  .text("Percentage change in footfall at grocery shops"); 



// Default chart should be UK data
svg.append('g')
  .selectAll("dot")
  .data(unitedKingdomData).enter()
  .append("circle")
  .attr("cx", function (d) { return x(d[0]) } )
  .attr("cy", function (d) { return y(d[1]) } )
  .attr("r", 3)
  .style("fill", "Red")
  .style("opacity", 1);

// svg.append("path")
// .datum(unitedKingdomData)
// .attr("fill", "none")
// .attr("stroke", "Red")
// .attr("stroke-width", 1)
// .attr("opacity", 0.3)
// .attr("d", d3.line()
//   .x(function(d) { return x(d[0]) })
//   .y(function(d) { return y(d[1]) })
//   );

// Append fixed line at 0 days
svg.append("line")
   .attr("y1", y(d3.min(spainData, (d) => d[1])))
   .attr("y2", y(d3.max(spainData, (d) => d[1])))
   .attr("x1", x(0))
   .attr("x2", x(0))
   .attr("fill", "none")
   .attr("stroke", "Grey")
   .attr("stroke-width", 1)
   .attr("opacity", 0.3)




// Various functions to update chart elements

function unitedKingdomChart(){
    // Note: Since this exists by default (see above), this func
    // will only need to be called when scrolling back up the page
    svg
        .selectAll("circle")
        .data(unitedKingdomData)
        .transition()
            .duration(1000)
                .attr("cx", function (d) { return x(d[0]) } )
                .attr("cy", function (d) { return y(d[1]) } )
                .attr("r", 3)
                .style("fill", "Red")
                .style("opacity", 1);
};

function spainChart(){
    svg
        .selectAll("circle")
        .data(spainData)
        .transition()
            .duration(1000)
            .attr("cx", function (d) { return x(d[0]) } )
            .attr("cy", function (d) { return y(d[1]) } )
            .attr("r", 3)
            .style("fill", "Blue")
            .style("opacity", 1);
};


function southKoreaChart(){
    svg
        .selectAll("circle")
        .data(southKoreaData)
        .transition()
            .duration(1000)
                .attr("cx", function (d) { return x(d[0]) } )
                .attr("cy", function (d) { return y(d[1]) } )
                .attr("r", 3)
                .style("fill", "Green")
                .style("opacity", 1);
};