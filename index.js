const washCarBtn = document.getElementById("wash-car-btn")
const mowLawnBtn = document.getElementById("mow-lawn-btn")
const pullWeedsBtn = document.getElementById("pull-weeds-btn")
const priceContainer = document.getElementById("price-container")
const washCarDisplay = document.getElementById("wash-car")
const mowLawnDisplay = document.getElementById("mow-lawn")
const pullWeedsDisplay = document.getElementById("pull-weeds")
const washPriceDisplay = document.getElementById("wash-price")
const mowPriceDisplay = document.getElementById("mow-price")
const pullPriceDisplay = document.getElementById("pull-price")
const sum = document.getElementById("output-amount")
const sendInvoiceBtn = document.getElementById("send-invoice-btn")
const ThankYouNote = document.getElementById("thank-you-note")
const changeMode = document.getElementById("change-mode")



const wash=10
const mow=20
const pull=30
let services=[]

// display price and service on the invoice
washCarBtn.addEventListener("click", function(){
    if(!services.includes(wash)){
    services.push(wash)
    for(let i=0;i<services.length;i++){
    washCarDisplay.innerHTML=`<p>Wash Car</p>`
    washPriceDisplay.innerHTML=`<p>$${services[i]}</p>`
    }}
     getSum() 
     ThankYouNote.innerHTML=""   
})

mowLawnBtn.addEventListener("click", function(){
    if(!services.includes(mow)){
    services.push(mow)
    for(let i=0;i<services.length;i++){
    mowLawnDisplay.innerHTML=`<p>Mow Lawn</p>`
    mowPriceDisplay.innerHTML=`<p>$${services[i]}</p>`
    }}
    getSum ()
    ThankYouNote.innerHTML="" 
})

pullWeedsBtn.addEventListener("click", function(){
    if(!services.includes(pull)){
    services.push(pull)
    for(let i=0;i<services.length;i++){
    pullWeedsDisplay.innerHTML=`<p>Pull Weeds</p>`
    pullPriceDisplay.innerHTML=`<p>$${services[i]}</p>`
    }}
    getSum ()
    ThankYouNote.innerHTML="" 
})

// add services 
 let total
 function getSum (){
   
    total = services.reduce((accumulator, currentValue)=>accumulator+currentValue)
    sum.innerHTML=`$${total}`
    return total
}

// clear price and services and total,display message
sendInvoiceBtn.addEventListener("click",function(){
    if(total>1&&total<=60){
    washPriceDisplay.innerHTML=`<p></p>`
    pullPriceDisplay.innerHTML=`<p></p>`
    mowPriceDisplay.innerHTML=`<p></p>`
    sum.innerHTML=""
    services=[]
    ThankYouNote.innerHTML="Thank you - your invoice has been sent!"}
})



//change card mode to lighter
changeMode.addEventListener("click", function () {
  let mainContainer = document.querySelector(".main-container");
  mainContainer.classList.toggle("light-style");

});
