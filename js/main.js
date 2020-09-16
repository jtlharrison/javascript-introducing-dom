// console.info("console again")
// console.dir(document)

// document.querySelector("a").setAttribute("href", "https://www.google.com")

document.querySelector("nav ul li").setAttribute("class", "currentPage")

document.getElementById("myTestEvent").addEventListener("click", function(){
    document.getElementById("myHeading").innerHTML = "Joel's Page";
})