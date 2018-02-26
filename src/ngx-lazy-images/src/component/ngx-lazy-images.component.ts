import { Component, ViewChild, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

import { fromEvent } from 'rxjs/Observable/fromEvent';

@Component({
  selector: 'ngx-lazy-image',
  templateUrl: './ngx-lazy-images.component.html',
  styleUrls: ['./ngx-lazy-images.component.css']
})
export class LazyImagesComponent implements OnInit {
  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('smallImg') smallImg: ElementRef;

  @Input() largeImgUrl: string;
  @Input() thumbnailUrl: string;
  @Input() styling: Object = {};

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const largeImageEl = this.renderer.createElement('img');
    this.renderer.setAttribute(largeImageEl, 'src', this.largeImgUrl);
    this.renderer.addClass(largeImageEl, 'ngx-lazy-img-large');

    Object.keys(this.styling).forEach((styleKey) => {
      this.renderer.setStyle(this.placeholder.nativeElement, styleKey, this.styling[styleKey]);
    });

    this.renderer.listen(largeImageEl, 'load', (event) => {
      this.renderer.appendChild(this.placeholder.nativeElement, largeImageEl);
      this.renderer.addClass(largeImageEl, 'loaded');
    });
  }

  smallImageLoaded() {
    this.renderer.addClass(this.smallImg.nativeElement, 'loaded');
  }
}
