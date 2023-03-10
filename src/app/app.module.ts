import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContentComponent } from './content/content.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AbovethefoldComponent,
    MenuComponent,
    ContactComponent,
    DataProtectionComponent,
    FooterComponent,
    ImprintComponent,
    MyworkComponent,
    ProjectsComponent,
    SkillsComponent,
    ContentComponent,
    MenuMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
