import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardBookComponent } from './card-book/card-book.component';
import { Book } from './models/book';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'stephenKingBooks';

  public books: Book[] = [];

  constructor(private userService: MyServiceService) {}

  ngOnInit(): void {
    this.userService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.books.forEach((b) =>
          console.log(b.id, b.Title, b.Pages, b.Publisher, b.Year)
        );
      },
      error: (err) => console.error('API error:', err),
    });
  }
}
