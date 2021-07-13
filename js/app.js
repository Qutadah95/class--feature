// 'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

let parent = document.getElementById('parent');
    console.log(parent);
    let table = document.createElement('table');
    parent.appendChild(table);
    
    // let trelemant = document.createElement('tr');
    // table.appendChild(trelemant);
    // let thelemant = document.createElement('th');
    // trelemant.appendChild(thelemant);
  
function Cookes(name, min, max) {
    this.name = name;
    this.min = min;
    this.max = max;




}

let Seattle = new Cookes('Seattle', 23, 65);
let Tokyo = new Cookes('Tokyo', 3, 24);
let Dubai = new Cookes('Dubai', 11, 38);
let Paris = new Cookes('Paris', 20, 38);
let Lima = new Cookes('Lima', 2, 16);









function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
random(1, 10);
console.log(random(1, 10));
let randomNumberCustomer = [];


randomNumberCustomer.push(random(Seattle.min, Seattle.max));
randomNumberCustomer.push(random(Tokyo.min, Tokyo.max));
randomNumberCustomer.push(random(Dubai.min, Dubai.max));
randomNumberCustomer.push(random(Paris.min, Paris.max));
randomNumberCustomer.push(random(Lima.min, Lima.max));
console.log(randomNumberCustomer);


function hedar(){
  
    
 trelemant = document.createElement('tr');
    table.appendChild(trelemant);
     thelemant = document.createElement('th');
    trelemant.appendChild(thelemant);
    thelemant.textContent = 'Name';
    
    for (let i = 0; i < hours.length; i++) {
    
         thelemant = document.createElement('th');
        trelemant.appendChild(thelemant);
        thelemant.textContent = hours[i];
    }

}

function footer(){
    
    
    let trelemant = document.createElement('tr');
    table.appendChild(trelemant);
    let thelemant = document.createElement('th');
        trelemant.appendChild(thelemant);
        thelemant.textContent = 'Total';
}
function body(){
    
    let trelemant = document.createElement('tr');
    // table.appendChild(trelemant);
    //    let tdelemant=document.createElement('td');
    //    trelemant.appendChild(tdelemant);
       for (let q = 0; q < locations.length; q++) {
        trelemant = document.createElement('tr');
        table.appendChild(trelemant);
        
        trelemant.textContent = locations[q];
        ;
           
       }
       

    
}
hedar();
body();
footer();