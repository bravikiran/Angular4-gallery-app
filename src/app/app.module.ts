import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe } from './image/shared/filter.pipe';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot([
    //   {
    //     path: 'app-navigatio-one',
    //     component: NavigatioOneComponent
    //   },
    //   {
    //     path: 'app-navigatio-two',
    //     component: NavigatioTwoComponent
    //   }
    //   ])
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
