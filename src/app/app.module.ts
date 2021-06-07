import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/products/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { carouselReducer } from './state/carousel/carousel.reducer';
import { CarouselEffects } from './state/carousel/carousel.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      { products: productsReducer, carousel: carouselReducer },
      {}
    ),
    EffectsModule.forRoot([ProductsEffects, CarouselEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
