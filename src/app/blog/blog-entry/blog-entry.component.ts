import { Component, Input } from '@angular/core';
import { BlogEntry } from './blog-entry.mode';

@Component({
  selector: 'app-blog-entry[entry]',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent {
  @Input() entry!: BlogEntry;
}
