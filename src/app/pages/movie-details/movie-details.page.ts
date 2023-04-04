import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MovieDetailsPage implements OnInit {
  movie:any;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id !== null) this.movieService
    .getMovieDetails(id)
    .subscribe(res => {
      console.log(res)
      this.movie = res;
    })
  }

  openHomePage() {
    window.open(this.movie.homepage)
  }

}
