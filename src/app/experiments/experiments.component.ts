import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    let isNewItem: boolean = false;
    for (let i = 0; i < this.experiments.length; i++) {
      let experimentItem = this.experiments[i];
      if (item === experimentItem || item === "") {
        alert(`Enter a valid item`);
        isNewItem = false;
        return 0;
      } else {
        isNewItem = true;
      }
    }
    if (isNewItem) {
      this.experiments.push(item);
    }
  }
  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }
  edit(item: string) {
    this.itemBeingEdited = item;
  }
  save(name: string, item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments[index] = name;
    this.itemBeingEdited = null;
  }

}
