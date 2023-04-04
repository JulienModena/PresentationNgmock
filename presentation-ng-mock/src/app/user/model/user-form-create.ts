import {FormControl} from "@angular/forms";

export interface UserFormCreate {
  name: FormControl<string | null>;
  firstName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
