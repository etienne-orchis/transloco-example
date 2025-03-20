import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [TranslocoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'transloco-example';

  constructor(private readonly translocoService: TranslocoService) {}

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
