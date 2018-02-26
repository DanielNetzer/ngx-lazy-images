import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public largeImgUrl = 'https://thebitcoinpub-91d3.kxcdn.com/uploads/default/original/2X/0/0266fd5fac0c66b27ac1e152d9ca12109e9d74fd.jpeg';
  public thumbnailUrl = 'https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20';

  defaultCode = `
<mat-card>
  <mat-card-header>
    <mat-card-title>Such WOW</mat-card-title>
    <mat-card-subtitle>Default lazy image</mat-card-subtitle>
  </mat-card-header>
  <div class="custom-card-img">
    <ngx-lazy-image [largeImgUrl]="largeImgUrl" [thumbnailUrl]="thumbnailUrl"></ngx-lazy-image>
  </div>
  <mat-card-content>
  ...
  </mat-card-content>
</mat-card>
  `

  matCardImgCode = `
<mat-card>
  <mat-card-header>
    <mat-card-title>Such WOW</mat-card-title>
    <mat-card-subtitle>Default lazy image</mat-card-subtitle>
  </mat-card-header>
  <div mat-card-image>
    <ngx-lazy-image [largeImgUrl]="largeImgUrl" [thumbnailUrl]="thumbnailUrl"></ngx-lazy-image>
  </div>
  <mat-card-content>
  ...
  </mat-card-content>
</mat-card>
  `

  customStyleCode = `
<mat-card>
  <mat-card-header>
    <mat-card-title>Such WOW</mat-card-title>
    <mat-card-subtitle>Default lazy image</mat-card-subtitle>
  </mat-card-header>
  <div class="custom-card-img">
    <ngx-lazy-image [styling]="{'border-radius': '12%'}" [largeImgUrl]="largeImgUrl" [thumbnailUrl]="thumbnailUrl"></ngx-lazy-image>
  </div>
  <mat-card-content>
  ...
  </mat-card-content>
</mat-card>
  `

  constructor(private snackBar: MatSnackBar) {
  }

  loadDiffrentImage() {
    this.largeImgUrl = 'https://admissions.vanderbilt.edu/insidedores/manage/wp-content/uploads/doge-pattern-27481-2880x1800-650x406.jpg';
  }

  select(el: Node) {
    window.getSelection().selectAllChildren(el);
  }

  copy() {
    document.execCommand('copy');
    window.getSelection().empty();
  }

  onContentCopy(el: Node) {
    this.select(el);
    this.copy();

    this.snackBar.open('Code content copied to clipboard', 'DISMISS', { duration: 3000 });
  }
}
