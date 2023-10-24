import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  show:boolean = false;

  ready:boolean = true;


  products  : {type:string}[] = [{type:"car"},{type:"bus"},{type:"bike"}];



  color:string = "bluedd";
}
