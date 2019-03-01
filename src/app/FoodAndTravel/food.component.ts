import { Component, OnInit } from '@angular/core';
import {SOAPHandlerService} from '../cordysServices/soap-handler.service';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  private base64textString:String="";
  private content:any;
  fileName:any;
  fileType:any;
  registerForm: FormGroup;
  submitted = false;
  fileSize:any;
  constructor(private soap:SOAPHandlerService,private formBuilder: FormBuilder,private router:Router) {
    
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ID: ['', Validators.required],
      name: ['', Validators.required],
      Amount: ['', [Validators.required]],
      Order: ['', [Validators.required]]
     
  });
  }
  public fileData(event){
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      this.content=reader.readAsBinaryString(file);
      console.log(this.content);
  }
    console.log(event);
    this.fileName=file.name;
    console.log(this.fileName);
    this.fileType=file.type;
    this.fileSize=file.size
    console.log(this.fileType);

  }
  public uploadToCS(){
    this.soap.authicateUser().subscribe(
      (reponse:any)=>{
        console.log(reponse);
        localStorage.setItem("authentication",reponse);
      }
    )
    let obj={
      authToken:localStorage.getItem("authentication"),
      parentID:'376047',
      fileName:this.fileName,
      fileSize:this.fileSize,
      Description:"Vidyasagar",
      content:this.content,
    }
    this.soap.createDocumentInCS(obj).subscribe(
      (reponse:any)=>{
        console.log(reponse);
      }
    )

  }
  public _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           console.log(btoa(binaryString));
   }
   get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
     if (this.registerForm.invalid) {
      //this.submitted=false;
      
         return;
     }
     
     //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
 }
 public foodExpDetails(){
  console.log(this.registerForm.controls.ID.value);
   let obj={
     empID:this.registerForm.controls.ID.value,
     empName:this.registerForm.controls.name.value,
     recipe:this.registerForm.controls.recipe.value,
     amount:this.registerForm.controls.Amount.value,
     orderDate:this.registerForm.controls.Order.value,
     comments:this.registerForm.controls.Comments.value,
   }
   this.soap.insertFoodExpense(obj).subscribe(
     (reponse:any)=>{
      console.log(reponse);
     },
     (err)=>{
      console.log(err);
      this.router.navigate(['/select/dashboard']);
     }
   )
  
 }

}
