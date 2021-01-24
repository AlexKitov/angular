import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  // template: `{{currentTime}}`,
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy{
  currentTime: string;

  @Output() submitted = new EventEmitter<boolean>();

  ngOnInit() {
    console.log("@@@ ngOnInit called from clock")
    const date = new Date();
    this.currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }

  onClick(): void{
    console.log("!!!!!!! submited")
    this.submitted.emit(true)
  }

  ngOnDestroy() {
    console.log("@@@@ ngOnDestroy called from clock")
  }
}
