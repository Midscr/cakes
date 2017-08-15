import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'CakesCustomize​',
  // styles: [``],
  templateUrl: './CakesCustomize.component.html'
})
export class CakesCustomizeComponent implements OnInit {
  constructor( public route: ActivatedRoute ) {}

  public ngOnInit() {
    // console.log();
  }

}
