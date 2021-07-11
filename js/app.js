'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattletotal = 0;
let Tokyototal=0;
let Dubaitotal=0;
let Paristotal=0;
let Limatotal=0;



let Seattle = {
    name: 'Seattle',
    minimam: 23,
    maximam: 65,
    avrege: 6.3,
    randomCustomers: [],
    avgCookiesPerHours: [],


    randomNumber: function () {

        for (let i = 0; i < hours.length; i++) {


            // this.randomNumberCustomer.push(random(x,y ));
            Seattle.randomCustomers.push(random(this.minimam, this.maximam));

        }
    }
    ,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let q = cookies(this.randomCustomers[i], this.avrege);
            this.avgCookiesPerHours.push(q);
            Seattletotal = Seattletotal + q;


        }

    }



}

Seattle.randomNumber();
Seattle.getCookies();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookies(x, y) {
    let value = x * y;
    value = Math.floor(value);
    return value;

}
let parent=document.getElementById('parent');
console.log(parent);
let articleElemant=document.createElement('article');
parent.appendChild(articleElemant);
// articleElemant=document.getElementById('articleElemant');
let Mylist=document.createElement('ul');
articleElemant.appendChild(Mylist);
Mylist.textContent='Seattle';


for (let index = 0; index < hours.length; index++) {
    let Item1=hours[index]+' '+Seattle.avgCookiesPerHours[index];
    let newListItem=document.createElement('li');
    newListItem.textContent= Item1;
   
    Mylist.appendChild(newListItem);
}
let newListItem=document.createElement('li');
Mylist.appendChild(newListItem);
newListItem.textContent='Total = '+Seattletotal ;


console.dir(Seattle.randomCustomers);
console.dir(Seattle.avgCookiesPerHours);
console.log(Seattletotal);


let Tokyo = {
    name: 'Tokyo',
    minimam: 3,
    maximam: 24,
    avrege: 1.2  ,
    randomCustomers: [],
    avgCookiesPerHours: [],


    randomNumber: function () {

        for (let i = 0; i < hours.length; i++) {


            // this.randomNumberCustomer.push(random(x,y ));
            Tokyo.randomCustomers.push(random(this.minimam, this.maximam));

        }
    }
    ,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let q = cookies(this.randomCustomers[i], this.avrege);
            this.avgCookiesPerHours.push(q);
            Tokyototal = Tokyototal + q;


        }

    }



}

Tokyo.randomNumber();
Tokyo.getCookies();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookies(x, y) {
    let value = x * y;
    value = Math.floor(value);
    return value;

}
 parent=document.getElementById('parent');
console.log(parent);
 articleElemant=document.createElement('article');
parent.appendChild(articleElemant);
// articleElemant=document.getElementById('articleElemant');
 Mylist=document.createElement('ul');
articleElemant.appendChild(Mylist);
Mylist.textContent='Tokyo';


for (let index = 0; index < hours.length; index++) {
    let Item1=hours[index]+' '+Tokyo.avgCookiesPerHours[index];
    let newListItem=document.createElement('li');
    newListItem.textContent= Item1;
   
    Mylist.appendChild(newListItem);
}
 newListItem=document.createElement('li');
Mylist.appendChild(newListItem);
newListItem.textContent='Total = '+Tokyototal ;


console.dir(Tokyo.randomCustomers);
console.dir(Tokyo.avgCookiesPerHours);
console.log(Tokyototal);



let Dubai = {
    name: 'Dubai',
    minimam: 11,
    maximam: 38	,
    avrege: 3.7 ,
    randomCustomers: [],
    avgCookiesPerHours: [],


    randomNumber: function () {

        for (let i = 0; i < hours.length; i++) {


            // this.randomNumberCustomer.push(random(x,y ));
            Dubai.randomCustomers.push(random(this.minimam, this.maximam));

        }
    }
    ,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let q = cookies(this.randomCustomers[i], this.avrege);
            this.avgCookiesPerHours.push(q);
            Dubaitotal = Dubaitotal + q;


        }

    }



}

Dubai.randomNumber();
Dubai.getCookies();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookies(x, y) {
    let value = x * y;
    value = Math.floor(value);
    return value;

}
 parent=document.getElementById('parent');
console.log(parent);
 articleElemant=document.createElement('article');
parent.appendChild(articleElemant);
// articleElemant=document.getElementById('articleElemant');
 Mylist=document.createElement('ul');
articleElemant.appendChild(Mylist);
Mylist.textContent='Dubai';


for (let index = 0; index < hours.length; index++) {
    let Item1=hours[index]+' '+Dubai.avgCookiesPerHours[index];
    let newListItem=document.createElement('li');
    newListItem.textContent= Item1;
   
    Mylist.appendChild(newListItem);
}
 newListItem=document.createElement('li');
Mylist.appendChild(newListItem);
newListItem.textContent='Total = '+Dubaitotal ;


console.dir(Dubai.randomCustomers);
console.dir(Dubai.avgCookiesPerHours);
console.log(Dubaitotal);


let Paris = {
    name: 'Paris',
    minimam: 20,
    maximam: 38,
    avrege: 2.3,
    randomCustomers: [],
    avgCookiesPerHours: [],


    randomNumber: function () {

        for (let i = 0; i < hours.length; i++) {


            // this.randomNumberCustomer.push(random(x,y ));
            Paris.randomCustomers.push(random(this.minimam, this.maximam));

        }
    }
    ,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let q = cookies(this.randomCustomers[i], this.avrege);
            this.avgCookiesPerHours.push(q);
            Paristotal = Paristotal + q;


        }

    }



}

Paris.randomNumber();
Paris.getCookies();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookies(x, y) {
    let value = x * y;
    value = Math.floor(value);
    return value;

}
 parent=document.getElementById('parent');
console.log(parent);
 articleElemant=document.createElement('article');
parent.appendChild(articleElemant);
// articleElemant=document.getElementById('articleElemant');
 Mylist=document.createElement('ul');
articleElemant.appendChild(Mylist);
Mylist.textContent='Paris';


for (let index = 0; index < hours.length; index++) {
    let Item1=hours[index]+' '+Paris.avgCookiesPerHours[index];
    let newListItem=document.createElement('li');
    newListItem.textContent= Item1;
   
    Mylist.appendChild(newListItem);
}
 newListItem=document.createElement('li');
Mylist.appendChild(newListItem);
newListItem.textContent='Total = '+Paristotal ;


console.dir(Paris.randomCustomers);
console.dir(Paris.avgCookiesPerHours);
console.log(Paristotal);



let Lima = {
    name: 'Lima',
    minimam: 2,
    maximam: 16,
    avrege: 4.6  ,
    randomCustomers: [],
    avgCookiesPerHours: [],


    randomNumber: function () {

        for (let i = 0; i < hours.length; i++) {


            // this.randomNumberCustomer.push(random(x,y ));
            Lima.randomCustomers.push(random(this.minimam, this.maximam));

        }
    }
    ,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let q = cookies(this.randomCustomers[i], this.avrege);
            this.avgCookiesPerHours.push(q);
            Limatotal = Limatotal + q;


        }

    }



}

Lima.randomNumber();
Lima.getCookies();
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookies(x, y) {
    let value = x * y;
    value = Math.floor(value);
    return value;

}
 parent=document.getElementById('parent');
console.log(parent);
 articleElemant=document.createElement('article');
parent.appendChild(articleElemant);
// articleElemant=document.getElementById('articleElemant');
 Mylist=document.createElement('ul');
articleElemant.appendChild(Mylist);
Mylist.textContent='Lima';


for (let index = 0; index < hours.length; index++) {
    let Item1=hours[index]+' '+Lima.avgCookiesPerHours[index];
    let newListItem=document.createElement('li');
    newListItem.textContent= Item1;
   
    Mylist.appendChild(newListItem);
}
 newListItem=document.createElement('li');
Mylist.appendChild(newListItem);
newListItem.textContent='Total = '+Limatotal ;


console.dir(Lima.randomCustomers);
console.dir(Lima.avgCookiesPerHours);
console.log(Limatotal);





