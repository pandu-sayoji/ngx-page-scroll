import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dummy-content',
  templateUrl: './dummy-content.component.html'
})
export class DummyContentComponent implements OnChanges {

  @Input() length: number = 1;

  public array: number[] = [0];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.array = Array.from(Array(this.length), (e, i) => i);
  }

}
