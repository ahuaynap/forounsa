import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RemoveWhiteSpacesPipe } from './pipes/remove-white-spaces.pipe';
import { InicioComponent } from './components/inicio/inicio.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CursoComponent } from './components/curso/curso.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CursosComponent,
    PublicacionesComponent,
    LogInComponent,
    RemoveWhiteSpacesPipe,
    InicioComponent,
    LogoutComponent,
    CursoComponent,
    PublicarComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
