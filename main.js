!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=document.getElementById("content"),o=document.createElement("nav");function r(e,t,n,i){const o=document.createElement(e);return o.id=t,o.textContent=n,i.appendChild(o),o}function a(e,t,n){const o=document.createElement(e);return o.id=t,o.textContent=n,i.appendChild(o),o}function c(e,t,n){const i=document.createElement(e);return i.id=t,i.classList.add("navTab"),i.textContent=n,o.appendChild(i),i}i.insertAdjacentElement("beforebegin",o);c("a","homeTab","Home"),c("a","menuTab","Menu"),c("a","contactTab","Contact");function u(){a("h1","title","La Piazza Restaurant"),a("img","pizza","");document.getElementById("pizza").src="https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg";a("p","promoCopy","Mamma mia! What a great place to get some pizza! Don't miss out on this incredible experience, with each pizza crafted especially by the Italian masters themselves. Our restaurant not only provides an exceptional culinary experience, but also delivers a romantic setting perfect for that special night out.")}class s{constructor(e,t,n){this.name=e,this.details=t,this.price=n}insert(){const e=r("tr","","",menuTable);for(const t in this){r("td","",this[t],e)}}}u(),function(e,t,n){const i=document.getElementsByClassName(e);for(let e=0;e<i.length;e++)i[e].addEventListener(t,n)}("navTab","click",e=>{l(e)});const l=function(e){i.innerHTML="";const t=e.target.id;t.includes("home")?u():t.includes("menu")?(a("h1","menuTitle","Menu"),a("table","menuTable",""),new s("Tiramisu","Delicious tiramisu is so delicious!","$3.99").insert(),new s("Spaghetti Bolognese","Mmmm a classic from mama's kitchen","$9.99").insert(),new s("Carbonara","ITSA SO CREAMY","$11.80").insert()):t.includes("contact")&&(a("h1","contactTitle","Contact Us"),a("form","contactForm","").innerHTML='\n    Name: <input type="text" id="name"></input><br>\n    Phone number: <input type="text" id="phone"></input><br>\n    Number of people:<input type="number" id="phone"></input><br>\n    Reservation date: <input type="date" id="bookingDate"></input><br><br>\n    Extra details: <input type="text" id="phone"></input><br>\n    ',a("button","submitContact","Make Booking"))}}]);