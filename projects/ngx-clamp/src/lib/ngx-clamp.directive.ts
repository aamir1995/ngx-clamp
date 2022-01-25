import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Clamp from 'clamp-js';

@Directive({
  selector: '[ngx-clamp]'
})
export class NgxClampDirective implements OnInit {

  @Input() ngxClampOptions: Clamp.ClampOptions = {};
  @Output() ngxClampResponse = new EventEmitter<Clamp.ClampResponse>();

  constructor(private contentElementRef: ElementRef) { }

  ngOnInit(): void {
    const ngxClampResponse = Clamp(
      this.contentElementRef.nativeElement,
      this.ngxClampOptions
    );
    this.ngxClampResponse.emit(ngxClampResponse);
  }

}
