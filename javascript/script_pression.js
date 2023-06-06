const paragraphs = [
  "La gestion de la pression sociale est cruciale dans le domaine du développement informatique. Explorez des techniques de relaxation, comme la respiration profonde et la méditation, pour vous aider à rester calme et concentré. Apprenez à établir des limites saines, à vous entourer de soutien positif et à développer une confiance en vous solide pour faire face aux attentes et aux jugements extérieurs.",
  "Surmonter la pression sociale en tant que développeur informatique nécessite des outils efficaces. Pratiquez des exercices de respiration et de pleine conscience pour gérer le stress et l'anxiété. Identifiez vos forces et vos talents uniques pour renforcer votre estime de soi. Cultivez un réseau de soutien, qu'il s'agisse de mentors, de collègues ou de communautés en ligne, pour partager des expériences et des conseils précieux.",
  "La gestion de la pression sociale est un défi commun pour les développeurs informatiques. Explorez des pratiques de gestion du stress telles que la méditation, le yoga ou la journalisation. Développez votre confiance en vous en célébrant vos réussites et en reconnaissant votre valeur unique. Apprenez à vous entourer de personnes positives et bienveillantes qui vous soutiennent dans votre parcours. Ensemble, vous pouvez surmonter les pressions sociales et vous épanouir dans votre carrière.",
  "En tant que développeur informatique, la pression sociale peut être accablante. Prenez du recul et pratiquez des exercices de respiration et de relaxation pour gérer le stress. Cultivez une mentalité de croissance en apprenant de vos erreurs_2 et en cherchant constamment à vous améliorer. Entourez-vous d'une communauté de soutien qui comprend vos défis et vous encourage à persévérer. Surmonter la pression sociale est possible lorsque vous développez des outils et des stratégies efficaces.",
  "La gestion de la pression sociale est un aspect important de la carrière d'un développeur informatique. Adoptez des techniques de gestion du stress telles que la méditation, le yoga ou la marche en plein air. Renforcez votre confiance en vous en identifiant vos compétences et vos réalisations. Établissez des limites claires pour préserver votre bien-être mental et émotionnel. En pratiquant l'autocompassion et en vous entourant de soutien, vous pouvez surmonter les pressions sociales et vous épanouir professionnellement.",
  "Surmonter la pression sociale en tant que développeur informatique demande de la pratique et de la persévérance. Privilégiez des méthodes de gestion du stress qui vous conviennent, comme la méditation, le sport ou l'écriture. Cultivez une mentalité de croissance en vous fixant des objectifs réalisables et en vous concentrant sur votre progression personnelle. Entourez-vous de personnes positives et inspirantes qui vous soutiennent dans votre parcours. Avec le temps, vous apprendrez à gérer la pression sociale avec confiance et résilience.",
  "La pression sociale peut être difficile à surmonter en tant que développeur informatique. Expérimentez différentes techniques de gestion du stress, telles que la respiration profonde, la visualisation ou l'écoute de musique apaisante. Pratiquez la gratitude et la réflexion positive pour renforcer votre confiance en vous. Trouvez un équilibre entre votre travail et votre vie personnelle pour préserver votre bien-être global. En adoptant des méthodes efficaces, vous pouvez réduire l'impact de la pression sociale et vous épanouir dans votre carrière.",
  "La gestion de la pression sociale est essentielle pour maintenir une bonne santé mentale en tant que développeur informatique. Expérimentez différentes techniques de relaxation, comme la méditation guidée, le journaling ou le dessin. Apprenez à vous exprimer et à partager vos préoccupations avec des personnes de confiance. Cultivez une vision positive de vous-même en vous entourant de personnes qui reconnaissent votre valeur et vos compétences uniques. Avec une approche proactive, vous pouvez surmonter la pression sociale et développer votre plein potentiel professionnel."
  ];

// Récupération des éléments HTML
const typingText_2 = document.querySelector(".typing-text p");
const inpField_2 = document.querySelector(".wrapper .input-field");
const btnAgain_2 = document.querySelector(".content button");
const timeTag_2 = document.querySelector(".time span b");
const nbErreurs_2 = document.querySelector(".erreur span");
const tauxWPM_2 = document.querySelector(".wpm span");
const tauxCPM_2 = document.querySelector(".cpm span");

let popUp_2 = document.querySelector(".popUp_2");
const btnFermer_2 = document.querySelector(".content-btn");

// Déclarations de variables
let timer_2;
let maxTime_2 = 60;
let timeLeft_2 = maxTime_2;
let charI_2 = 0;
let erreurs_2 = 0;
let isTyping_2 = 0;

function loadParagraph() {
  const randI = Math.floor(Math.random() * paragraphs.length);
  typingText_2.innerHTML = "";
  paragraphs[randI].split("").forEach((char) => {
    console.log(char);
    let span = `<span>${char}</span>`;
    typingText_2.innerHTML += span;
  });
  typingText_2.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField_2.focus());
  typingText_2.addEventListener("click", () => inpField_2.focus());
}

function initTyping() {
  let characters = typingText_2.querySelectorAll("span");
  let typedChar = inpField_2.value.split("")[charI_2];
  if (charI_2 < characters.length - 1 && timeLeft_2 > 0) {
    if (!isTyping_2) {
      timer_2 = setInterval(initTimer, 1000);
      isTyping_2 = true;
    }
    if (typedChar == null) {
      if (charI_2 > 0) {
        charI_2--;
        if (characters[charI_2].classList.contains("incorrect")) {
          erreurs_2--;
        }
        characters[charI_2].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charI_2].innerText == typedChar) {
        characters[charI_2].classList.add("correct");
      } else {
        erreurs_2++;
        characters[charI_2].classList.add("incorrect");
      }
      charI_2++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charI_2].classList.add("active");

    let wpm = Math.round(((charI_2 - erreurs_2) / 5 / (maxTime_2 - timeLeft_2)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    tauxWPM_2.innerText = wpm;
    nbErreurs_2.innerText = erreurs_2;
    tauxCPM_2.innerText = charI_2 - erreurs_2;
  } else {
    clearInterval(timer_2);
    inpField_2.value = "";
  }
}

function initTimer() {
  if (timeLeft_2 > 0) {
    timeLeft_2--;
    timeTag_2.innerText = timeLeft_2;
    let wpm = Math.round(((charI_2 - erreurs_2) / 5 / (maxTime_2 - timeLeft_2)) * 60);
    tauxWPM_2.innerText = wpm;
  } else {
    clearInterval(timer_2);
  }
}

function resetGame() {
  loadParagraph();
  clearInterval(timer_2);
  timeLeft_2 = maxTime_2;
  charI_2 = erreurs_2 = isTyping_2 = 0;
  inpField_2.value = "";
  timeTag_2.innerText = timeLeft_2;
  tauxWPM_2.innerText = 0;
  nbErreurs_2.innerText = 0;
  tauxCPM_2.innerText = 0;
}

function scorePopUp() {
  let text = document.getElementById("popUp_2-text");
  if (timeLeft_2 == 0) {
    /* affichage de la pop-up */
    popUp_2.style.display = "block";

    /* affichage de la performance (taux réalisés) */
    text.innerHTML +=
      "Tu as effectué une performance de " +
      tauxWPM_2.textContent +
      " mots par minute soit " +
      tauxCPM_2.textContent +
      " caractères par minute";
  }
}

// $(window).load(function () {
//   $(".loading").css(
//     {
//       "opacity" : "0",
//       "transition" : "opacity 0.6s ease-in-out"
//     }
//   )
// });
loadParagraph();
scorePopUp();
inpField_2.addEventListener("input", initTyping);
btnAgain_2.addEventListener("click", resetGame);
btnFermer_2.addEventListener("click", () => {
  popUp_2.style.display = "none";
});
