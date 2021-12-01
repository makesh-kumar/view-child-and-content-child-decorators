import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
} from '@angular/core';
import { TestComponent } from './test.component';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string = 'test name';

  // @ContentChild('cpt') hello: ElementRef;
  @ContentChildren('cpt') hello: QueryList<ElementRef>;

  ngAfterContentInit() {
    this.hello?.forEach((d) => {
      console.log(d.nativeElement.textContent);
    });
    // console.log(this.hello?.nativeElement.textContent);
  }
}
