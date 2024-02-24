let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    ev.target.classList.add("clicked");

    setTimeout(() => {
      ev.target.classList.remove("clicked");
    }, 200);
  });
});

let about = document.querySelector(".about");
let langs = about.querySelector(".langs");

let descriptions = {
  fr: `<p>Salut! Je suis un jeune français de 16 ans qui part en formation de développeur web la rentrée prochaine
  et ensuite je vais dans une école de Game Design. Je souhaite créer mon propre jeu vidéo, animé, manga avec mon propre univers et goûts.</p>`,
  en: `<p>Hi! I'm a 16-year-old French kid who's going to train as a web developer next fall.
  and then I go to a Game Design school. I want to create my own video game, anime, manga with my own universe and tastes.</p>`,
};

let langButtons = langs.querySelectorAll("button");

about.querySelector(".description").innerHTML = descriptions.en;

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let lang = btn.classList[0];
    let description = descriptions[lang];

    about.querySelector(".description").innerHTML = description;
  });
});
