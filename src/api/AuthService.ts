import 'firebase/auth';
import firebase from './index'; 
import {AuthToken} from './AuthToken';

export default class AuthService {

  private instance: firebase.auth.Auth;

  constructor() {
    this.instance = firebase.auth();
  }

  public isAuthenticated() {
    return Boolean(AuthToken.get());
  }

  public async signUp(email: string, password: string) {
    try {
      const {user} = await this.instance
        .createUserWithEmailAndPassword(email, password);
      const tokenResult = await user?.getIdTokenResult();
      AuthToken.set(tokenResult);
    } catch (err) {
      throw new Error(err); 
    }
  }

  public async logIn(email: string, password: string) {
    try {
      const {user} = await this.instance
        .signInWithEmailAndPassword(email, password);
      const tokenResult = await user?.getIdTokenResult();
      AuthToken.set(tokenResult);
    } catch (err) {
      throw new Error(err); 
    }
  }

  public async signOut() {
    try {
      await this.instance.signOut();
      AuthToken.remove();
    } catch (err) {
      throw new Error(err); 
    }
  }
}
