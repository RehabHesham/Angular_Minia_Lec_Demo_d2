import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  inputMessage:string = '';

  StoreMessage(event:any){
    this.inputMessage = event.target.value;
    //console.log(this.inputMessage);
  }
clear(){
  this.inputMessage = '';
}

  images: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
  ]

  counter  : number = 0;
  currentImage: string = this.images[this.counter];
  next(){
    this.counter++;
    if(this.counter >= this.images.length) this.counter = 0;
    this.currentImage = this.images[this.counter];
  }



  formName:string = '';
  formAddress:string = '';
  formAge:number = 0;

  PrintFormData(){
    console.log(this.formName, this.formAddress, this.formAge);

    this.formName=this.formAddress = '';
    this.formAge = 0;
  }
}
