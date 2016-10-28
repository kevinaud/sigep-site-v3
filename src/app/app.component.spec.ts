/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { NavModule } from './nav/nav.module';

import { AppComponent } from './app.component';

describe('App: Sigep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NavModule,
        RouterTestingModule.withRoutes([{ path: 'fakeRouteForTesting', redirectTo: 'fakeRouteForTesting', pathMatch: 'full' }]),
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
