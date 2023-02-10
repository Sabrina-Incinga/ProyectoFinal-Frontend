window.addEventListener("load", function() {
fetch("https://randomuser.me/api/?gender=female")
.then(res => res.json())
.then(response => {
    // document.getElementById("mainContainer").innerHTML = response.results[0].gender;
    document.getElementById("profile").src = response.results[0].picture.large;
    document.getElementsByTagName("h1")[0].innerHTML = `${response.results[0].name.first} ${response.results[0].name.last}`;
    document.getElementById("header").style.backgroundImage = `url(${'../images/cover.png'})`;
    document.getElementById("footer").style.backgroundImage = `url(${'../images/cover.png'})`;
    

})

let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () =>{
        button.parentNode.previousSibling.classList.remove("hide");
    })
}
})