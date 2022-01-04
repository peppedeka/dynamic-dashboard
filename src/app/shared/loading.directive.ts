import {Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnInit {
  constructor(private targetEl: ElementRef, private renderer: Renderer2) {}

  @Input()
  set appLoading(loading:boolean) {
    const loadingDiv = this.targetEl.nativeElement.querySelector('.loading');
    const matCard = this.targetEl.nativeElement.firstElementChild;
    if(loadingDiv!= null) {
      this.renderer.setStyle(
        loadingDiv,
        "display",
        loading ? "block" : "none"
        );
        this.renderer.setStyle(
          matCard,
          "display",
          !loading ? "block" : "none"
          );
        }
      }

  ngOnInit(): void {
    const loadingContainer = this.renderer.createElement("div");
    this.renderer.setStyle(
      loadingContainer,
      'display',
      'none'
    );
    this.renderer.addClass(loadingContainer, 'loading')
    this.renderer.appendChild(loadingContainer,this.renderer.createText('Loading...'))
    this.renderer.setStyle(loadingContainer,'font-size','60px');
    this.renderer.setStyle(loadingContainer,'padding','20px');
    this.renderer.setStyle(loadingContainer,'text-align','center');
    this.renderer.appendChild(this.targetEl.nativeElement, loadingContainer);
  }
}
