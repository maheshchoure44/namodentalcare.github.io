import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'namo-clinic';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }

  setMetaTag() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Namo dental care, beed, Dr Mahesh Choure, Dr Rupali Choure/Latpate, Orthodontist, Endodontist, Dental Clinic near me, Dental clinic near shahunagar, dental clinic in beed, dental clinic, dental clinic near me, dental hospital near me, dental office near me, perfect smile, smile dental clinic, cheap dentist near me, best dental clinic near me, all smiles dental, smile clinic, dental practice, family dental clinic, perfect smile dental, bright smile dental, care dental, dental doctor near me, dental care center, dental doctor, city dental clinic, denturist, dental smiles, sabka dentist near me, emergency dental clinic, dental care clinic, sai dental clinic, dental hospital in beed, dental hospital in maharashtra, best dental clinic in beed, best dental hospital in beed, top 10 dental hospital in beed, top 10 dental clinic in maharashtra, implant center, teeth clinic near me, pediatric dental clinics, childrens dental center, 24 hour emergency dental clinic near me, mauli dental clinic beed, affordable dentures, aspen dental clinic, children dental care, cosmetic dental bonding, cosmetic dental care, cosmetic dental clinic, cosmetic dental treatment, cosmetic dentistry, cosmetic dentistry teeth whitening, cosmetic dentistry veneers, cosmetic dentistry white, cosmetic teeth whitening, dental assistant, dental care, dental care center, dental care cli, dental cleaning, dental clinic, dental implant clinic, dental makeover, dental orthodontics, dental professional, dental specialis, dentistry for children, denturist, emergency dental care, emergency dental treatment, emergency dentist, emergency tooth extraction, family and cosmetic dentistry, family cosmetic dentistry, family dental car, family dental servic, family dentistry, general and cosmetic dentistry, general dental care, general dentistry, laser dentistry, laser teeth whitening, oral sedation dentistry, partial dentures, pediatric dentist, permanent dentures, smile makeove, teeth alignment treatment, teeth whitening dentist, teeth whitening system, teeth whitening treatment, urgent care dental clinic, wisdom tooth extraction, dentist, dentist near me, orthodontist, periodontist, pediatric dentist near me, emergency dentist near me, dentist office near me, dental implant cost, kids dentist, kids dentist in beed, kids dentist near me, dental bridge, dental crown,best dentist near me, endodontist near me, tooth filling, dental associates, teeth whitening near me, periodontist near me,dental works, kids dental, cavity filling, modern dentistry, advanced dental, 24 hour dentist,urgent dental care,  general dentistry, dentist appointment,  cheap dentist, dental cleaning, Mauli speciality dental clinic, beed, sanap dental clinic in beed, sanap multispecility dental, akshaya dental clinic, matoshri dental clinic beed, ekdant dental clinic, vighnaharta dental clinic, geetai dental clinic, om dental clnic, lokseva dental clinic in beed, global dental clinic, thete dental clinic, unwane dental clinic in beed, pakhres dental clinic, arjaya dental clinic, alane dental clinic, ingale dental clinic, jinturkar dental clinic, andhare dental clinic, dental clinic in latur, dental clinic in aurangabad, dental clinic in kaij ',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Sachin Dane' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-09-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
