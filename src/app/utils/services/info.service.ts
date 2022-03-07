import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Information } from '../interfaces/information.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infoRef!: AngularFireList<Information>;

  constructor(private afd: AngularFireDatabase) {
  }

  getInfo(lang: string) {
    if (lang === 'esp') {
      this.infoRef = this.afd.list('spanish');
    }
    if (lang === 'eng') {
      this.infoRef = this.afd.list('english');
    }
    return this.infoRef.snapshotChanges().pipe(
      map(list => list.map(l => {
        const $key = l.payload.key;
        const data = l.payload.val() as Information;
        return { $key, ...data };
      }))
    )
  }

  // getInfoSpanish() {
  //   this.infoRef = this.afd.list('spanish');
  //   return this.infoRef.snapshotChanges().pipe(
  //     map(list => list.map(l => {
  //       const $key = l.payload.key;
  //       const data = l.payload.val() as Information;
  //       return { $key, ...data };
  //     }))
  //   )
  // }

  // getInfoEnglish() {
  //   this.infoRef = this.afd.list('english');
  //   return this.infoRef.snapshotChanges().pipe(
  //     map(list => list.map(l => {
  //       const $key = l.payload.key;
  //       const data = l.payload.val() as Information;
  //       return { $key, ...data };
  //     }))
  //   )
  // }
}
