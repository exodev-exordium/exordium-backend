import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jarallax } from 'jarallax';

import * as $ from 'jquery';

import { AuthService } from 'src/app/__services/auth.service';
import { UserService } from 'src/app/__services/user.service';

import { Countries } from 'src/app/__services/vars/Countries';
import { MustMatch } from 'src/app/__services/helpers/mustmatch.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countries: any;
  selectedCountry: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      realname: [null],
      country: [null],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required],
      recaptcha: [null, Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') });
  }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });

    this.countries = new Countries().countries;
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    const srcButton = $('.submitRegister');
    srcButton.attr('disabled', true);
    srcButton.addClass('m-progress');

    if (this.registerForm.invalid) {
      this.toastr.error('Please make sure you fill out all the fields correctly, then creating your account again...');
    } else {
      this.authService.register(this.registerForm.value).subscribe((res) => {
        if (res.result) {
          this.registerForm.reset();
          this.router.navigate([`auth/signin`]);

          this.toastr.success('Your account has been successfully created, you\'re free to login now!');
        }
      },
      (err) => {
        this.toastr.success(err[0].msg);
      });
    }

    setTimeout(() => {
      srcButton.removeAttr('disabled');
      srcButton.removeClass('m-progress');
    }, 2000);

  }

}
