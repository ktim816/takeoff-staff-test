import Cookies from 'js-cookie';
import * as keys from '@/constants/keys';

export class AuthToken {

  public static set(result: firebase.auth.IdTokenResult | undefined) {
    if (!result) return;
    const {token} = result;
    Cookies.set(keys.FIREBASE_AUTH_TOKEN, token);
  }

  public static get() {
    return Cookies.get(keys.FIREBASE_AUTH_TOKEN);
  }

  public static remove() {
    return Cookies.remove(keys.FIREBASE_AUTH_TOKEN);
  }
}
