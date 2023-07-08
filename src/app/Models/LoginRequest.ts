import { ILogin } from '../InterFaces/ILogin';

export class LoginRequest implements ILogin {
  storename: string = '';
  pass: string = '';
}
