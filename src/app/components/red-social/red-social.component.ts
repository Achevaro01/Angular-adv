import { Component, OnInit } from "@angular/core";
import { TwitterService } from "../../services/twitter.service";


@Component({
  selector: 'app-red-social',
  templateUrl: './red-social.component.html',
  styleUrls: ['./red-social.component.css'],
})
export class RedSocialComponent implements OnInit {
  tweets: any[] = [];

  constructor(private twitterService: TwitterService) {}

  ngOnInit(): void {
    // Configura el nombre de usuario desde la configuración o como mejor convenga
    const username = 'nombre_de_usuario';
    this.twitterService.getTweets(username).subscribe((data) => {
      this.tweets = data;
    });
  }
}
