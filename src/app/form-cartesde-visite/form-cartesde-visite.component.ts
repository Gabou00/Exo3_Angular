import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cartesde-visite',
  templateUrl: './form-cartesde-visite.component.html',
  styleUrls: ['./form-cartesde-visite.component.scss']
})
export class FormCartesdeVisiteComponent implements OnInit {

  users: any[] = []

  user: FormGroup = this.formBuilder.group({
    nom: ["", Validators.minLength(2)],
    prenom: ["", Validators.minLength(2)],
    email: ["", Validators.email],
    entreprise: ["", Validators.minLength(2)],
    telephone: ["",[Validators.minLength(10), Validators.maxLength(10)]]
  })

  submitted: boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private addUser(): void{
    this.users.push(this.user.value)
    this.user.reset()
 }

  onSubmit(): void {
    this.submitted = true;
if (this.user.valid) {
this.addUser()
} else {
console.log("Formulaire invalide");
}
}

get form() {
  return this.user.controls
}

}
