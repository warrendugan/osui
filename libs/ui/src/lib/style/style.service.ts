import { Injectable } from '@angular/core';
import Styles from './style.scss';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private document!: Document;
  private list!: StyleSheetList;
  private style = Styles;
  private key = ':root';
  private trash = '/*#';

  constructor() {
    this.document = document;
    this.list = this.document.styleSheets;
    console.log(this.style);
    `${this.style}`.split(this.key).forEach((rule: string) => {
      if (!rule || rule.startsWith(this.trash)) return;
      const result = this.key + rule;
      this.list.item(0)?.insertRule(result);
    });
  }
}
