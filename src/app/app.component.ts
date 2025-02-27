import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App piano en Angular';

  playSound(note: string){
    const audio = new Audio();
    audio.src = `../assets/sounds/${note}.wav`;
    audio.load();
    audio.play()
  }
}
