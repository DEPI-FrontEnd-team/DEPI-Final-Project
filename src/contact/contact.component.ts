import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  // form control

  userForm!: FormGroup;
  formData!: Array<any>;
  errorMsg!: string;
  successMsg = false;
  constructor() {}
  screenWidth: any;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });

    this.screenWidth! = window.innerWidth;
  }
  clear() {
    this.userForm.reset();
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.formData = this.userForm.value;
      this.successMsg = true;
      // this.userForm.reset();
      setTimeout(() => {
        this.userForm.reset();
      }, 2000);
    } else {
      this.errorMsg = 'please enter valid data.';
    }
  }
  @HostListener('window:resize') resize() {
    this.screenWidth! = window.innerWidth;
  }
}
