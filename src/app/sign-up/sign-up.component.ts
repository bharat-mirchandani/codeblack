import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }];
  }


  onSubmit(value: string) {
    this.submitted = true;
  }
  get diagnostic() { return JSON.stringify(this.userform.value); }
}
