'use strict';
//Im gonna use Samer logecal way to orginaize the solution

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//from w3schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let shop = [];
function Cookes(location, minimam, maximam, avgCookes) {
    this.location = location;
    this.minimam = minimam;
    this.maximam = maximam;
    this.avgCookes = avgCookes;
    this.total = 0;
    this.randomCustomers = [];
    this.avgCookiesPerHours = [];
    shop.push(this);
}






Cookes.prototype.randomNumber = function () {
    for (let i = 0; i < hours.length; i++) {
        ;
        this.randomCustomers.push(random(this.minimam, this.maximam));

    }
}


Cookes.prototype.getCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerHours.push(Math.floor(this.randomCustomers[i] * this.avgCookes));

        this.total += this.avgCookiesPerHours[i];


    }

}

let Seattle = new Cookes('Seattle', 23, 65, 6.3);
let Tokyo = new Cookes('Tokyo', 3, 24, 1.2);
let Dubai = new Cookes('Dubai', 11, 38, 3.7);
let Paris = new Cookes('Paris', 20, 38, 2.3);
let Lima = new Cookes('Lima', 2, 16, 4.6);



let parent = document.getElementById('parent');
console.log(parent);
let table = document.createElement('table');
parent.appendChild(table);
// for the first row
function hedar() {
    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
    let thElemant = document.createElement('th');
    trElemant.appendChild(thElemant);

    thElemant.textContent = ('Name');

    for (let i = 0; i < hours.length; i++) {
       let thElemant = document.createElement('th');
        trElemant.appendChild(thElemant);
        thElemant.textContent = (hours[i]);

    }
    let thElemant1 = document.createElement('th');
    trElemant.appendChild(thElemant1);
    thElemant1.textContent = ('Daily Location Total');
}
//main table incloud location of shops and the maths
Cookes.prototype.main = function () {
    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
    let tdElemant = document.createElement('td');
    trElemant.appendChild(tdElemant);
    trElemant.textContent = this.location;
 for (let i = 0; i < hours.length; i++) {
    let tdElemant2 = document.createElement('td');
    trElemant.appendChild(tdElemant2);
    tdElemant2.textContent = this.avgCookiesPerHours[i];
     
 }
 let tdElemant3 = document.createElement('td');
 trElemant.appendChild(tdElemant3);
 tdElemant3.textContent = this.total;
}// for the total and the total for total
function footer(){
let trElemant=document.createElement('tr');
table.appendChild(trElemant);
let thElemant4 = document.createElement('th');
 trElemant.appendChild(thElemant4);
 thElemant4.textContent = 'Totals';
 let totalOfSum=0;
 for (let i = 0; i < hours.length; i++) {
    let sum=0;
     for (let j = 0; j < shop.length; j++) {
         
   
 sum+=shop[j].avgCookiesPerHours[i];
 totalOfSum+=shop[j].avgCookiesPerHours[i];
 
     }
     let thElemant5 = document.createElement('th');
     trElemant.appendChild(thElemant5);
     thElemant5.textContent = sum;
 }
 let thElemant6 = document.createElement('th');
     trElemant.appendChild(thElemant6);
     thElemant6.textContent = totalOfSum;

}

hedar();


for (let i = 0; i < shop.length; i++) {
    shop[i].randomNumber();
    shop[i].getCookies();
    shop[i].main();
}

footer();




