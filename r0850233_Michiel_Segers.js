// Variabelen declareren
let form = document.getElementById("formulier");
let voornaam = document.getElementById("formVoornaam");
let familienaam = document.getElementById("formAchternaam");
let gebruikersnaam = document.getElementById("formGebruikersnaam");
let emailadres = document.getElementById("formEmail");
let wachtwoord = document.getElementById("formWachtwoord");
let herhaalWachtwoord = document.getElementById("formHerhaalWachtwoord");
let adres = document.getElementById("formAdres");
let land = document.getElementById("formSelectLand");
let provincie = document.getElementById("formSelectProvincie");
let postcode = document.getElementById("formSelectPostcode");

let nieuwsbrief = document.getElementById("flexCheckNieuwsbrief");
let algemeneVoorwaarden = document.getElementById("flexCheckVoorwaarden");

let bankingApp = document.getElementById("flexRadioBankingApp");
let overschrijving = document.getElementById("flexRadioOverschrijving");
let visaCard = document.getElementById("flexRadioVisaCard");
let paypal = document.getElementById("flexRadioPaypal");

let errorAlert = document.getElementById("errorAlert");
let succesAlert = document.getElementById("succesAlert");
let infoAlert = document.getElementById("betalingsInfoAlert");

let betalingswijze = document.getElementById("betalingswijzePTag");
let errorDisplay = document.getElementById("errorDisplay");

// Array declareren
let errors = [];

// Checken dat verplichte velden ingevuld zijn via functie checkEmptyField
checkEmptyField(voornaam, ("Het veld voornaam is vereist."));
checkEmptyField(familienaam, ("Het veld naam is vereist."));
checkEmptyField(gebruikersnaam, ("Het veld gebruikersnaam is vereist."));
checkEmptyField(adres, ("Het veld adres is vereist."));
checkEmptyField(land, ("Het veld land is vereist."));
checkEmptyField(provincie, ("Het veld provincie is vereist."));

// Controle geldig email adress via functie validateEmail
validateEmail(emailadres)

// Wachtwoord controleren
// checken op invulling wachtwoorden
checkEmptyField(wachtwoord, ("Het veld wachtwoord is vereist."))
checkEmptyField(herhaalWachtwoord, ("Het veld herhaal wachtwoord is vereist."))
//checken lengte wachtwoord minstes 7 karakters
if (wachtwoord.length <= 6) {
    errors.push("Wachtwoord moet minstens 7 karakters bevatten.")
}
//kijken of wachtwoorden overeenkomen
else if (herhaalWachtwoord !== wachtwoord) {
    errors.push("De wachtwoorden komen niet overeen.")
}
else{}

// Betalingswijze controleren met de functie validatePayment
validatePayment(bankingApp);
validatePayment(overschrijving);
validatePayment(visaCard);
validatePayment(paypal);

// Checken postcode
// Checken dat postcode niet empty is via functie checkEmptyField
checkEmptyField(postcode, ("Het veld postcode is vereist."))
// Checken dat waarde postcode binnen de toegestane grenzen ligt via de functie checkPC
checkPC(postcode);

// Checken accepteren algemene voorwaarden
// Als de algemene voorwaarden niet geacepteerd zijn voeg je onderstaande melding toe aan de array errors
if (algemeneVoorwaarden.checked == false) { // checked is een boolean property
    errors.push("Je moet de algemene voorwaarden accepteren.")
}

// Vermijden dat de pagina het formulier submit bij errors
form.addEventListener('submit', (x) => {   
    // Het formulier mag niet gesubmit worden als er meer dan 0 errors zijn
    if (errors.length > 0) {
        x.preventDefault();
        // messages in de errors array samen voegen om deze vervolgens te displayen in de danger alert
        errorDisplay.innerText = errors.join('\n');

        // errorAlert niet meer hidden
        errorAlert.hidden = false
    }
    // Als de array errors geen messages bevat worden de succesalart en de infoalert gelijktijdig op het scherm weergegeven
    else {
        // de succesAlert en de infoAlert niet meer hidden
        succesAlert.hidden = false;
        infoAlert.hidden = false;
    }
})


// Functies
function checkEmptyField(veld, medling) {
    // Controleren dat de value van veld '' of null is
    if (veld.value == '' || veld.value == null) {
        // Wanneer het veld leeg is wordt de bijhorende melding aan de array errors toegevoegd
        errors.push(medling);
    }
    // Indien het veld ingevuld is dient er niets te gebeuren
    else {}
}

function validateEmail(emailadres) {
}

function validatePayment(veld) {
    // Checken ofdat het veld overschrijving aangeduid is
    if (veld.checked && veld == overschrijving) {
        betalingswijze.innerText = "Je betalingswijze is overschrijving."
    }
    // Checken ofdat het veld visaCard aangeduid is
    else if (veld.checked && veld == visaCard) {
        betalingswijze.innerText = "Je betalingswijze is visa card."

    }
    // Checken ofdat het veld paypal aangeduid is
    else if (veld.checked && veld == paypal) {
        betalingswijze.innerText = "Je betalingswijze is paypal."
    }
    // bankingApp bij de else omdat dit de default geselecteerde radio button is en er steeds een button geselecteerd moet zijn
    else {
        betalingswijze.innerText = "Je betalingswijze is banking app."
    }
}

function checkPC(veld) {
    // Checken of de waarde tussen 1000 en 9999 ligt.
    if (veld.value < 1000 || veld.value > 9999) {
        // indien de waarde niet tussen 1000 en 9999 ligt voeg je de onderstaande melding toe aan de errors array
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
    }
    else{}
}


