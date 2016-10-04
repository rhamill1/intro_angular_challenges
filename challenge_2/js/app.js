console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);


function WelcomeController(){
  this.full_name = "Pizza Monster";
  this.age = 30;
  this.city = "Bel Air";
  this.nameL = this.full_name.length;
  this.shout = function(n) {
    return n.toUpperCase() + '!'
  }
}


function ClassController(){
  this.class_name = "WDI 32";
  this.enrolled_students = 13;
  this.start_date = "2016-09-06";
  this.end_date = "2016-11-30";
  this.dd = function(n) {
    return start_date.diff(end_date, 'days');
  }


}
