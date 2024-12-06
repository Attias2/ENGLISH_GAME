const events = ["agriculture", "sciences", "military", "media", "technology"];
const dataStore = {}; // Stockage des fichiers JSON préchargés
let themeSelect = null;

// Fonction pour charger tous les fichiers JSON au démarrage
async function preloadJSONFiles() {
    try {
        for (const event of events) {
            const url = `../${event}.json`; // Construire le chemin du fichier
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erreur lors du chargement de ${url}`);
            dataStore[event] = await response.json(); // Stocker les données JSON dans l'objet
        }
        console.log("Tous les fichiers JSON ont été préchargés.");
    } catch (error) {
        console.error(`Erreur lors du préchargement des fichiers JSON : ${error.message}`);
    }
}

// Fonction pour générer un événement aléatoire
function randomEvent() {
    return Math.floor(Math.random() * events.length);
}

// Génération du thème
document.getElementById("boutton_generer_theme").addEventListener("click", function () {
    themeSelect = events[randomEvent()];
    document.getElementById("theme").innerHTML = `<h1>${themeSelect.toUpperCase()}</h1>`;
    console.log(`Thème sélectionné : ${themeSelect}`);
});

// Génération des soft skills liés au thème sélectionné
document.getElementById("boutton_generer_softskil").addEventListener("click", function () {
    if (!themeSelect) {
        console.error("Aucun thème n'a été sélectionné.");
        return;
    }

    const selectedData = dataStore[themeSelect];  // Récupérer les données du thème sélectionné
    if (!selectedData) {
        console.error(`Données introuvables pour le thème : ${themeSelect}`);
        return;
    }

    // Récupérer la liste des soft_skills du thème sélectionné
    const softSkills = selectedData.topics[0].soft_skills;

    // Sélectionner un soft skill au hasard
    const randomIndex = Math.floor(Math.random() * softSkills.length);
    const randomSoftSkill = softSkills[randomIndex];

    // Afficher le soft skill sélectionné
const output = document.getElementById("softSkill");
output.innerHTML = ""; // Réinitialiser le contenu

const softSkillHTML = `
    <div class="container">
        <h1>Nom : ${randomSoftSkill.name}</h1>
        <p class="description">
            Description : ${randomSoftSkill.description}
        </p>
    </div>
`;

// Générer les questions associées
let questionsHTML = "";
randomSoftSkill.questions.forEach((question, index) => {
    let optionsHTML = "";

    if (question.options) {
        optionsHTML = `
            <ul class="options">
                ${question.options
                    .map((option, idx) => {
                        // Ajouter une classe si l'option est correcte (si applicable)
                        const isCorrect = question.correctIndex === idx ? '<span class="highlight">(Correct)</span>' : '';
                        return `<li><span>${option}</span> ${isCorrect}</li>`;
                    })
                    .join("")}
            </ul>
        `;
    }

    questionsHTML += `
        <div class="question">
            <h2>Question ${index + 1}:</h2>
            <p>${question.question}</p>
            ${optionsHTML}
        </div>
    `;
});

// Ajouter une note si nécessaire
const noteHTML = `
    <p class="note">
        *Choose the best answers for managing technological priorities effectively.
    </p>
`;

// Ajouter tout au conteneur
output.innerHTML = softSkillHTML + questionsHTML + noteHTML;

});

document.getElementById("resetButton").addEventListener("click", function () {
    // Réinitialiser le thème sélectionné
    themeSelect = null;
    document.getElementById("theme").innerHTML = ""; // Effacer le texte affichant le thème

    // Réinitialiser le contenu affiché du soft skill
    const output = document.getElementById("softSkill");
    output.textContent = ""; // Effacer le texte du soft skill affiché

    console.log("Réinitialisation effectuée !");
});

// Charger les fichiers JSON dès le chargement du script
preloadJSONFiles();
