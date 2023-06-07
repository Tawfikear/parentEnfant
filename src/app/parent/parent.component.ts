import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component'; 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  
})
export class ParentComponent {
  users = [
    { name: 'Apha', age: 10, hobby: 'delta' },
    { name: 'Bravo', age: 12, hobby: 'eko' },
    { name: 'Charlie', age: 14, hobby: 'foxtrot' }
  ];

  deleteUsers(personne: any) {
    const index = this.users.indexOf(personne);
      this.users.splice(index, 1); 
}
