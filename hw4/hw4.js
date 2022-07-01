
var width = 1000, height = 500, spacing = 200

const p = d3.json('finance.json').then(function(data) {
    var svg = d3.select("body").append("svg")
        .attr("width", width).attr("height", height)
        .style("background", "gray")
        .append("g")
        .attr("transform", "translate(" + spacing/2 + "," + spacing/2 + ")");

    var xScale = d3
        .scaleLinear()
        .domain([0, 64])
        .range([0, width - spacing]);
    var yScale = d3.scaleLinear()
        .domain([d3.max(data.chart.result[0].comparisons[1].high), 0])
        .range([0, height - spacing]);

    var xAxis = d3.axisBottom(xScale)      
    var yAxis = d3.axisLeft(yScale)

    var yGrid = d3.axisLeft()
        .scale(yScale)
        .tickFormat('')
        .ticks(15)
        .tickSizeInner(-width + spacing)
    var xGrid = d3.axisBottom()
        .scale(xScale)
        .tickFormat('')
        .ticks(15)
        .tickSizeInner(height - spacing)

    svg.append('g')
        .attr('class', 'y-grid')
        .call(yGrid)
    svg.append('g')
        .attr('class', 'x-grid')
        .call(xGrid)

    svg.append("g").attr("transform", "translate(0," + (height - spacing) + ")").call(xAxis)
    svg.append("g").call(yAxis)
    
    //Dots and Lines
    svg.append("g")
        .selectAll("dot").data(data.chart.result[0].comparisons[0].high)
        .enter().append("circle")
        .attr("cx", (p, i) => {return xScale(i)})
        .attr("cy", (p, i) => {return yScale(p)})
        .attr('r', 3).attr('fill', 'red')

    svg.append("g")
        .selectAll("dot").data(data.chart.result[0].comparisons[1].high)
        .enter().append("circle")
        .attr("cx", (p, i) => {return xScale(i)})
        .attr("cy", (p, i) => {return yScale(p)})
        .attr('r', 3).attr('fill', 'blue')

    svg.append("g")
        .selectAll("dot").data(data.chart.result[0].comparisons[2].high)
        .enter().append("circle")
        .attr("cx", (p, i) => {return xScale(i)})
        .attr("cy", (p, i) => {return yScale(p)})
        .attr('r', 3)
        .attr('fill', 'yellow')

    svg.append("g")
        .selectAll("dot").data(data.chart.result[0].comparisons[3].high)
        .enter().append("circle")
        .attr("cx", (p, i) => {return xScale(i)})
        .attr("cy", (p, i) => {return yScale(p)})
        .attr('r', 3).attr('fill', 'green');

    
    
    //Dot Information
    d3.selectAll("#Legend")
        .append("div")
        .attr("id","tooltip")
        .style("position", "absolute")
        .text("preview data");

    //
    svg.selectAll("circle")
        .on("mousemove", function(){d3.selectAll("#tooltip").text(this.__data__)})
    
    
    //Legend
    //Meta
    svg.selectAll("#Legend")
        .data("Meta").enter().append('rect')
        .attr('x', 820).attr('y', 50).attr('width', 10)
        .attr('height', 10).attr('fill', 'red')
    svg.selectAll("#Legend")
        .data("Meta").enter().append('text')
        .attr('x', 835).attr('y', 60)
        .attr('width', 10).attr('height', 10)
        .text("Meta").attr('fill', 'red')
    //Google
    svg.selectAll("Legend")
        .data("Google").enter()
        .append('rect').attr('x', 820).attr('y', 70)
        .attr('width', 10).attr('height', 10).attr('fill', 'blue')
    svg.selectAll("Legend")
        .data("Google").enter()
        .append('text').attr('x', 835).attr('y', 80)
        .attr('width', 10).attr('height', 10)
        .text("Google").attr('fill', 'blue')
    //Tesla
    svg.selectAll("#Legend")
            .data("Tesla").enter()
            .append('rect').attr('x', 820).attr('y', 90)
            .attr('width', 10).attr('height', 10).attr('fill', 'yellow')    
    svg.selectAll("#Legend")
        .data("Tesla").enter().append('text')
            .attr('x', 835).attr('y', 100)
            .attr('width', 10).attr('height', 10)
            .text("Tesla").attr('fill', 'yellow')
    //amazon
    svg.selectAll("Legend")
        .data("Amazon").enter().append('rect')
        .attr('x', 820).attr('y', 110)
        .attr('width', 10).attr('height', 10).attr('fill', 'green')
    svg.selectAll("#Legend")
        .data("Amazon").enter().append('text')
        .attr('x', 835).attr('y', 120)
        .attr('width', 10).attr('height', 10)
        .text("Amazon").attr('fill', 'green')
    
})


