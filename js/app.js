window.addEventListener("load", () =>{

    //maybe add select pour year et league?
    let league = "NHL";
    let year = "2021";
    
    const URL_STANDINGS = `https://hockey-live-sk-data.p.rapidapi.com/table/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`;
    const URL_SCHEDULE = `https://hockey-live-sk-data.p.rapidapi.com/games/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'hockey-live-sk-data.p.rapidapi.com',
            'X-RapidAPI-Key': '749aa31749msh682c457b13ac752p18415ajsn3be27bc97888'
        }
    };

    // fetch schedule
    fetch(URL_SCHEDULE, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            // get today's date (converti en h de slovakie)
            let dateToday = new Date(Date.now() + (3600 * 1000 * 24)).toISOString().split('T')[0];

            //loop
            for (const idSemaine in data.games) {
                if(data.games[idSemaine]){                
                    if(data.games[idSemaine].date){
                        let dateSlice = dateToday.slice(0,10);
                        let dateSliced = data.games[idSemaine].date.slice(0,10)

                        if(dateSliced == dateSlice){
                            // Games tonight
                            let timeSlicedMTL = new Date(data.games[idSemaine].date).toLocaleString("en-CA", {timeZone: "Europe/Bratislava", hourCycle: "h23"}).slice(0,17);

                            const addTeams = document.createElement("p");
                            
                            //add para pour chaque game
                            addTeams.innerHTML = data.games[idSemaine].team1long + "<em> vs </em>" + data.games[idSemaine].team2long + "<br>" + "<br>" + timeSlicedMTL.substring(11) + " PM";
                            
                            // append dans le div
                            document.querySelector(".games-tonight").appendChild(addTeams);
                        }
                    } else {
                        // No games tonight
                        const noGames = document.createElement("p");
                        noGames.textContent = "No games scheduled tonight...";
                        document.querySelector(".games-tonight").appendChild(noGames);
                    }
                }
            }
        })
        .catch(err => console.error(err));


    // fetch standings
    fetch(URL_STANDINGS, options)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            
            //EASTERN
            for (const standings in data.conference["Eastern conference"]){
                // console.log(data.conference["Eastern conference"][standings].longname);
                let addName = document.createElement("p");
                addName.classList.add("conf-text");
                addName.textContent = data.conference["Eastern conference"][standings].longname;

                let addPts = document.createElement("p");
                addPts.classList.add("conf-text");
                addPts.textContent = data.conference["Eastern conference"][standings].points;

                let addWin = document.createElement("p");
                addWin.classList.add("conf-text");
                addWin.textContent = data.conference["Eastern conference"][standings].wins;

                let addLoss = document.createElement("p");
                addLoss.classList.add("conf-text");
                addLoss.textContent = data.conference["Eastern conference"][standings].losts;

                document.querySelector(".e-team").appendChild(addName);
                document.querySelector(".e-team").appendChild(addPts);
                document.querySelector(".e-team").appendChild(addWin);
                document.querySelector(".e-team").appendChild(addLoss);
            }

            //WESTERN
            for (const standings in data.conference["Western conference"]){
                // console.log(data.conference["Western conference"][standings].longname);
                let addName = document.createElement("p");
                addName.classList.add("conf-text");
                addName.textContent = data.conference["Western conference"][standings].longname;

                let addPts = document.createElement("p");
                addPts.classList.add("conf-text");
                addPts.textContent = data.conference["Western conference"][standings].points;

                let addWin = document.createElement("p");
                addWin.classList.add("conf-text");
                addWin.textContent = data.conference["Western conference"][standings].wins;

                let addLoss = document.createElement("p");
                addLoss.classList.add("conf-text");
                addLoss.textContent = data.conference["Western conference"][standings].losts;

                document.querySelector(".w-team").appendChild(addName);
                document.querySelector(".w-team").appendChild(addPts);
                document.querySelector(".w-team").appendChild(addWin);
                document.querySelector(".w-team").appendChild(addLoss);
            }
        })
        .catch(err => console.error(err));
});