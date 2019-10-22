import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { PublicacionesComponent } from "./components/publicaciones/publicaciones.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { RemoveWhiteSpacesPipe } from "./pipes/remove-white-spaces.pipe";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { CursoComponent } from './components/curso/curso.component';
import { PublicarComponent } from './components/publicar/publicar.component';

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
    PublicarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
