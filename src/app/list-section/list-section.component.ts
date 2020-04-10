import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent {
  // Declare the variables that can be sent and used within the element
  @Input() title;
  @Input() links;
}