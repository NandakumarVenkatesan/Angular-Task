import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  value!: string;

  constructor() {
    console.log("Child Constructor!!!");
   }

  ngOnInit(): void {
    console.log("Child NgOnInit");
  }

  ngOnChanges() {
    console.log("Child ngOnChanges");
  }

  ngDoCheck() {
    console.log("Child ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("Child ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("Child ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("Child ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Child ngOnDestroy");
  }

}
