import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';           //register reactive form module k functions
// include services
import { UserdataService } from './service/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private UserdataService: UserdataService, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  // ************************************************ Login Start Without Form Builder ***************************************

  title = 'Reactive';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),                  //Validators: auto check email or not
    loginPassword: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
  });

  userlogin() {                                       //call on submit
    console.log("Form Works!");
    console.log(this.loginForm);                      //Object
    console.log(this.loginForm.value);                //calling the object ki value

    //Sending data as an object to service
    this.UserdataService.sendLoginData(this.loginForm.value).subscribe(data => {
      console.log(data);        //this is array of object to grab value console.log(data[0].fname)
    })

  }

  // get loginPassword() {                          //this is use for email validation in html
  //   return this.loginForm.get('loginPassword');
  // }

  get loginFormControl() {               // use for all form control validation in html
    return this.loginForm.controls;
  }

  // ************************************************ Login End *********************************************
  // ************************************************ Signup Start *********************************************
  isValidFormSubmitted = false;
  unamePattern = "^[a-z0-9_-]{8,15}$"; //       ^ means the Start of a string. $ means the end of the string
  pwdPattern = "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userForm = this.fb.group({
    fname: ['Abhishek', [Validators.required]],
    lname: ['', [Validators.pattern("^[a-zA-Z]+$")]],
    gender: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
    mobileNumber: ['', Validators.pattern(this.mobnumPattern)],
    email: ['', Validators.pattern(this.emailPattern)],
    bio: [null]
  });

  onFormSubmit() {
    if (this.userForm.invalid) {
      this.isValidFormSubmitted = true;
      alert("Please Check the Form")
      console.log("this.userForm", this.userForm)
      // alert(this.userForm.get('password')?.value)
      return;
    }
    else {
      this.isValidFormSubmitted = false;
      console.log("this.userForm", this.userForm)
      //Sending data as an object to service
      this.UserdataService.sendSignupData(this.userForm.value).subscribe(data => {
        console.log(data);        //this is array of object to grab value console.log(data[0].fname)
      })
    }
  }


  //  get userFormControl() {
  //   return this.userForm.controls;           // this is use for all formControlName
  // }

  get username() {
    return this.userForm.get('username');       // this is use for single formControlName
  }
  get password() {
    return this.userForm.get('password');
  }
  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }
  get email() {
    return this.userForm.get('email');
  }

  /*
    get gender() {
      return this.userForm.get('gender');           directly used this in html tag like fname, lname
    }
  */

  // ************************************************ Signup End *************************************************************

  /*
  // here to assign comming data(object) from service 
  name = " "; 
  dob = " ";                     
  constructor(private user:UserdataService){
    console.log( this.user.getData() );
    let data = this.user.getData();
    this.name = data.name;
    this.dob = data.dob
  }
*/


}
