import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserFormCreate} from "../model/user-form-create";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  private readonly fb = inject(FormBuilder);

  createUserForm: FormGroup = this.fb.group<UserFormCreate>({
    name: new FormControl<string | null>(null, Validators.required),
    firstName: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, Validators.required),
  });

}
