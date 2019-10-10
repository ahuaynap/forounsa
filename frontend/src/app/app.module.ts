import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { PublicacionesComponent } from "./components/publicaciones/publicaciones.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { RemoveWhiteSpacesPipe } from "./pipes/remove-white-spaces.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CursosComponent,
    PublicacionesComponent,
    LogInComponent,
    RemoveWhiteSpacesPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
