let h1 = document.querySelector('h1');
let cm = "Light";
let resetbtn = document.querySelector('button')


h1.addEventListener("click", () => {
    if (cm === "Light") {
        cm = "Dark";
        document.body.style.backgroundColor = "red";
    } else {
        cm = "Light";
        document.body.style.backgroundColor = "black";
    }
    h1.innerHTML = cm;
    console.log(cm);
resetbtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#212121";

    cm = "Light"
    h1.innerHTML = "Light"
})

});