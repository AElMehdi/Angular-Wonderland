import { AfterContentInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scored-against-stat',
  templateUrl: './scored-against-stat.component.html',
  styleUrls: ['./scored-against-stat.component.css']
})
export class ScoredAgainstStatComponent implements OnInit {
  radius = 10;
  constructor() {
  }

  ngOnInit() {
    d3.select('.mySvg')
      .style('background', 'red')
      .style('z-index', '9')
      .append('blob');
  }

  colorMe() {
    d3.select('button').style('color', 'red');
  }

  clicked(event: any) {
    d3.select(event.target).append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', () => {
        return this.radius;
      })
      .attr('fill', 'red');
  }
}
