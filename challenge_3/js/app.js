console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}


app.controller("plusController", plusController)

function plusController(){
  this.num1 = 1;
  this.num2 = 2;
  this.num3 = 3;
  this.num4 = 4;
}


app.controller("loanController", loanController)

function loanController(){
  this.amount = 10000;
  this.apr = 5;
  this.accrued_interest = this.amount * (this.apr/100);
  this.total_balance = this.amount + this.accrued_interest;
}
