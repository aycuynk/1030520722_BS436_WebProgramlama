var Card;(()=>{"use strict";var e={d:(t,d)=>{for(var a in d)e.o(d,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:d[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{cards:()=>d});const d=document.querySelectorAll(".card");let a,l,n=!1,o=0;function r(){this.classList.add("flip"),!1===n&&(n=!0,a=this,o+=1,"kedi"===a.dataset.name&&(document.getElementById("alanId").style.display="none",document.getElementById("kazandiId").style.display="block")),l=this,"kopek"===a.dataset.name&&"kopek"===l.dataset.name&&(document.getElementById("alanId").style.display="none",document.getElementById("yenildiId").style.display="block")}d.forEach((e=>{let t=Math.ceil(3*Math.random());e.style.order=t})),d.forEach((e=>e.addEventListener("click",r))),Card=t})();