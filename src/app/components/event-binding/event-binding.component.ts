import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {


  printMessage(msg:string){
    console.log("Event Binding Working => "+msg);
  }


  printMessage2(x:any){
    console.log(x);
    
    console.log(x.target);
    var element = x.target;
    element.innerHTML = "Clicked";
  }


  printMessage3(x:any){
    console.log(x);
    x.innerHTML = "Welcome";

    console.log(this.myElement);
    this.myElement.nativeElement.innerHTML = "Function have been executed";
  }

  @ViewChild('myDiv') myElement : any;
}
