import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Wellness } from './sections/wellness/wellness';
import { RealEstate } from './sections/real-estate/real-estate';
import { WombRitual } from './sections/womb-ritual/womb-ritual';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    Header,
    Hero,
    About,
    Wellness,
    RealEstate,
    WombRitual,
    Contact,
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sol-consciente');
}


