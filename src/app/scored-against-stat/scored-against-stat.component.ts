import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scored-against-stat',
  templateUrl: './scored-against-stat.component.html',
  styleUrls: ['./scored-against-stat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScoredAgainstStatComponent implements OnInit {
  private svg: any;

  constructor() {
  }

  ngOnInit() {
    // create the svg area
    this.svg = d3.select('svg')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600)
      .append('g')
      .attr('transform', 'translate(300,300)');

// create a matrix
    const matrix = [
      [0, 5871, 8916, 2868],
      [1951, 0, 2060, 6171],
      [8010, 16145, 0, 8045],
      [1013, 990, 940, 0]
    ];

// 4 groups, so create a vector of 4 colors
    const colors = ['#440154ff', '#31668dff', '#37b578ff', '#fde725ff'];
    const names = ['#440154ff', '#31668dff', '#37b578ff', '#fde725ff'];

// give this matrix to d3.chord(): it will calculates all the info we need to draw arc and ribbon
    const res = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending)
      (matrix);


// add the groups on the outer part of the circle
//     this.svg.selectAll('g.group')
//       .data(res)
//       .enter().append('svg:g')
//       .attr('class', d => 'group ' + names[d.index]);//Append the label names on the outside

    // outerArcs.append("text")
    //   .attr("class", "titles")
    //   .attr("dy", function(d,i) { return (d.endAngle > 90*Math.PI/180 & d.startAngle < 270*Math.PI/180 ? 25 : -16); })
    //   .append("textPath")
    //   .attr("startOffset","50%")
    //   .style("text-anchor","middle")
    //   .attr("xlink:href",function(d,i){return "#arc"+i;})
    //   .text(function(d,i){ return Names[i]; });

    const textLabel = d3.scaleOrdinal().range(['Black', 'Blonde', 'Brown', 'Red']);
    //Create an SVG path (based on bl.ocks.org/mbostock/2565344)
    this.svg.append("path")
      .attr("id", "wavy") //Unique id of the path
      .attr("d", "M 10,90 Q 100,15 200,70 Q 340,140 400,30") //SVG path
      .style("fill", "none")
      .style("stroke", "#AAAAAA");

  //Create an SVG text element and append a textPath element
    this.svg.append("text")
      .append("textPath") //append a textPath to the text element
      .attr("xlink:href", "#wavy") //place the ID of the path here
      .style("text-anchor","middle") //place the text halfway on the arc
      .attr("startOffset", "50%")
      .text("Yay, my text is on a wavy path");

    this.svg.append('g')
      .selectAll('path')
      .data(res.groups)
      .enter()
      .append('path')
      .attr('id', (d, i) => 'group-' + i)
      .style('fill', 'white')
      .style('stroke', 'white')
      .attr('d', d3.arc().innerRadius(220).outerRadius(230));

    this.svg.append('g')
      .selectAll('text')
      .data(res.groups)
      .enter()
      .append('text')
      .attr('x', 6)
      .attr('dy', 15)
      .append('textPath')
      .style('fill', (d, i) => colors[i])
      .style('stroke', 'black')
      .attr('xlink:href', (d, i) => '#group-' + i)
      .style('text-anchor', 'middle') //place the text halfway on the arc
      .attr('startOffset', '80%')
      .text((d, i) => textLabel(i));

    // this.svg
    //   .append('text')
    //   .attr('x', 6)
    //   .attr('dy', 15)
    //   // .filter(d => d.value > 110)
    //   .append('textPath')
    //   .attr('xlink:href', (d, i) => '#group' + i)
    //   .text((d, i) => textLabel[i]);


    this.svg
      .datum(res)
      .append('g')
      .selectAll('g')
      .data(d => d.groups)
      .enter()
      .append('g')
      .append('path')
      .style('fill', (d, i) => colors[i])
      .style('stroke', 'black')
      .attr('d', d3.arc()
        .innerRadius(200)
        .outerRadius(210)
      );

// Add the links between groups
    this.svg
      .datum(res)
      .append('g')
      .selectAll('path')
      .data(d => d)
      .enter()
      .append('path')
      .attr('d', d3.ribbon()
        .radius(200)
      )
      .style('fill', d => (colors[d.source.index])) // colors depend on the source group. Change to target otherwise.
      .style('stroke', 'black');
  }
}
