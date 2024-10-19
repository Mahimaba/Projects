
for(let vee in countryList){
    // console.log(vee);
    // console.log(countryList[vee]);
}

var selectlist=document.querySelectorAll(".same select");

for(let v of selectlist){
    for(let vee in countryList){
    
    }
}


// console.log(selectlist)
function  addValue(){
    for(let v of selectlist){
        for(let vee in countryList){
           var newoption=document.createElement("option")
            newoption.value=vee;
            newoption.innerHTML=vee;
            v.appendChild(newoption)
            // console.log(v)
        }
    }
}
addValue()






// for select list 1

var selectlist=document.querySelectorAll(".Select1 select option");
for(let v of selectlist){
   if(v.innerHTML=="USD"){
   v.setAttribute("selected","selected")
   }
}


// for select list 2

var selectlist=document.querySelectorAll(".Select2 select option");
for(let v of selectlist){
   if(v.innerHTML=="INR"){
    v.setAttribute("selected","selected")
   }
}






// fix the flag 

var selectlist=document.querySelector(".Select2 select");
selectlist.addEventListener("change",(e)=>{
    getchange(e.target.value)
})


function getchange(event1){
    var img=document.querySelector(".Select2 img");
    var valueofselect=countryList[event1];
    img.setAttribute("src",`https://flagsapi.com/${valueofselect}/flat/64.png`)
    // console.log(valueofselect)

}

var selectlist1=document.querySelector(".Select1 select");
selectlist1.addEventListener("change",(e)=>{
    getchange2(e.target.value)
})

function getchange2(event2){
    var img1=document.querySelector(".Select1 img");
    var valueofselect1=countryList[event2];
    img1.setAttribute("src",`https://flagsapi.com/${valueofselect1}/flat/64.png`)
    // console.log(valueofselect)

}




// Final Answer

var inputvalue=document.querySelector(".Text_area input");

var apii="https://open.er-api.com/v6/latest/USD"
var btn=document.querySelector(".footer input");
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    var selectlist1=document.querySelector(".Select1 select").value;
    var selectlist2=document.querySelector(".Select2 select").value;
    var newapi=`https://open.er-api.com/v6/latest/${selectlist1}`
    
   fetch(newapi).then(res=>res.json()).then(data=>{
    var secondval=data.rates[selectlist2]
    var inputval=inputvalue.value
    var finalanswer=secondval*inputval;
    var msg=document.querySelector(".footer p");
    msg.innerHTML=`${inputval} ${selectlist1} = ${finalanswer} ${selectlist2}`
    // console.log(finalanswer)
      })
})


