import React, { useEffect } from "react";
import * as d3 from "d3";


const LineChart = ({ width, height, data }) => {

    useEffect(() => {
        d3.select("#time_series").selectAll('*').remove()
        if (data.length > 0) {
            drawChart();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const drawChart = () => {
        const margin = { top: 10, right: 50, bottom: 50, left: 50 }

        const svg = d3.select('#time_series')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate( ${margin.left}, ${margin.top})`)
        const x = d3.scaleTime()
            .domain(d3.extent(data, function (d) { return d.times }))
            .range([0, width])
        svg.append("g")
            .attr("transform", `translate(${0}, ${height})`)
            .call(d3.axisBottom(x))
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return d.values })])
            .range([height, 0]);

        svg.append("g")
            .call(d3.axisLeft(y))

        const line = d3.line()
            .x(function (d) { return x(d.times) })
            .y(function (d) { return y(d.values) })

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line)
    }
    return (
        <div>
            <div id="time_series"></div>
        </div>
    );
};

export default LineChart;
