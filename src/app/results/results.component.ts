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
    // Uncomment to debug.
    // console.log(SampleJson);
    this.data = SampleJson;
  }

  ngOnInit() {
  }

  graphData(data) {
    let value = Math.round(data * 100);
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
