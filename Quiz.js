const sporsmal = [
    {
        tekst: "Hva er en IP-adresse?",
        svar: [
            "Et navn du gir PC-en",
            "En knapp på ruteren",
            "Et nummer som sier hvem en enhet er på et nettverk",
            "En type lagringsplass"
        ],
        riktig: 2
    },
    {
        tekst: "Hvordan ser en vanlig IPv4-adresse ut?",
        svar: [
            "Tre tall med komma",
            "To tall og en bokstav",
            "Fire tall med punktum",
            "En lang bokstavstreng"
        ],
        riktig: 2
    },
    {
        tekst: "Hvor mange tall (oktetter) består IPv4 av?",
        svar: ["6", "4", "2", "3"],
        riktig: 1
    },
    {
        tekst: "Hva er en privat IP-adresse?",
        svar: [
            "En adresse som brukes på Internett",
            "En adresse kun for interne nettverk",
            "Et passord",
            "En maskinvarekomponent"
        ],
        riktig: 1
    },
    {
        tekst: "Hva er subnett?",
        svar: [
            "Et rom fullt av servere",
            "En ekstra internettlinje",
            "En måte å dele en IP-adresse i flere deler",
            "Et passord du bruker for WiFi"
        ],
        riktig: 2
    },
    {
        tekst: "Hva betyr 255 i subnettmasken?",
        svar: [
            "At tilkoblingen er privat",
            "At det er en router-adresse",
            "At delen er maskindelen",
            "At delen tilhører nettverket"
        ],
        riktig: 3
    },
    {
        tekst: "Hvilken av disse er en privat IP-adresse?",
        svar: [
            "8.8.8.8",
            "1.1.1.1",
            "55.10.20.30",
            "192.168.1.10"
        ],
        riktig: 3
    },
    {
        tekst: "Hva brukes private IP-adresser til?",
        svar: [
            "Kun mobilnett",
            "Bare offentlige nettsteder",
            "Interne nettverk som hjem og skole",
            "Kun servere på Internett"
        ],
        riktig: 2
    },
    {
        tekst: "Hva kalles hvert av de fire tallene i en IPv4-adresse?",
        svar: ["Node", "Segment", "Oktett", "Bitgruppe"],
        riktig: 2
    }
];



let sporsmalNr = 0;
let poeng = 0;

function vistSporsmal() {
    if (sporsmalNr >= sporsmal.length) {
        vistResultat();
        return;
    }
    
    const sp = sporsmal[sporsmalNr];
    let html = `<div class="card"><h3>Spørsmål ${sporsmalNr + 1}: ${sp.tekst}</h3>`;
    
    sp.svar.forEach((s, idx) => {
        html += `<label class="quiz-option"><input type="radio" name="svar" value="${idx}"> ${s}</label>`;
    });
    
    html += "</div>";
    html += '<div class="quiz-button"><button class="quiz-submit-btn" onclick="neste()">Neste</button></div>';
    document.getElementById("quiz-container").innerHTML = html;
}

function neste() {
    const valgt = document.querySelector('input[name="svar"]:checked');
    
    if (!valgt) {
        alert("Velg et svar!");
        return;
    }
    
    if (Number(valgt.value) === sporsmal[sporsmalNr].riktig) {
        poeng += 10;
    }
    
    sporsmalNr++;
    vistSporsmal();
}

function vistResultat() {
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("score-display").innerHTML = `Poeng: ${poeng}/90`;
    document.getElementById("results").style.display = "block";
    
    let tittel = "Mer øving!";
    let melding = `${poeng} poeng. Les Fakta igjen.`;
    
    if (poeng === 90) {
        tittel = "🎉 Perfekt!";
        melding = "Alle riktig!";
    } else if (poeng >= 50) {
        tittel = "Bra!";
        melding = `${poeng} poeng. Bra gjort!`;
    }
    
    document.getElementById("results-title").textContent = tittel;
    document.getElementById("results-details").textContent = melding;
}

function start() {
    sporsmalNr = 0;
    poeng = 0;
    document.getElementById("results").style.display = "none";
    document.getElementById("score-display").innerHTML = "Poeng: 0/90";
    vistSporsmal();
}

document.addEventListener("DOMContentLoaded", function() {
    start();
    document.getElementById("try-again").onclick = start;
});
