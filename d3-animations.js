// Set Dimensions
const xSize = 800;
const ySize = 550;
const margin = 80;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Fetch data
let crawl_concentration = [
  ["Harrisburg", 2],
  ["Richmond", 77],
  ["Charlotte", 43],
  ["United States", 15],
];

let household_income = [
  ["Harrisburg", 77],
  ["Richmond", 81],
  ["Charlotte", 81],
  ["United States", 78],
];

let average_age = [
  ["Harrisburg", 64],
  ["Richmond", 70],
  ["Charlotte", 20],
  ["United States", 40],
];

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
const x = d3.scaleBand()
    .range([0, xMax])
    .padding(0.1);



svg.append("text") // x-axis label
  .attr("x", xMax / 2)
  .attr("y", yMax + (margin/1.2))
  .attr("class", "fw-lighter")
  .style("font-size", "1.2rem")
  .style("text-anchor", "middle")
  .text("Market");


// Y Axis
const y = d3.scaleLinear()
    .range([yMax, 0]);


  
  svg.append("text") // y-axis label
    .attr("class", "y-axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", 0 - (margin * 2) - 40)
    .attr("y", 0 - (margin / 1.5))
    .style("font-size", "1.2rem")
    .style("text-anchor", "middle")
    .text("Percentage of Crawl Spaces");


// Set x and y domains before rendering bars
x.domain(crawl_concentration.map(d => d[0]));
y.domain([0, 100]);

// Initialize X Axis with Labels
svg.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${yMax})`)
  .style("font-size", "1.2rem")
  .call(d3.axisBottom(x));

svg.append("g")
  .attr("class", "y-axis")
  .style("font-size", "1.2rem")
  .call(d3.axisLeft(y));

// Default chart: Crawl Space Concentration
svg.append('g')
  .selectAll(".bar")
  .data(crawl_concentration)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", d => x(d[0]))
  .attr("y", d => y(d[1]))  // Correctly position the top of the bar
  .attr("width", x.bandwidth())
  .attr("height", d => yMax - y(d[1]))
  .style("fill", d => d[0] === "Harrisburg" ? "blue" : "red")
  .style("opacity", 1);



// Append fixed line at 0 days
// svg.append("line")
//    .attr("y1", y(d3.min(Data, (d) => d[1])))
//    .attr("y2", y(d3.max(Data, (d) => d[1])))
//    .attr("x1", x(0))
//    .attr("x2", x(0))
//    .attr("fill", "none")
//    .attr("stroke", "Grey")
//    .attr("stroke-width", 1)
//    .attr("opacity", 0.3)




// Various functions to update chart elements

function crawl_chart() {
  // Update y-axis scale domain
  y.domain([0, 100]);

  // Redraw y-axis with animation
  svg.select(".y-axis")
    .transition()
    .duration(1000)
    .call(d3.axisLeft(y));

  // Redraw x-axis
  svg.select(".x-axis")
  .transition()
  .duration(1000)
  .call(d3.axisBottom(x));

  // Update y-axis label
  svg.select(".y-axis-label")
    .transition()
    .duration(1000)
    .text("Percentage of Crawl Spaces");

  // Update bars with transition
  svg.selectAll(".bar")
    .data(crawl_concentration)
    .join("rect")
    .transition()
    .duration(1000)
    .attr("class", "bar")
    .attr("x", d => x(d[0]))
    .attr("y", d => y(d[1]))
    .attr("width", x.bandwidth())
    .attr("height", d => yMax - y(d[1]))
    .style("fill", d => d[0] === "Harrisburg" ? "blue" : "red")
    .style("opacity", 1);
}

function income_chart() {
  // Update y-axis scale domain
  y.domain([70, 85]);

  // Redraw y-axis with animation
  svg.select(".y-axis")
    .transition()
    .duration(1000)
    .call(d3.axisLeft(y));

  // Redraw x-axis
  svg.select(".x-axis")
  .transition()
  .duration(1000)
  .call(d3.axisBottom(x));

  // Update y-axis label
  svg.select(".y-axis-label")
    .transition()
    .duration(1000)
    .text("Household Income (K USD)");

  // Update bars with transition
  svg.selectAll(".bar")
    .data(household_income)
    .join("rect")
    .transition()
    .duration(1000)
    .attr("class", "bar")
    .attr("x", d => x(d[0]))
    .attr("y", d => y(d[1]))
    .attr("width", x.bandwidth())
    .attr("height", d => yMax - y(d[1]))
    .style("fill", d => d[0] === "Harrisburg" ? "blue" : "red")
    .style("opacity", 1);
}


function age_chart() {
  // Update y-axis scale domain
  y.domain([0, d3.max(average_age, d => d[1])]);

  // Redraw y-axis with animation
  svg.select(".y-axis")
    .transition()
    .duration(1000)
    .call(d3.axisLeft(y));

  // Redraw x-axis
  svg.select(".x-axis")
  .transition()
  .duration(1000)
  .call(d3.axisBottom(x));

  // Update y-axis label
  svg.select(".y-axis-label")
    .transition()
    .duration(1000)
    .text("Median Home Age");

  // Update bars with transition
  svg.selectAll(".bar")
    .data(average_age)
    .join("rect")
    .transition()
    .duration(1000)
    .attr("class", "bar")
    .attr("x", d => x(d[0]))
    .attr("y", d => y(d[1]))
    .attr("width", x.bandwidth())
    .attr("height", d => yMax - y(d[1]))
    .style("fill", d => d[0] === "Harrisburg" ? "blue" : "red")
    .style("opacity", 1);
};