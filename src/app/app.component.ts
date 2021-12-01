import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private vRef: ViewContainerRef) {}

  //Eelemnt Ref
  // @ViewChild('sp') hello: ElementRef;
  // @ViewChildren('sp') hello: QueryList<ElementRef>;

  //Template Ref
  // @ViewChild('spt') hello: TemplateRef<any>;
  // @ViewChildren('spt') hello: QueryList<TemplateRef<any>>;

  //Component Ref
  // @ViewChild(HelloComponent) hello: HelloComponent;
  @ViewChildren(HelloComponent) hello: QueryList<HelloComponent>;

  // To add template ref into container
  add() {
    // this.vRef.createEmbeddedView(Array.from(this.hello)[0]);
  }

  ngAfterViewInit() {
    this.hello.forEach((d) => {
      console.log(d.name);
    });
    // console.log(this.hello.name);
    // console.log(this.hello.elementRef.nativeElement.textContent);
    // this.hello.forEach((d) => {
    //   console.log(d);
    // });
    // this.hello.forEach((d) => {
    //   console.log(d.nativeElement.textContent);
    // });
    // console.log(this.hello.nativeElement.textContent);
  }
}
