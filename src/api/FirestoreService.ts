import 'firebase/firestore';
import firebase from './index'; 

export default class FirestoreService {

  private instance: firebase.firestore.Firestore;
  private collection: string;

  constructor(collection: string) {
    this.instance = firebase.firestore();
    this.collection = collection;
  }

  public get() {
    return this.instance
      .collection(this.collection)
      .get()
      ;
  }

  public addDocument(docId: string, data: any) {
    return this.instance
      .collection(this.collection)
      .doc(docId)
      .set(data)
      ;
  }

  public updateDocument(docId: string, updatedData: any) {
    return this.instance
      .collection(this.collection)
      .doc(docId)
      .update(updatedData)
      ;
  }

  public removeDocument(docId: string) {
    return this.instance
      .collection(this.collection)
      .doc(docId)
      .delete()
      ;
  }
}
