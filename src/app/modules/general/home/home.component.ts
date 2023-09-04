import { Component, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';
import { HttpClient } from '@angular/common/http';
import { GoogleMap } from '@angular/google-maps';
import { CLINIC_Data } from './constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // apiLoaded: Observable<boolean>;
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  zoom = 18;
  minZoom = 2;
  center = {
    lat: 18.99382,
    lng: 75.74607,
  };
  markers = [
    {
      position: {
        lat: 18.99382,
        lng: 75.74607,
      },

      title: 'Dr. Choure Namo Dental Care, Beed ',
      info: 'Marker info ',
    },
  ] as any;
  infoContent = '';
  constructor(private seoService: SeoService, public httpClient: HttpClient) {
    // this.apiLoaded = httpClient
    //   .jsonp(
    //     'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMtrD5Wtuf1AC2TY-DV5sBM3HQWgkLtXw',
    //     'callback'
    //   )
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false))
    //   );
    // console.log('this.apiLoaded==>>>', this.apiLoaded);
    const content = '';

    const title = 'Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
    this.seoService.addTag({
      name: 'json+ld',
      content: JSON.stringify(CLINIC_Data),
    });
  }

  navbarClick(title: string) {
    this.seoService.setMetaTitle(title);
  }
}
