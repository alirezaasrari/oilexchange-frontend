import IRegister from '../InterFaces/IRegister';

export class RegisterRequst implements IRegister {
  registereddate: Date = new Date();
  phonenumber = '';
  storename = '';
  pass = '';
}
