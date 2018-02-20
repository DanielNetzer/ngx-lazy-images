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
  @Input() lazyClasses: Object = {};

  private largeImageEl: HTMLImageElement;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.largeImageEl = this.renderer.createElement('img');
    this.renderer.setAttribute(this.largeImageEl, 'src', this.largeImgUrl);

    Object.keys(this.lazyClasses).forEach((styleKey) => {
      this.renderer.setStyle(this.placeholder.nativeElement, styleKey, this.lazyClasses[styleKey]);
    });

    this.renderer.listen(this.largeImageEl, 'load', (event) => {
      this.renderer.addClass(this.largeImageEl, 'loaded');
      this.renderer.appendChild(this.placeholder.nativeElement, this.largeImageEl);
    });
  }

  smallImageLoaded() {
    this.renderer.addClass(this.smallImg.nativeElement, 'loaded');
  }
}
