import { Component, OnInit, Input } from '@angular/core';
import SampleJson from '../../assets/sampleJson.json';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() showResults: boolean;

  data: Object;

  constructor() {
    // console.log(SampleJson);
    this.data = SampleJson;
  }

  ngOnInit() {
  }

  graphData(data) {
    let value = Math.round(data * 100);
    // todo: this is a bit of a hack -- graphs don't look good otherwise when percentile data is below 10.
    return (value > 10) ? value : value + 5;
  }

  labelData(data) {
    return Math.round(data * 100);
  }

  viewMore() {
    //todo: create logic to view more items upon request.
    alert('Todo: view more link is still a work-in-progress');
  }

}
