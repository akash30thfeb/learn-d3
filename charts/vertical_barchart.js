function draw_vertical_barchart(data, svg_el, xaxis_label, yaxis_label){
  // set the dimensions and margins of the graph
  $(svg_el).empty()
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = $(svg_el).attr('width') - margin.left - margin.right,
      height = $(svg_el).attr('height') - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
  var y = d3.scaleLinear()
            .range([height, 0]);
            
  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select(svg_el)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

    // get the data
    // format the data
    data.forEach(function(d) {
      d[yaxis_label] = +d[yaxis_label];
    });

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d[xaxis_label]; }));
    y.domain([0, d3.max(data, function(d) { return d[yaxis_label]; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr('fill', 'steelblue')
        .attr("x", function(d) { return x(d[xaxis_label]); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d[yaxis_label]); })
        .attr("height", function(d) { return height - y(d[yaxis_label]); });

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

}