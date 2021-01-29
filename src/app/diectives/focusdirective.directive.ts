import { Directive, ElementRef,HostListener, Renderer2 } from '@angular/core';
import * as $ from 'jquery' ;
@Directive({
  selector: '[inpFocus]'
})
export class FocusDirective {

  constructor(public elemref:ElementRef,private rend:Renderer2) {

   }

   //for change a input border and its label color while on focus

  @HostListener('click') Focus()
  {
      let elem:HTMLElement = this.elemref.nativeElement;
      let parents = $(elem).parents();
      for (var i =0;i<parents.length;i++)
      {
        var filtered:HTMLElement=$(parents[i]);
        if(filtered[0].classList.contains("inputbox"))
        {
          this.rend.addClass(filtered[0].children[0],'labelcol');
        }
   
      }
      this.rend.addClass(this.elemref.nativeElement,'focusedborder');
  }
  @HostListener('focusout') Focusleft()
  {
      let elem:HTMLElement = this.elemref.nativeElement;
      let parents = $(elem).parents();
      for (var i =0;i<parents.length;i++)
      {
        var filtered:HTMLElement=$(parents[i]);
        if(filtered[0].classList.contains("inputbox"))
        {
          this.rend.removeClass(filtered[0].children[0],'labelcol');
        }
   
      }
      this.rend.removeClass(this.elemref.nativeElement,'focusedborder');
  }
}
