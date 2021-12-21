import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(60)]],
    lastName: ['', [Validators.required, Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    mobileNo: ['', Validators.required],
    personalId: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
    gender: ['', Validators.required],
    accounts: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  titleAlert: string = 'This field is required';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  getErrorEmail() {
    return this.profileForm.get('email')?.hasError('required') ? 'This field is required' : this.profileForm.get('email')?.hasError('email') ? 'Not a valid email' : ''; 
  }

}
