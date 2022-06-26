import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length=0
  title = 'PasswordGeneration';
  password=''
  value=0
  letterChecked=false
  numberChecked=false
  symbolChecked=false

    onGenerateButtonClick(){
      const letters="abcdefghijklmnopqrstuvwyz"
      const numbers="0123456789"
      const symbols="!#@%¨&*()_-+=-*/,>:;?|'\""

      let validChars=''
      if(this.letterChecked){
        validChars+=letters
      }
      if(this.numberChecked){
        validChars+=numbers
      }
      if(this.symbolChecked){
        validChars+=symbols
      }
      if(validChars!==''){
      this.generatePassword(validChars)
      }
      else{
        alert('marque uma opção')
      }
    
    }
    onChangeLetters(){
      this.letterChecked=!this.letterChecked
    }
    onChangeSymbols(){
      this.symbolChecked=!this.symbolChecked
    }
    onChangeNumbers(){
      this.numberChecked=!this.numberChecked
    }
    onChangeLength(event:Event){

      const value = (event.target as HTMLInputElement).value
      this.length=parseInt(value)
            
    }
    generatePassword(validChars:string){

      let password=''
      for(let i=0;i<this.length;i++){
        password+=validChars[Math.floor(Math.random() *validChars.length)]
      }
      this.password=password
      
    }
}
