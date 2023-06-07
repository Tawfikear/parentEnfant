import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class enfantComponent {
  @Input() users: any;
  @Output() deleteUsers = new EventEmitter<any>();

  supprimer() {
    this.deleteUsers.emit(this.users);
  }
  
}
