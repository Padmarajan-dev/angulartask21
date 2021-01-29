import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2TelInputModule} from 'ng2-tel-input';

//for angular firestore
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AngularFireDatabaseModule} from '@angular/fire/database';



var firebaseConfig = {
  apiKey: "AIzaSyDEFgXunKR2CgVrJkFnhJ6xfeglPDSkuN0",
  authDomain: "chatapp-378c0.firebaseapp.com",
  databaseURL: "https://chatapp-378c0.firebaseio.com",
  projectId: "chatapp-378c0",
  storageBucket: "chatapp-378c0.appspot.com",
  messagingSenderId: "773121408656",
  appId: "1:773121408656:web:c9f0841782f1e5b560a215",
  measurementId: "G-23JCV9DJKX"
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2TelInputModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
