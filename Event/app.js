let btn = document.querySelector('#btn1')

btn.onclick = () => {
    console.log("btn was clicked")
    
    btn.innerHTML = (btn.innerHTML === "Hey") ? "click me" : "Hey";
}