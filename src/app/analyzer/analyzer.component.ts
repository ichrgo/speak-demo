import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.css']
})
export class AnalyzerComponent implements OnInit {

  isTextAnalyzed:boolean = false;

  /*
    Options object for froala text editor.
        - see https://github.com/froala/angular-froala-wysiwyg
  */
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    theme:"eg-dark-theme",
    toolbarButtons: ['undo', 'redo' , '|', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html'],
    toolbarButtonsXS: ['undo', 'redo' , '-', 'bold', 'italic', 'underline']
  }

  constructor() { }

  ngOnInit() {
  }

  anaylyzeText(): void {
    this.isTextAnalyzed = true;
  }


}
