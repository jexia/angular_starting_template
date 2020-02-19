import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Declare the variables that are used within this components HTML file and sent to other components
  journey = {
    "Sign-up": 'https://app.jexia.com/signup',
    "Take a tour": 'https://www.jexia.com/en/docs/getting-started/'
  }
  essentialLinks = {
    Docs: 'https://www.jexia.com/en/docs/',
    Support: 'https://www.jexia.com/en/contact/',
    Features: 'https://www.jexia.com/en/features/',
    Jobs: 'https://jexiacom.recruitee.com/',
    Pricing: 'https://www.jexia.com/en/pricing/',
    Twitter: 'https://twitter.com/JEXIACOM/',
    Github: 'https://github.com/jexia/',
    Facebook: 'https://www.facebook.com/JEXIACOM/'
  }
}
