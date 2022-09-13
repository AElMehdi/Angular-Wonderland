import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


const mehdi = new User('first', 'last1');
const user2 = new User('second', 'last2');
const user3 = new User('third', 'last3');
const USERS = [mehdi, user2, user3];
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup | any;
  userRowForm: FormGroup | any;

  dataSource = USERS;

  displayedColumns: string[] = ['position', 'firstname', 'lastname'];

  defaultName = 'Mehdi';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const myArrayForm = this.fb.array([]);

    this.userForm = this.fb.group({
      users: myArrayForm
    });


    this.dataSource.forEach((user) => this.userForm.get('users').push(
      this.fb.group({
        firstname: ''
      })
    ));
  }

  save() {
    console.log('Populated user names =>', JSON.stringify(this.userForm.get('users').value));
  }
}
