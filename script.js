let addFriend = document.querySelector("#btn");
let stranger = document.querySelector("#card h3");
let flag = 0;

addFriend.addEventListener("click",function(){

    if(flag == 0){
        addFriend.style.backgroundColor = "silver";
        addFriend.style.color = "black";
        addFriend.innerHTML = "remove";
        stranger.innerHTML = "Friend";
        stranger.style.color = "green";
        flag = 1;
    }else{
        addFriend.style.backgroundColor = "lightblue";
        addFriend.style.color = "black";
        addFriend.innerHTML = "Add friend";
        stranger.innerHTML = "Stranger";
        stranger.style.color = "red";
        flag = 0;
    }
    
})