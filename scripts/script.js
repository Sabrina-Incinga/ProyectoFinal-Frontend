import data from '../data/data.json' assert { type: "json" };

window.addEventListener("load", function() {
fetch("https://randomuser.me/api/?gender=female")
.then(res => res.json())
.then(response => {
    // document.getElementById("mainContainer").innerHTML = response.results[0].gender;
    document.getElementById("profile").src = response.results[0].picture.large;
    document.getElementsByTagName("h1")[0].innerHTML = `${response.results[0].name.first} ${response.results[0].name.last}`;
    document.getElementById("header").style.backgroundImage = `url(${'../images/cover.png'})`;
    document.getElementById("footer").style.backgroundImage = `url(${'../images/cover.png'})`;
    
    let ContactTemplate = `<h2>Contacto</h2>
                            <ul>
                                <li>Teléfono: ${response.results[0].phone}</li>
                                <li>Email: ${response.results[0].email}</li>
                                <li>Celular: ${response.results[0].cell}</li>
                            </ul>`;
    document.getElementById("contactDetails").innerHTML = ContactTemplate;
})

let skills = data.skills.map(skill => `<li>${skill}</li>`);
skills.forEach(skill => document.getElementById("skillList").innerHTML += skill)

let professionalExperiences = data.ProfesionalExperience.map(exp => (
    `<article class="item">
        <header>
            <h3>${exp.role}</h3>
            <h4>${exp.company}</h4>
        </header>
        <section class="description hide">
            <h5>${exp.start} - ${exp.end}</h5>
            <p>${exp.description}</p>
        </section>
        <footer><button type="button" class="btn">Ver más</button></footer>
    </article>`
));

professionalExperiences.forEach(exp => document.getElementById("PEItemList").innerHTML += exp);

let workExperiences = data.WorkExperience.map(exp => (
    `<article class="item">
        <header>
            <h3>${exp.role}</h3>
            <h4>${exp.company}</h4>
        </header>
        <section class="description hide">
            <h5>${exp.start} - ${exp.end}</h5>
            <p>${exp.description}</p>
        </section>
        <footer><button type="button" class="btn">Ver más</button></footer>
    </article>`
));
workExperiences.forEach(exp => document.getElementById("WEItemList").innerHTML += exp);

let educationItems = data.education.map(ed => (`
        <article class="item">
        <header>
            <h3>${ed.title}</h3>
            <h4>${ed.institution}</h4>
        </header>
        <section class="description hide">
            <h5>${ed.start} - ${ed.end}</h5>
            <p>${ed.description}</p>
        </section>
        <footer><button type="button" class="btn">Ver más</button></footer>
        </article>`
));
educationItems.forEach(ed => document.getElementById("educationItemList").innerHTML += ed);

let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const sibling = button.parentNode.previousElementSibling;
    button.addEventListener("click", () =>{
        if(sibling.classList.contains("show")){
            button.parentNode.previousElementSibling.classList.remove("show");
            button.innerHTML = "Ver más"
        } else {
            button.parentNode.previousElementSibling.classList.add("show");
            button.innerHTML = "Ver menos"
        }
    });
}

let contactBtn = this.document.getElementById("contactBtn");
contactBtn.addEventListener("click", () =>{
        document.getElementById("contactDetails").classList.add("show");
        contactBtn.style.display = 'none';
});

})