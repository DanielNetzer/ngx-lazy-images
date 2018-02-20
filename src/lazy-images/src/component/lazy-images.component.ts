import { Component, ViewChild, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { fromEvent } from 'rxjs/Observable/fromEvent';

@Component({
  selector: 'lazy-images',
  templateUrl: './lazy-images.component.html',
  styleUrls: ['./lazy-images.component.css']
})
export class LazyImagesComponent implements OnInit {
  @ViewChild('placeholder') placeholder: ElementRef;
  @ViewChild('smallImg') smallImg: ElementRef;

  @Input() largeImgUrl: string;
  @Input() thumbnailUrl: string;

  private largeImageEl: HTMLImageElement;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.largeImageEl = this.renderer.createElement('img');
    this.renderer.setAttribute(this.largeImageEl, 'src', this.largeImgUrl);

    this.renderer.listen(this.largeImageEl, 'load', (event) => {
      this.renderer.addClass(this.largeImageEl, 'loaded');
      this.renderer.appendChild(this.placeholder.nativeElement, this.largeImageEl);
    });
  }

  smallImageLoaded() {
    this.renderer.addClass(this.smallImg.nativeElement, 'loaded');
  }
}
