let fieldsCheck;
let showSecret = true;

let theAnthem = new Audio("audio/anthem.mp3")
let body = document.querySelector("body");
let form = document.querySelector("form");
let theH1 = document.querySelector("h1");
let theH2 = document.querySelector("h2");

let kang1 = document.querySelector("#kang1");
let kang2 = document.querySelector("#kang2");
let kang3 = document.querySelector("#kang3");
let kang4 = document.querySelector("#kang4");
let kang5 = document.querySelector("#kang5");



let countryResults = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea - Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Burma",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]


function secretReveal() {

    body.style.backgroundImage = "url('img/flag.jpg')";

    // playing the audio
    theAnthem.play();

    // hiding the form
    form.style.display = 'none';

    // styling the H1
    theH1.style.width = "400px";
    theH1.style.margin = "100px auto";
    theH1.style.padding = "20px 20px";
    theH1.style.backgroundColor = "#ffffffbf";
    theH1.innerHTML = "Don't worry about the world coming to an end. It's already tomorrow in Australia.";
    theH1.style.fontFamily = "bodyFont";

    // waiting 3 secs before animating the kangaroos. 
    setTimeout(function () {
        animateKangs();
    }, 3000);


}

function animateKangs() {

    kang1.style.display = "block";
    kang2.style.display = "block";
    kang3.style.display = "block";
    kang4.style.display = "block";
    kang5.style.display = "block";

    TweenMax.to("#kang1", 4, {
        left: "120vw",
        repeat: -1,
        ease: Power4.easeOut
    });
    TweenMax.to("#kang2", 4, {
        delay: 0.5,
        left: "-30vw",
        repeat: -1,
        ease: Power4.easeOut
    });
    TweenMax.to("#kang3", 4, {
        delay: 1,
        left: "120vw",
        repeat: -1,
        ease: Power4.easeOut
    });
    TweenMax.to("#kang4", 4, {
        delay: 1.5,
        left: "-30vw",
        repeat: -1,
        ease: Power4.easeOut
    });
    TweenMax.to("#kang5", 4, {
        delay: 2,
        left: "120vw",
        repeat: -1,
        ease: Power4.easeOut
    });
}


// form checks
function countryCheck(strVal) {
    let secretPattern = /^australia$/i;


    if (showSecret) {
        (secretPattern.test(strVal)) ? showSecret = true: showSecret = false;
    } else {
        showSecret = false;
    }


    let pat = /^[a-z]/i;
    if (pat.test(strVal)) {
        return true;
    }
    return false;
}

function snakeCheck(strVal) {


    if (showSecret) {
        ((strVal == "love_to")) ? showSecret = true: showSecret = false;
    } else {
        showSecret = false;
    }


    return true;
}

function spiderCheck(strVal) {


    if (showSecret) {
        ((strVal == "8")) ? showSecret = true: showSecret = false;
    } else {
        showSecret = false;
    }


    let pat = /^[0-9]$/;
    if (pat.test(strVal)) {
        return true;
    }
    return false;
}

/* function scorpionCheck(strVal) {

    
    if (showSecret) {
        ((strVal == "no")) ? showSecret = true : showSecret = false;
    } else {
        showSecret = false;
    }
    

    return true;
} */

function animalCheck(strVal) {
    let secretPattern = /[kill]/i;



    if (showSecret) {
        (secretPattern.test(strVal)) ? showSecret = true: showSecret = false;
    } else {
        showSecret = false;
    }

    let pat = /^[a-z]/i;
    if (pat.test(strVal)) {
        return true;
    }
    return false;
}

function nzCheck(strVal) {
    let secretPattern = /poor/i;


    if (showSecret) {
        (secretPattern.test(strVal)) ? showSecret = true: showSecret = false;
    } else {
        showSecret = false;
    }


    let pat = /^[a-zA-Z]+$/;
    if (pat.test(strVal)) {
        return true;
    }
    return false;
}

function riddleCheck(strVal) {
    let secretPattern = /angler\s?[-]?\s?fish/i;


    if (showSecret) {
        (secretPattern.test(strVal)) ? showSecret = true: showSecret = false;
    } else {
        showSecret = false;
    }


    return true;
}



// the function to reset the error fields
function errorsReset() {
    fieldsCheck.forEach(inputField => {
        inputField.error.innerText = "";
    });
}


// the function that runs the checkers for all fields
function formChecker(e) {
    e.preventDefault();
    errorsReset();
    let errorsDetected = 0;


    fieldsCheck.forEach(inputField => {
        if (inputField.checker(inputField.field.value) == false) {

            inputField.error.innerText = inputField.msg;
            errorsDetected++;
        }
    });

    if (errorsDetected > 0) {
        console.log("correct errors before submission");
    } else {
        if (showSecret) {
            console.log("%c Ripper! Barbie got my gut chockers, no room for slab ups.", 'background: #333; color: #bada55');
            secretReveal();
        } else {
            console.log("You ain't no Australian, mate. Bugger off.");
            showCommonPeopleResult();
        }
    }
    showSecret = true;
}

// function to show common result
function showCommonPeopleResult() {
    let randomNumber = (Math.ceil(Math.random() * 200)) - 1;

    form.style.display = 'none';

    theH2.innerHTML = `Looks like someone's off to ${countryResults[randomNumber]}.`;
    theH2.style.display = "block";
    theH2.style.width = "600px";
    theH2.style.margin = "100px auto";
    theH2.style.padding = "20px 20px";
    theH2.style.backgroundColor = "#ffffffbf";
}

// initializing the form with required variables
function initForm() {

    // inputs   
    // text input for country
    let country = document.querySelector("#country");
    // select input for snake
    let snake = document.querySelector("#snake");
    // number input for spider
    let spider = document.querySelector("#spider");
    // radio buttons input for scorpions
    let scorpionYes = document.querySelector("#scorpionYes");
    let scorpionNo = document.querySelector("#scorpionNo");
    //  text input for animal
    let animal = document.querySelector("#animal");
    // text input for nz
    let nz = document.querySelector("#nz");
    // text input for riddle
    let riddle = document.querySelector("#riddle");
    let riddleSection = document.querySelector("#riddleSection");


    // error paragraphs
    let countryError = document.querySelector("#countryError");
    let snakeError = document.querySelector("#snakeError");
    let spiderError = document.querySelector("#spiderError");
    // let scorpionError = document.querySelector("#scorpionError");
    let animalError = document.querySelector("#animalError");
    let nzError = document.querySelector("#nzError");
    let riddleError = document.querySelector("#riddleError");

    // submit button
    let formSubmit = document.querySelector("#formSubmit");


    fieldsCheck = [{
            field: country,
            checker: countryCheck,
            error: countryError,
            msg: "Please enter a country"
        },
        {
            field: snake,
            checker: snakeCheck,
            error: snakeError,
            msg: "Please select an option."
        },
        {
            field: spider,
            checker: spiderCheck,
            error: spiderError,
            msg: "Please enter a number."
        },

        /* {
            field: scorpionYes,
            checker: scorpionCheck,
            error: scorpionError,
            msg: "Please select an option."
        },
        {
            field: scorpionNo,
            checker: scorpionCheck,
            error: scorpionError,
            msg: "Please select an option."
        }, */

        {
            field: animal,
            checker: animalCheck,
            error: animalError,
            msg: "Please enter an animal."
        },
        {
            field: nz,
            checker: nzCheck,
            error: nzError,
            msg: "Please enter a word."
        },
        {
            field: riddle,
            checker: riddleCheck,
            error: riddleError,
            msg: "Wrong answer. Unworthy."
        }
    ];

    formSubmit.addEventListener("click", formChecker);

}

// running initForm() only after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    initForm();
});