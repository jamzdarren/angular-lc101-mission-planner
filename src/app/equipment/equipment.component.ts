import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [ "Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    let isNewItem: boolean = false;
    for (let i = 0; i < this.equipment.length; i++) {
      let equipmentItem = this.equipment[i];
      if (item === equipmentItem || item === "") {
        alert(`Enter a valid item`);
        isNewItem = false;
        return 0;
      } else {
        isNewItem = true;
      }
    }
    if (isNewItem) {
      this.equipment.push(item);
    }
  }
  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
  edit(item: string) {
    this.itemBeingEdited = item;
  }
  save(name: string, item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment[index] = name;
    this.itemBeingEdited = null;
  }

}
