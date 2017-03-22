import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule,  AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const firebaseConfig = {
   apiKey: "AIzaSyBm0sr5Xm1ZAX7y1GQYqTTdItbX2RCcKV0",
    authDomain: "proplist-fa9e3.firebaseapp.com",
    databaseURL: "https://proplist-fa9e3.firebaseio.com",
    storageBucket: "proplist-fa9e3.appspot.com",
    messagingSenderId: "77258407495"

};

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'listings', component:ListingsComponent},
  { path:'add-listing', component:AddListingComponent}
];

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
