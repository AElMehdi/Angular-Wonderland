import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { Chords, ScaleOrdinal } from 'd3';

@Component({
  selector: 'app-scored-against-stat',
  templateUrl: './scored-against-stat.component.html',
  styleUrls: ['./scored-against-stat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScoredAgainstStatComponent implements OnInit {
  private svg: any;
  // 4 groups, so create a vector of 4 colors
  private colors = ['#440154ff', '#31668dff', '#37b578ff', '#fde725ff'];
  private names = ['#440154ff', '#31668dff', '#37b578ff', '#fde725ff'];

  constructor() {
  }

  ngOnInit() {
    this.buildSVG();

    const dataMatrix = this.createDataMatrix();

    // give this matrix to d3.chord(): it will calculates all the info we need to draw arc and ribbon
    const chordsFromDataMatrix = this.chordsFrom(dataMatrix);

    const textLabel = d3.scaleOrdinal().range(['Black', 'Blonde', 'Brown', 'Red']);
    this.addLabels(chordsFromDataMatrix, textLabel);
    this.addArcsPerCategory(chordsFromDataMatrix);
    this.addLinksBetweenNodes(chordsFromDataMatrix);
  }

  private addLinksBetweenNodes(chordsFromDataMatrix: Chords) {
    // Add the links between groups
    this.svg
      .datum(chordsFromDataMatrix)
      .append('g')
      .selectAll('path')
      .data(d => d)
      .enter()
      .append('path')
      .attr('d', d3.ribbon()
        .radius(200)
      )
      .style('fill', d => (this.colors[d.source.index])) // colors depend on the source group. Change to target otherwise.
      .style('stroke', 'black');
  }

  private addArcsPerCategory(chordsFromDataMatrix: Chords) {
    this.svg
      .datum(chordsFromDataMatrix)
      .append('g')
      .selectAll('g')
      .data(d => d.groups)
      .enter()
      .append('g')
      .append('path')
      .style('fill', (d, i) => this.colors[i])
      .style('stroke', 'black')
      .attr('d', d3.arc()
        .innerRadius(200)
        .outerRadius(210)
      );
  }

  private addLabels(chordsFromDataMatrix: Chords, textLabel: ScaleOrdinal<string, unknown>) {
    // Create a path around the arcs
    this.svg.append('g')
      .selectAll('path')
      .data(chordsFromDataMatrix.groups)
      .enter()
      .append('path')
      .attr('id', (d, i) => 'group-' + i)
      .style('fill', 'white')
      .style('stroke', 'white')
      .attr('d', d3.arc().innerRadius(220).outerRadius(230));

    // Add text to the added path (linked by ids attribute)
    this.svg.append('g')
      .selectAll('text')
      .data(chordsFromDataMatrix.groups)
      .enter()
      .append('text')
      // .attr('x', 0)
      .attr('dy', 15)
      .append('textPath')
      .style('fill', (d, i) => this.colors[i])
      .attr('xlink:href', (d, i) => '#group-' + i)
      .style('text-anchor', 'middle') //place the text halfway on the arc
      .attr('startOffset', '80%')
      .text((d, i) => textLabel(i + 1));
  }

  private chordsFrom(dataMatrix: number[][]) {
    const chordsFromDataMatrix = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending)
      (dataMatrix);
    return chordsFromDataMatrix;
  }

  private createDataMatrix() {
// create a matrix
    const matrix = [
      [0, 5871, 8916, 2868],
      [1951, 0, 2060, 6171],
      [8010, 16145, 0, 8045],
      [1013, 990, 940, 0]
    ];
    return matrix;
  }

  private buildSVG() {
    // create the svg area
    this.svg = d3.select('svg')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600)
      .append('g')
      .attr('transform', 'translate(300,300)');
  }
}
