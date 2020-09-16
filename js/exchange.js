(function(){
    console.info("I was called")

    var pricePounds;
    var exchangeRate = 0.87;
    var priceEuros = 0;

    var convertForm = document.getElementById("myForm");
    var msg = document.getElementById("msg");

    convertForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        pricePounds = parseFloat(document.getElementById("pounds").value);        
        console.info("form submitted");        
        if (isNaN(pricePounds)){
            msg.setAttribute("class", "error");
            msg.innerHTML = "Incorrect Input";
        } else {
            msg.removeAttribute("class");
            priceEuros = pricePounds * exchangeRate;
            priceEuros = priceEuros.toFixed(2);
            msg.innerHTML = `&euro; ${priceEuros}`
        }        
    })

    document.getElementById("pounds").addEventListener("focus", (event)=>{
        event.target.value = "";        
    })
})();

