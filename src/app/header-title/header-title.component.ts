import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css']
})
export class HeaderTitleComponent {
  // Declare the variables that can be sent and used within the element
  @Input() title;
  @Input() subTitle;
}
