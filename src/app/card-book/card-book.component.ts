import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-card-book',
  imports: [], // e.g. CommonModule if you need ngIf/ngFor
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
})
export class CardBookComponent {
  @Input() book!: Book;
}
