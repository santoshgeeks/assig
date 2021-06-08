import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  
  max = 300000;
  min = 100000;
  changeValueIncome(event){
    this.mothlyIncome=event.value
  }
  changeValueExpences(event){
    this.monthlyExpense=event.value
  }
 
  mothlyIncome=0
  monthlyExpense=0
  total=0
  amount=0
  months=6
  
  constructor() { }

  ngOnInit(): void {
  }

}
