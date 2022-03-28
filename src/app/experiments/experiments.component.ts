import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  experimentList: string[] = [];

  constructor() { }

  ngOnInit() { }

  addToList(item: string) {
    if (!this.experimentList.includes(item)) {
        this.experimentList.push(item);
    } 
  }

  removeFromList(item: string) {
   let index = this.experimentList.indexOf(item);
   this.experimentList.splice(index, 1);
 }

  clearList() {
    this.experimentList = [];
  }

}
