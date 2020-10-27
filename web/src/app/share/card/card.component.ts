import { Component, OnInit, Input} from '@angular/core';
import { __importDefault } from 'tslib';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;
  @Input() imagem: string;
  imagem_safe: SafeHtml;
  constructor(public sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.imagem_safe = this.sanitizer.bypassSecurityTrustResourceUrl(this.imagem);
  }

}
