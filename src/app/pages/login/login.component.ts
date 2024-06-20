import { Component } from '@angular/core';
import {Apollo} from "apollo-angular";
import {LOGIN_MUTATION} from "../../../graphql/mutations/login.mutation";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private apollo: Apollo) {}

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });


  handleLogin(form: NgForm): void {
    console.log("form values: ", form.value);
    this.apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        userName: "DIVEIMPORT",
        password: "DIVEIMPORT"
      }
    }).subscribe(({ data }) => {
      console.log("Mutation result: ", data);
    }, (error) => {
      console.log(error);
    });
  }
}
