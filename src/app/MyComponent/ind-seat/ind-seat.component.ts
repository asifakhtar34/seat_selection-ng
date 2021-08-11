import { Component, Input, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
import { Seat } from '../Seat';

@Component({
  selector: 'app-ind-seat',
  templateUrl: './ind-seat.component.html',
  styleUrls: ['./ind-seat.component.css']
})
export class IndSeatComponent implements OnInit {
  // [x: string]: any;
@Input() type:any = ""
@Input() num:any = 0
total:Number = 0;

// const Tnum = this.num
  
  // Tseat:Number = this.num;




 




   seatsL : Seat[] = [ {avail: true}, {avail: true}, {avail: true},  {avail: true}, {avail: true}, {avail: true},{avail: true},{avail: true},{avail: true},{avail: true} ]
   seatsLD : Seat[] = [ {avail: true}, {avail: true}, {avail: true},  {avail: true}, {avail: true}, {avail: true},{avail: true},{avail: true},{avail: true},{avail: true} ]
   seatsR : Seat[] = [ {avail: true}, {avail: true}, {avail: true},  {avail: true}, {avail: true}, {avail: true},{avail: true},{avail: true},{avail: true},{avail: true} ]
   seatsRD : Seat[] = [ {avail: true}, {avail: true}, {avail: true},  {avail: true}, {avail: true}, {avail: true},{avail: true},{avail: true},{avail: true},{avail: true} ]

  
  
  constructor() {
    let sR = localStorage.getItem("seatsR")
    if(sR !== null){

      // JSON.parse(sR)
      console.log(JSON.parse(sR));

     let seatsR =  JSON.parse(sR)
    }
   }

  ngOnInit(): void {

    // if(this.num !== null){
      
      
    // }
  }

  

  onLoad(){
    let sR = localStorage.getItem("seatsR")
    if(sR !== null){

      // JSON.parse(sR)
      console.log(JSON.parse(sR));

      this.seatsR =  JSON.parse(sR)
    }
    let sRD = localStorage.getItem("seatsRD")
    if(sRD !== null){

      // JSON.parse(sR)
      console.log(JSON.parse(sRD));

      this.seatsRD =  JSON.parse(sRD)
    }

    let sL = localStorage.getItem("seatsL")
    if(sL !== null){

      // JSON.parse(sR)
      console.log(JSON.parse(sL));

      this.seatsL =  JSON.parse(sL)
    }

    let sLD = localStorage.getItem("seatsLD")
    if(sLD !== null){

      // JSON.parse(sR)
      console.log(JSON.parse(sLD));

      this.seatsLD =  JSON.parse(sLD)
    }
   
  }
 

  bookL(i:any){
    //  console.log("am booked");
     console.log(i);
     console.log(this.num)

     if(this.type === 'premium'){

      this.total= this.num*300;
    }
    else{
      this.total= this.num*100;
    }

    console.log(this.total)
   
    //  console.log(Tseats);
    //  console.log(this.type);
      // this.classList.toggle("first")
      // let n = this.num;

      

      console.log(this.seatsL.length);
      


      for(let n = this.num; n>0; n--){
        if(i != this.seatsL.length)
        {
          if(this.seatsL[i].avail === true){

            this.seatsL[i].avail = false;
            i++;
            console.log(i)
            
            this.num--;
            console.log(` no. of seats remaining: ${this.num}`)
          }
          else{
            console.log('select diff seats')
            // alert("Select diff seats")
          }
        }
        else{
          console.log("select another row")
        }
      }

      
      
      // if(this.seats[n].avail === true){
      //     this.seats[n].avail = false;
      // }

      // else{
      //   this.seats[n].avail = true;
      // }
      // console.log(this.seats[0].avail)
  }

  bookR(i:any){
    //  console.log("am booked");
     console.log(i);

     if(this.num===null){
       alert("Select Number of Seats")
     }
     console.log(this.num);
    //  console.log(this.type);
      // this.classList.toggle("first")
      // let n = this.num;

      console.log(this.seatsR.length);
      


      for(let n = this.num; n>0; n--){
        if(i != this.seatsR.length)
        {
           if(this.seatsR[i].avail === true)
           {

             this.seatsR[i].avail = false;
             i++;
             console.log(i)
             
             this.num--;
             console.log(` no. of seats remaining: ${this.num}`)
           }
           else{
             console.log('select diff seats')
            //  alert("Select diff seats")
           }
        }
        else{
          console.log("select another row")
        }
      }

      
      
      // if(this.seats[n].avail === true){
      //     this.seats[n].avail = false;
      // }

      // else{
      //   this.seats[n].avail = true;
      // }
      // console.log(this.seats[0].avail)
  }
  bookLD(i:any){
    //  console.log("am booked");
     console.log(i);
    //  console.log(this.num);
    //  console.log(this.type);
      // this.classList.toggle("first")
      // let n = this.num;

      console.log(this.num)

     if(this.type === 'premium'){

      this.total= this.num*300;
    }
    else{
      this.total= this.num*100;
    }

    console.log(this.total)

      console.log(this.seatsLD.length);
      


      for(let n = this.num; n>0; n--){
        if(i != this.seatsLD.length)
        {
          if(this.seatsLD[i].avail === true){
          this.seatsLD[i].avail = false;
          i++;
          console.log(i)
          
          this.num--;
          console.log(` no. of seats remaining: ${this.num}`)

          }
          else{
            console.log('select diff seats')
            // alert("Select diff seats")
          }
        }
        else{
          console.log("select another row")
        }
      }

      
      
      // if(this.seats[n].avail === true){
      //     this.seats[n].avail = false;
      // }

      // else{
      //   this.seats[n].avail = true;
      // }
      // console.log(this.seats[0].avail)
  }

  bookRD(i:any){
    //  console.log("am booked");
     console.log(i);
    //  console.log(this.num);
    //  console.log(this.type);
      // this.classList.toggle("first")
      // let n = this.num;
      // const Tnum = ()=>{
      //   let TotalNum =  this.num.toString();
      //   return TotalNum;
      // }
      // console.log(Tnum())

      console.log(this.seatsRD.length);
      


      for(let n = this.num; n>0; n--){
        if(i != this.seatsRD.length)
        {
          if(this.seatsRD[i].avail === true){
          this.seatsRD[i].avail = false;
          i++;
          console.log(i)
          
         
          
          this.num--;
          console.log(` no. of seats remaining: ${this.num}`)

          }

          else{
            console.log("Select Diff Seats")
            //  alert("Select Diff Seats")
          }
        }
        else{
          console.log("select another row")
        }
      }

      
      // return Tnum;
      // if(this.seats[n].avail === true){
      //     this.seats[n].avail = false;
      // }

      // else{
      //   this.seats[n].avail = true;
      // }
      // console.log(this.seats[0].avail)
  }


  save(){
      console.log("saved")

      localStorage.setItem("seatsR" ,JSON.stringify(this.seatsR))
      localStorage.setItem("seatsRD" ,JSON.stringify(this.seatsRD))
      localStorage.setItem("seatsL" ,JSON.stringify(this.seatsL))
      localStorage.setItem("seatsLD" ,JSON.stringify(this.seatsLD))

      // window.location.reload()

    //  let totalNum = this.bookRD(i);
    //  console.log(totalNum())

    // console.log(this.Tnum)
     
  }

 

}



function i(i: any) {
  throw new Error('Function not implemented.');
}
// edit the selected seats available
