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
      .attr('width', 440)
      .attr('height', 440)
      .append('g')
      .attr('transform', 'translate(220,220)');

// create a matrix
    const matrix = [
      [0, 5871, 8916, 2868],
      [1951, 0, 2060, 6171],
      [8010, 16145, 0, 8045],
      [1013, 990, 940, 0]
    ];

// 4 groups, so create a vector of 4 colors
    const colors = ['#440154ff', '#31668dff', '#37b578ff', '#fde725ff'];

// give this matrix to d3.chord(): it will calculates all the info we need to draw arc and ribbon
    const res = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending)
      (matrix);

// add the groups on the outer part of the circle
    this.svg
      .datum(res)
      .append('g')
      .selectAll('g')
      .data(function (d) {
        return d.groups;
      })
      .enter()
      .append('g')
      .append('path')
      .style('fill', function (d, i) {
        return colors[i];
      })
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
      .data(function (d) {
        return d;
      })
      .enter()
      .append('path')
      .attr('d', d3.ribbon()
        .radius(200)
      )
      .style('fill', function (d) {
        return (colors[d.source.index]);
      }) // colors depend on the source group. Change to target otherwise.
      .style('stroke', 'black');
  }
}