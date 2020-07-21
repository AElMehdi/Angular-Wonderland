import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-basic-network-diagram',
  templateUrl: './d3-basic-network-diagram.component.html',
  styleUrls: ['./d3-basic-network-diagram.component.css']
})
export class D3BasicNetworkDiagramComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // set the dimensions and margins of the graph
    const margin = {top: 10, right: 30, bottom: 30, left: 40};
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select('#data-viz')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

    d3.json('')
      .then(
        data => {

          // Initialize the links
          const link = svg
            .selectAll('line')
            .data(data.links)
            .enter()
            .append('line')
            .style('stroke', '#aaa');

          // Initialize the nodes
          const node = svg
            .selectAll('circle')
            .data(data.nodes)
            .enter()
            .append('circle')
            .attr('r', 20)
            .style('fill', '#69b3a2');

          // Let's list the force we wanna apply on the network
          const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
            .force('link', d3.forceLink()                               // This force provides links between nodes
                .id(d => d.id)                     // This provide  the id of a node
                .links(data.links)
              // and this the list of links
            )
            // This adds repulsion between nodes. Play with the -400 for the repulsion strength
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
            .on('end', ticked);

          // This function is run at each iteration of the force algorithm, updating the nodes position.
          function ticked() {
            link
              .attr('x1', d => d.source.x)
              .attr('y1', d => d.source.y)
              .attr('x2', d => d.target.x)
              .attr('y2', d => d.target.y);

            node
              .attr('cx', d => d.x + 6)
              .attr('cy', d => d.y - 6);
          }

        }
      )
      .catch((err) => console.log('Something went wrong!', err));

  }

}
