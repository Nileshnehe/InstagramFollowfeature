let strangers = document.querySelector('h4')


let btn = document.querySelector('#add')
let check= 0

btn.addEventListener("click", function(){
    if (check === 0){
        strangers.innerHTML = "Friend"
        strangers.style.color = "green"
        btn.innerHTML = "Unfollow"
        check = 1;
    }else{
        strangers.innerHTML = "Stranger"
        strangers.style.color = "red"
        btn.innerHTML = "follow"
        check = 0
    }
    
    
});




