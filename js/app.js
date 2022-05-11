// show current year on the footer
let thisYear = new Date().getFullYear();
document.querySelector(".copyright-year").innerHTML = "ⓒ " + thisYear +  " Danyk Allard"

// show menu on click in th hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

// function to click on hamburger menu
window.addEventListener("load", function(){
    hamburgerMenu.addEventListener("click", menuMobile);

    function menuMobile() {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
});
 
let logoHeader = document.getElementById("logo-header");
let selectTeams = document.getElementById("teams");

// function to change the logo on the header
window.addEventListener("load", function(){
    document.querySelector(".save-btn").addEventListener("click", function(){
        switch (selectTeams.value){
            case "Ducks":
                sessionStorage.setItem("logoSrc", "./img/teams/Anaheim_Ducks.svg");
                logoHeader.src = "./img/teams/Anaheim_Ducks.svg";
                break;
            case "Coyotes":
                sessionStorage.setItem("logoSrc", "./img/teams/Arizona_Coyotes.svg");
                logoHeader.src = "./img/teams/Arizona_Coyotes.svg";
                break;
            case "Bruins":
                sessionStorage.setItem("logoSrc", "./img/teams/Boston_Bruins.svg");
                logoHeader.src = "./img/teams/Boston_Bruins.svg";
                break;
            case "Sabres":
                sessionStorage.setItem("logoSrc", "./img/teams/Buffalo_Sabres.svg");
                logoHeader.src = "./img/teams/Buffalo_Sabres.svg";
                break;
            case "Flames":
                sessionStorage.setItem("logoSrc", "./img/teams/Calgary_Flames.svg");
                logoHeader.src = "./img/teams/Calgary_Flames.svg";
                break;
            case "Hurricanes":
                sessionStorage.setItem("logoSrc", "./img/teams/Carolina_Hurricanes.svg");
                logoHeader.src = "./img/teams/Carolina_Hurricanes.svg";
                break;
            case "Blackhawks":
                sessionStorage.setItem("logoSrc", "./img/teams/Chicago_Blackhawks.svg");
                logoHeader.src = "./img/teams/Chicago_Blackhawks.svg";
                break;
            case "Avalanche":
                sessionStorage.setItem("logoSrc", "./img/teams/Colorado_Avalanche.svg");
                logoHeader.src = "./img/teams/Colorado_Avalanche.svg";
                break;
            case "BlueJackets":
                sessionStorage.setItem("logoSrc", "./img/teams/Columbus_Blue_Jackets.svg");
                logoHeader.src = "./img/teams/Columbus_Blue_Jackets.svg";
                break;
            case "Stars":
                sessionStorage.setItem("logoSrc", "./img/teams/Dallas_Stars.svg");
                logoHeader.src = "./img/teams/Dallas_Stars.svg";
                break;
            case "RedWings":
                sessionStorage.setItem("logoSrc", "./img/teams/Detroit_Red_Wings.svg");
                logoHeader.src = "./img/teams/Detroit_Red_Wings.svg";
                break;
            case "Oilers":
                sessionStorage.setItem("logoSrc", "./img/teams/Edmonton_Oilers.svg");
                logoHeader.src = "./img/teams/Edmonton_Oilers.svg";
                break;
            case "Panthers":
                sessionStorage.setItem("logoSrc", "./img/teams/Florida_Panthers.svg");
                logoHeader.src = "./img/teams/Florida_Panthers.svg";
                break;
            case "Kings":
                sessionStorage.setItem("logoSrc", "./img/teams/Los_Angeles_Kings.svg");
                logoHeader.src = "./img/teams/Los_Angeles_Kings.svg";
                break;
            case "Wild":
                sessionStorage.setItem("logoSrc", "./img/teams/Minnesota_Wild.svg");
                logoHeader.src = "./img/teams/Minnesota_Wild.svg";
                break;
            case "Canadiens":
                sessionStorage.setItem("logoSrc", "./img/teams/Montreal_Canadiens.svg");
                logoHeader.src = "./img/teams/Montreal_Canadiens.svg";
                break;
            case "Predators":
                sessionStorage.setItem("logoSrc", "./img/teams/Nashville_Predators.svg");
                logoHeader.src = "./img/teams/Nashville_Predators.svg";
                break;
            case "Devils":
                sessionStorage.setItem("logoSrc", "./img/teams/New_Jersey_Devils.svg");
                logoHeader.src = "./img/teams/New_Jersey_Devils.svg";
                break;
            case "Islanders":
                sessionStorage.setItem("logoSrc", "./img/teams/New_York_Islanders.svg");
                logoHeader.src = "./img/teams/New_York_Islanders.svg";
                break;
            case "Rangers":
                sessionStorage.setItem("logoSrc", "./img/teams/New_York_Rangers.svg");
                logoHeader.src = "./img/teams/New_York_Rangers.svg";
                break;
            case "Senators":
                sessionStorage.setItem("logoSrc", "./img/teams/Ottawa_Senators.svg");
                logoHeader.src = "./img/teams/Ottawa_Senators.svg";
                break;
            case "Flyers":
                sessionStorage.setItem("logoSrc", "./img/teams/Philadelphia_Flyers.svg");
                logoHeader.src = "./img/teams/Philadelphia_Flyers.svg";
                break;
            case "Penguins":
                sessionStorage.setItem("logoSrc", "./img/teams/Pittsburgh_Penguins.svg");
                logoHeader.src = "./img/teams/Pittsburgh_Penguins.svg";
                break;
            case "Sharks":
                sessionStorage.setItem("logoSrc", "./img/teams/San_Jose_Sharks.svg");
                logoHeader.src = "./img/teams/San_Jose_Sharks.svg";
                break;
            case "Kraken":
                sessionStorage.setItem("logoSrc", "./img/teams/Seattle_Kraken.svg");
                logoHeader.src = "./img/teams/Seattle_Kraken.svg";
                break;
            case "Blues":
                sessionStorage.setItem("logoSrc", "./img/teams/St_Louis_Blues.svg");
                logoHeader.src = "./img/teams/St_Louis_Blues.svg";
                break;
            case "Lightning":
                sessionStorage.setItem("logoSrc", "./img/teams/Tampa_Bay_Lightning.svg");
                logoHeader.src = "./img/teams/Tampa_Bay_Lightning.svg";
                break;
            case "MapleLeafs":
                sessionStorage.setItem("logoSrc", "./img/teams/Toronto_Maple_Leafs.svg");
                logoHeader.src = "./img/teams/Toronto_Maple_Leafs.svg";
                break;
            case "Canucks":
                sessionStorage.setItem("logoSrc", "./img/teams/Vancouver_Canucks.svg");
                logoHeader.src = "./img/teams/Vancouver_Canucks.svg";
                break;
            case "GoldenKnights":
                sessionStorage.setItem("logoSrc", "./img/teams/Vegas_Golden_Knights.svg");
                logoHeader.src = "./img/teams/Vegas_Golden_Knights.svg";
                break;
            case "Capitals":
                sessionStorage.setItem("logoSrc", "./img/teams/Washington_Capitals.svg");
                logoHeader.src = "./img/teams/Washington_Capitals.svg";
                break;
            case "Jets":
                sessionStorage.setItem("logoSrc", "./img/teams/Winnipeg_Jets.svg");
                logoHeader.src = "./img/teams/Winnipeg_Jets.svg";
                break;
            default:
                sessionStorage.setItem("logoSrc", "./img/nhl-logo.svg");
                logoHeader.src = "./img/nhl-logo.svg";
        }
    });
});

logoHeader.src = sessionStorage.getItem("logoSrc");

// set the league and year for standings AND schedule
let league = "NHL";
let year = "2021";

// APIs url declared
const URL_STANDINGS = `https://hockey-live-sk-data.p.rapidapi.com/table/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`;
const URL_SCHEDULE = `https://hockey-live-sk-data.p.rapidapi.com/games/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`;

// ******************************************************************************************************* fetch schedule
const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'hockey-live-sk-data.p.rapidapi.com',
        'X-RapidAPI-Key': '749aa31749msh682c457b13ac752p18415ajsn3be27bc97888'
    }
}

fetch(URL_SCHEDULE, options1)
    .then(response => response.json())
    .then(data => {

        // display today's date on the schedule page
        let dateCalendar = document.getElementById("datePicker");
        dateCalendar.textContent = new Date(Date.now()).toISOString().split('T')[0];

        // get today's date     
        let dateToday = new Date(Date.now() + (3600 * 1000 * 24)).toISOString().split('T')[0];
        
        // add a checker (if games tonight)
        let gameChecker = 0;
        

        // loop to check if there are games today
        for (const idSemaine in data.games) {

            // slice date to (remove time)
            let dateTodayVerif = dateToday.slice(0,10);
            let dateSlicedVerif = data.games[idSemaine].date.slice(0,10);

            // sliced time based on the date in API
            let dateSliced = data.games[idSemaine].date;
            var [date, time] = dateSliced.split(' ');
            var [year, month, day] = date.split('-');
            var [hour, minute] = time.split(':');
            // console.log(dateSliced)
            // display time on the game card
            var timeSlicedMTL = new Date(year, month-1, day, hour, minute,0).toLocaleString('en-CA', {
                timeZone: 'Europe/Bratislava',
                hourCycle: 'h23',
                // dateStyle: 'full',
                // timeStyle: 'full',
            }).slice(0, -3)
            // .slice(14, 30); //14,30 or 16,28
            // console.log(timeSlicedMTL);
            // check if there are games in the API
            if(data.games[idSemaine]){   
                
                // check the date in the API
                if(data.games[idSemaine].date){

                    // check to see if the date on today match with the dates in API
                    if(dateSlicedVerif === dateTodayVerif){

                        // add on checker to show no games if checker is 0
                        gameChecker++;
                                                   
                        const addTeams = document.createElement("div");
                        addTeams.classList.add("teams-cont");

                        // add p for each games
                        addTeams.innerHTML = data.games[idSemaine].team1long +
                        "<em><div style='color:black; text-shadow:none; font-size:1.5rem; letter-spacing:1px; text-transform:lowercase; font-weight:600;'> vs </div></em>"+
                        data.games[idSemaine].team2long +
                        "<br>" + "<br>" +
                        timeSlicedMTL.substring(12) + " PM";

                        // append in div
                        document.querySelector(".games-tonight").appendChild(addTeams);
                    }                    
                }                       
            }                    
        }

        // if checker is 0, display no games message
        if(gameChecker === 0){
            const noGames = document.createElement("div");
            noGames.classList.add("teams-cont");
            noGames.innerHTML = "No games scheduled tonight...";
            document.querySelector(".games-tonight").appendChild(noGames);  
        }
    })
    .catch(err => console.error(err));

// ******************************************************************************************************* fetch standings


fetch(URL_STANDINGS, options1)
    .then(response => response.json())
    .then(data => {

        // add header name
        let eastConf = document.getElementById("one");
        eastConf.querySelector(".conf-header").textContent = "Eastern Conference";
        let westConf = document.getElementById("two");
        westConf.querySelector(".conf-header").textContent = "Western Conference";

        // EASTERN CONFERENCE
        for (const standings in data.conference["Eastern conference"]){

            // add team name
            let addName = document.createElement("p");
            addName.classList.add("conf-text");
            addName.textContent = data.conference["Eastern conference"][standings].clinch + "- " + data.conference["Eastern conference"][standings].longname;

            // add pts
            let addPts = document.createElement("p");
            addPts.classList.add("conf-text");
            addPts.textContent = data.conference["Eastern conference"][standings].points;

            // add wins
            let addWin = document.createElement("p");
            addWin.classList.add("conf-text");
            addWin.textContent = data.conference["Eastern conference"][standings].wins;

            // add losses
            let addLoss = document.createElement("p");
            addLoss.classList.add("conf-text");
            addLoss.textContent = data.conference["Eastern conference"][standings].losts;

            // append all the childs 
            document.querySelector(".e-team").appendChild(addName);
            document.querySelector(".e-team").appendChild(addPts);
            document.querySelector(".e-team").appendChild(addWin);
            document.querySelector(".e-team").appendChild(addLoss);
        }

        // WESTERN CONFERENCE
        for (const standings in data.conference["Western conference"]){

            // add team name
            let addName = document.createElement("p");
            addName.classList.add("conf-text");
            addName.textContent = data.conference["Western conference"][standings].clinch + "- " + data.conference["Western conference"][standings].longname;

            // add pts
            let addPts = document.createElement("p");
            addPts.classList.add("conf-text");
            addPts.textContent = data.conference["Western conference"][standings].points;
            
            // add wins
            let addWin = document.createElement("p");
            addWin.classList.add("conf-text");
            addWin.textContent = data.conference["Western conference"][standings].wins;

            //add losses
            let addLoss = document.createElement("p");
            addLoss.classList.add("conf-text");
            addLoss.textContent = data.conference["Western conference"][standings].losts;

            // add all the childs
            document.querySelector(".w-team").appendChild(addName);
            document.querySelector(".w-team").appendChild(addPts);
            document.querySelector(".w-team").appendChild(addWin);
            document.querySelector(".w-team").appendChild(addLoss);
        }
    })
.catch(err => console.error(err));

// ******************************************************************************************************* fetch stats

// validate form on click
window.addEventListener("load", function(){
    document.querySelector(".submit-label").addEventListener("click", validateForm);
    const playerStats = document.querySelector(".player-stats");

    // function to validate the player search
    function validateForm() {
        let validateFirstName = document.getElementById("first-name").value;
        let validateLastName = document.getElementById("last-name").value;
        let validation = /\d/;
        let checkNumFname = validation.test(validateFirstName);
        let checkNumLname = validation.test(validateLastName);

        // check if fname and lname are NOT empty
        if (checkNumFname === true || checkNumLname === true) {
            playerStats.classList.add("active");
            let addErrorMsg = document.createElement("p");
            addErrorMsg.innerHTML = "Please enter a name without numbers. <br> Please reset your search and try again.";
            document.querySelector(".player-stats").appendChild(addErrorMsg);
        } else { 
            getPlayer();
        }
    }

    // function to display the searched player
    function getPlayer(){        
        let playerFirstName = document.getElementById("first-name").value.trim();
        let playerLastName = document.getElementById("last-name").value.trim();
        
        const options2 = {
            method: 'GET',
            headers: {
                name: playerLastName + " " + playerFirstName,
                'X-RapidAPI-Host': 'hockey-live-sk-data.p.rapidapi.com',
                'X-RapidAPI-Key': '749aa31749msh682c457b13ac752p18415ajsn3be27bc97888'
            }
        };
        
        // ******************************************************************************************************* fetch player stats
        fetch(`https://hockey-live-sk-data.p.rapidapi.com/player/${playerLastName}%20${playerFirstName}/NHL?key=cb7bb85fda71e55ea7aaf92950eebb89`, options2)
        .then(response => response.json())
        .then(data => {

            // display the fname + lname
            let nameTitle = document.querySelector(".name-title");
            nameTitle.textContent = playerFirstName + " " + playerLastName;

            // display the current season
            let seasonTitle = document.querySelector(".season-title");
            seasonTitle.textContent =  data.league[data.league.length-1].name + " season";

            // add number of goals
            let addGoals = document.createElement("p");
            addGoals.textContent = data.league[data.league.length-1].stats.goals + " goals";

            // display number of assists
            let addAssists = document.createElement("p");
            addAssists.textContent = data.league[data.league.length-1].stats.asists + " assists";

            // display number of pts
            let addPts = document.createElement("p");
            addPts.textContent = data.league[data.league.length-1].stats.points + " points";

            // add active class
            playerStats.classList.add("active");

            // append all the childs
            document.querySelector(".player-stats").appendChild(addGoals);
            document.querySelector(".player-stats").appendChild(addAssists);
            document.querySelector(".player-stats").appendChild(addPts); 
        })

        // display error if no player exists in database
        .catch(err => {
            console.error(err)
            playerStats.classList.add("active");
            let addErrorMsg = document.createElement("p");
            addErrorMsg.innerHTML = "No players with that name exist. <br> This database might be incomplete.";
            document.querySelector(".player-stats").appendChild(addErrorMsg);
        });
    }
});