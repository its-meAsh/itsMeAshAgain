const workBoxes = [document.querySelector("#w1"), document.querySelector("#w2"), document.querySelector("#w3")]
var data = { "w1": 0, "w2": 0, "w3": 0 }
var animGoing = { "w1": false, "w2": false, "w3": false }

for (let each of workBoxes) {
  each.addEventListener('mouseover', (e) => {
    let elem = e.currentTarget;
    if (data[elem.id] < 2 && !animGoing[elem.id]) {
      animGoing[elem.id] = true;
      elem.style.animation = "hang 0.5s linear 1";
      setTimeout(() => {
        elem.style.animation = "";
        animGoing[elem.id] = false
      }, 500)
      data[elem.id]++;
    }
    else if (data[elem.id] >= 2 && !animGoing[elem.id]) {
      animGoing[elem.id] = true;
      data[elem.id] = 0;
      elem.style.animation = "fallAndJoin 2s linear 1";
      setTimeout(() => { elem.style.animation = ""; animGoing[elem.id] = false }, 2000);
    }
  })
}

let li = document.querySelectorAll("#navBar li");
for (let each of li) {
  if (each.id == "homeL") {
    each.addEventListener('click', () => { document.body.scrollIntoView() });
  }
  else {
    each.addEventListener('click', (e) => {
      let id = e.currentTarget.id;
      let array = id.split("");
      array.pop()
      let panelId = array.join("");
      document.querySelector(`#${panelId}`).scrollIntoView()
      let headEl = document.querySelector(`#${panelId} .panelHeading`);
      headEl.style.textShadow = "2.5vh 2.5vh 0.25vh var(--c2),-2.5vh -2.5vh 0.25vh var(--c2)"
      setTimeout(()=>{headEl.style.textShadow = ""
      },1000)
    })
  }
}

const projects = document.querySelectorAll(".projectBox");
for (let x = 0; x < projects.length; x++) {
  projects[x].addEventListener('click', (e) => {
    location.replace(`projects/${e.currentTarget.id}/index.html`)
  })
}

const docs = document.querySelectorAll(".docBox");
for (let x = 0; x < docs.length; x++) {
  docs[x].addEventListener('click', (e) => {
    location.replace(`docs/${e.currentTarget.id}/index.html`)
  })
}


const redirect = document.querySelector("#redirect");
var redirAnim = false;
redirect.addEventListener('mouseover', () => {
  if (!redirAnim) {
    redirAnim = true;
    redirect.style.animation = "createBorders 1s linear 1"
    setTimeout(() => { redirAnim = !redirAnim; redirect.style.animation = "" }, 1000)
  }
})
redirect.addEventListener('click',()=>{location.replace("its-meash.github.io/itsMeAsh/")})