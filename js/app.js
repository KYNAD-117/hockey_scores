
window.addEventListener("load", () =>{

    // show current year on the footer
    let thisYear = new Date().getFullYear();
    document.querySelector(".copyright-year").innerHTML = "ⓒ " + thisYear +  " Danyk Allard"

    // show menu on click in th hamburger menu
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    hamburgerMenu.addEventListener("click", menuMobile);

    function menuMobile() {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    //maybe add select pour year et league?
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
    };
    fetch(URL_SCHEDULE, options1)
        .then(response => response.json())
        .then(data => {

            // get today's date
            let dateToday = new Date(Date.now() + (3600 * 1000 * 24)).toISOString().split('T')[0];

            // Check if games tonight or not
            let gameChecker = 0;

            //loop
            for (const idSemaine in data.games) {
                // slice date to (remove time)
                let dateSlice = dateToday.slice(0,10);
                let dateSliced = data.games[idSemaine].date.slice(0,10);
                if(data.games[idSemaine]){    
                    if(data.games[idSemaine].date){
                        if(dateSliced === dateSlice){
                            // add on checker to show no games if checker is 0
                            gameChecker++;

                            // Games tonight
                            let timeSlicedMTL = new Date(data.games[idSemaine].date).toLocaleString("en-CA", {timeZone: "Europe/Bratislava", hourCycle: "h23"}).slice(0,17);                            
                            const addTeams = document.createElement("div");
                            addTeams.classList.add("teams-cont");

                            // add para pour chaque game
                            addTeams.innerHTML = data.games[idSemaine].team1long +
                            "<em><div style='color:black; text-shadow:none; font-size:1.5rem;letter-spacing: 1px; text-transform: lowercase;'> vs </div></em>"+
                            data.games[idSemaine].team2long +
                            "<br>" + "<br>" +
                            timeSlicedMTL.substring(11) + " PM";

                            // append dans le div
                            document.querySelector(".games-tonight").appendChild(addTeams);
                        }                    
                    }                       
                }                    
            }
            if(gameChecker === 0){
               // No games tonight
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
            // console.log(data)
            //EASTERN
            for (const standings in data.conference["Eastern conference"]){
                // console.log(data.conference["Eastern conference"][standings].longname);
                // add team name
                let addName = document.createElement("p");
                addName.classList.add("conf-text");
                addName.textContent = data.conference["Eastern conference"][standings].longname;

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

            //WESTERN
            for (const standings in data.conference["Western conference"]){
                // console.log(data.conference["Western conference"][standings].longname);
                // add team name
                let addName = document.createElement("p");
                addName.classList.add("conf-text");
                addName.textContent = data.conference["Western conference"][standings].longname;

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
            console.log("here");
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
            // console.log(data);
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

            // append all the childs
            playerStats.classList.add("active");
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