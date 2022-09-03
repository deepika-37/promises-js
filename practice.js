
 console.log(element1.innerHTML);const element1 = document.getElementById("description");
 console.log(element1);
 console.log(element1.innerText);
 console.log(element1.innerHTML);
 console.log(document.getElementById("description").innerText);
 
 element1.innerText = "Hey I am the new text";
 console.log(element1.innerText);
 
 element1.innerHTML = `
                         <span>I am the new span tag</span>
     <span>I am the second new span tag</span>
 
 `
 console.log(element1.innerHTML);
 
 const element2 = document.getElementsByClassName("text");
 console.log(element2[0]);
 console.log(element2[0].innerText);
 console.log(element2[0].innerHTML);
 console.log(document.getElementById("description").innerText);
 
 element2[0].innerText = "Hey I am the new text";
 console.log(element2[0].innerText);
 
 element2[0].innerHTML = `
                         <div>I am the new span tag</div>
                         <hr></hr>
     <span>I am the second new span tag</span>
 
 `
 console.log(element2[0].innerHTML);
 <!--const element3 = document.getElementsByClassName("next");
console.log(element3[0].innerText);--->

const element4 = document.getElementsByTagName("h1");
console.log(element4[0]);

element1.style.fontSize = "40px";
element1.style.color = "orange";
element1.style.backgroundColor = "green";

function changetext(){
    const element5=document.getElementsByClassName("");
    console.log(element5[1].innertext);
    element5[1].style.color="purple"
    element[1].style.backgroundColor="red"
    element[1].style.fontSize="28px";
    element[1].style.flexdirection="column"
}
function changeDirection(){
    const element6=document.getElementByClassName("parent");
    element6.style.flexDirection="column";
    

}
const element8=document.createElement("div")
element8.setAttribute("id","newvalue");
element8.setAttribute("for","anything");
element8.setAttribute("value","goodthing");
element8.id="new value";
element8.className="newvalue"