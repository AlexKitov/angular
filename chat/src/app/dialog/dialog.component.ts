import { Component, OnInit, Input, Output, ContentChildren, ContentChild, TemplateRef, QueryList, HostListener } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  active: boolean = false
  @Input() title: string = 'DEFAULT title from reusable dialog component '


  // @ContentChildren(TemplateRef, { descendants: false }) dialogBody: QueryList<TemplateRef<any>>;
  @ContentChild(TemplateRef) dialogBody = TemplateRef<any>;

  constructor() { }

  ngOnInit() {

  }

  toggleActive(): void {
    this.active = !this.active
    console.log("toggleActive")
    console.log(this.active)
  }

  // @HostListener('click', ['$event'])
  // change(event){
  //   console.log(this.dialogBody._projectedViews[0].nodes[2].instance.submitted)
  //   console.log('Clicked on: ', event);
  //   this.dialogBody._projectedViews[0].nodes[2].instance["submitted"]
  //     .subscribe((event) => {
  //       console.log('###################################')
  //       console.log(event)
  //     })
  // }
}
