window.addEventListener("load", () =>{

    let league = "NHL";
    let year = "2021";
    
    const URL_STANDINGS = `https://hockey-live-sk-data.p.rapidapi.com/table/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`;
    const URL_SCHEDULE = `https://hockey-live-sk-data.p.rapidapi.com/games/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`;


    // ------------------------------ EASTERN
    let estOne = document.querySelector(".e-one");
    let estTwo = document.querySelector(".e-two");
    let estThree = document.querySelector(".e-three");
    let estFour = document.querySelector(".e-four");
    let estFive = document.querySelector(".e-five");
    let estSix = document.querySelector(".e-six");
    let estSeven = document.querySelector(".e-seven");
    let estEight = document.querySelector(".e-eight");
    let estNine = document.querySelector(".e-nine");
    let estTen = document.querySelector(".e-ten");
    let estEleven = document.querySelector(".e-eleven");
    let estTwelve = document.querySelector(".e-twelve");
    let estThirteen = document.querySelector(".e-thirteen");
    let estFourteen = document.querySelector(".e-fourteen");
    let estFifteen = document.querySelector(".e-fifteen");
    let estSixteen = document.querySelector(".e-sixteen");

    let estOnePts = document.querySelector(".e-one-pts");
    let estTwoPts = document.querySelector(".e-two-pts");
    let estThreePts = document.querySelector(".e-three-pts");
    let estFourPts = document.querySelector(".e-four-pts");
    let estFivePts = document.querySelector(".e-five-pts");
    let estSixPts = document.querySelector(".e-six-pts");
    let estSevenPts = document.querySelector(".e-seven-pts");
    let estEightPts = document.querySelector(".e-eight-pts");
    let estNinePts = document.querySelector(".e-nine-pts");
    let estTenPts = document.querySelector(".e-ten-pts");
    let estElevenPts = document.querySelector(".e-eleven-pts");
    let estTwelvePts = document.querySelector(".e-twelve-pts");
    let estThirteenPts = document.querySelector(".e-thirteen-pts");
    let estFourteenPts = document.querySelector(".e-fourteen-pts");
    let estFifteenPts = document.querySelector(".e-fifteen-pts");
    let estSixteenPts = document.querySelector(".e-sixteen-pts");

    let estOneLoss = document.querySelector(".e-one-loss");
    let estTwoLoss = document.querySelector(".e-two-loss");
    let estThreeLoss = document.querySelector(".e-three-loss");
    let estFourLoss = document.querySelector(".e-four-loss");
    let estFiveLoss = document.querySelector(".e-five-loss");
    let estSixLoss = document.querySelector(".e-six-loss");
    let estSevenLoss = document.querySelector(".e-seven-loss");
    let estEightLoss = document.querySelector(".e-eight-loss");
    let estNineLoss = document.querySelector(".e-nine-loss");
    let estTenLoss = document.querySelector(".e-ten-loss");
    let estElevenLoss = document.querySelector(".e-eleven-loss");
    let estTwelveLoss = document.querySelector(".e-twelve-loss");
    let estThirteenLoss = document.querySelector(".e-thirteen-loss");
    let estFourteenLoss = document.querySelector(".e-fourteen-loss");
    let estFifteenLoss = document.querySelector(".e-fifteen-loss");
    let estSixteenLoss = document.querySelector(".e-sixteen-loss");

    let estOneWin = document.querySelector(".e-one-win");
    let estTwoWin = document.querySelector(".e-two-win");
    let estThreeWin = document.querySelector(".e-three-win");
    let estFourWin = document.querySelector(".e-four-win");
    let estFiveWin = document.querySelector(".e-five-win");
    let estSixWin = document.querySelector(".e-six-win");
    let estSevenWin = document.querySelector(".e-seven-win");
    let estEightWin = document.querySelector(".e-eight-win");
    let estNineWin = document.querySelector(".e-nine-win");
    let estTenWin = document.querySelector(".e-ten-win");
    let estElevenWin = document.querySelector(".e-eleven-win");
    let estTwelveWin = document.querySelector(".e-twelve-win");
    let estThirteenWin = document.querySelector(".e-thirteen-win");
    let estFourteenWin = document.querySelector(".e-fourteen-win");
    let estFifteenWin = document.querySelector(".e-fifteen-win");
    let estSixteenWin = document.querySelector(".e-sixteen-win");

    // ------------------------------ WESTERN
    let westOne = document.querySelector(".w-one");
    let westTwo = document.querySelector(".w-two");
    let westThree = document.querySelector(".w-three");
    let westFour = document.querySelector(".w-four");
    let westFive = document.querySelector(".w-five");
    let westSix = document.querySelector(".w-six");
    let westSeven = document.querySelector(".w-seven");
    let westEight = document.querySelector(".w-eight");
    let westNine = document.querySelector(".w-nine");
    let westTen = document.querySelector(".w-ten");
    let westEleven = document.querySelector(".w-eleven");
    let westTwelve = document.querySelector(".w-twelve");
    let westThirteen = document.querySelector(".w-thirteen");
    let westFourteen = document.querySelector(".w-fourteen");
    let westFifteen = document.querySelector(".w-fifteen");
    let westSixteen = document.querySelector(".w-sixteen");

    let westOnePts = document.querySelector(".w-one-pts");
    let westTwoPts = document.querySelector(".w-two-pts");
    let westThreePts = document.querySelector(".w-three-pts");
    let westFourPts = document.querySelector(".w-four-pts");
    let westFivePts = document.querySelector(".w-five-pts");
    let westSixPts = document.querySelector(".w-six-pts");
    let westSevenPts = document.querySelector(".w-seven-pts");
    let westEightPts = document.querySelector(".w-eight-pts");
    let westNinePts = document.querySelector(".w-nine-pts");
    let westTenPts = document.querySelector(".w-ten-pts");
    let westElevenPts = document.querySelector(".w-eleven-pts");
    let westTwelvePts = document.querySelector(".w-twelve-pts");
    let westThirteenPts = document.querySelector(".w-thirteen-pts");
    let westFourteenPts = document.querySelector(".w-fourteen-pts");
    let westFifteenPts = document.querySelector(".w-fifteen-pts");
    let westSixteenPts = document.querySelector(".w-sixteen-pts");

    let westOneLoss = document.querySelector(".w-one-loss");
    let westTwoLoss = document.querySelector(".w-two-loss");
    let westThreeLoss = document.querySelector(".w-three-loss");
    let westFourLoss = document.querySelector(".w-four-loss");
    let westFiveLoss = document.querySelector(".w-five-loss");
    let westSixLoss = document.querySelector(".w-six-loss");
    let westSevenLoss = document.querySelector(".w-seven-loss");
    let westEightLoss = document.querySelector(".w-eight-loss");
    let westNineLoss = document.querySelector(".w-nine-loss");
    let westTenLoss = document.querySelector(".w-ten-loss");
    let westElevenLoss = document.querySelector(".w-eleven-loss");
    let westTwelveLoss = document.querySelector(".w-twelve-loss");
    let westThirteenLoss = document.querySelector(".w-thirteen-loss");
    let westFourteenLoss = document.querySelector(".w-fourteen-loss");
    let westFifteenLoss = document.querySelector(".w-fifteen-loss");
    let westSixteenLoss = document.querySelector(".w-sixteen-loss");

    let westOneWin = document.querySelector(".w-one-win");
    let westTwoWin = document.querySelector(".w-two-win");
    let westThreeWin = document.querySelector(".w-three-win");
    let westFourWin = document.querySelector(".w-four-win");
    let westFiveWin = document.querySelector(".w-five-win");
    let westSixWin = document.querySelector(".w-six-win");
    let westSevenWin = document.querySelector(".w-seven-win");
    let westEightWin = document.querySelector(".w-eight-win");
    let westNineWin = document.querySelector(".w-nine-win");
    let westTenWin = document.querySelector(".w-ten-win");
    let westElevenWin = document.querySelector(".w-eleven-win");
    let westTwelveWin = document.querySelector(".w-twelve-win");
    let westThirteenWin = document.querySelector(".w-thirteen-win");
    let westFourteenWin = document.querySelector(".w-fourteen-win");
    let westFifteenWin = document.querySelector(".w-fifteen-win");
    let westSixteenWin = document.querySelector(".w-sixteen-win");

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
            let dateToday = new Date(Date.now() + (3600 * 1000 * 6)).toISOString().split('T')[0];
            // console.log(dateToday);

            //loop
            for (const record in data.games) {
                if(data.games[record]){
                    // console.log(record); affiche tout les record (0 à 1311)
                
                    if(data.games[record].date){
                        let dateSlice = dateToday.slice(0,10);
                        let dateSliced = data.games[record].date.slice(0,10)

                        // let timeSliced = data.games[record].date.substring(11);
                        let timeSlicedSVK = new Date(data.games[record].date);
                        let timeSlicedMTL = timeSlicedSVK.toLocaleString('ca-CA', {timeZone : 'America/Toronto'})
                        // console.log(timeSlicedMTL);

                        if(dateSliced == dateSlice){
                            const addTeam = document.createElement("p");
                            const addTime = document.createElement("p");
                            // add para pour chaque game
                            addTeam.textContent = data.games[record].team1long + " VS " + data.games[record].team2long;

                            // add para pour chaque time
                            addTime.textContent = timeSlicedMTL.substring(11);

                            document.querySelector(".games-tonight").appendChild(addTeam);
                            document.querySelector(".games-tonight").appendChild(addTime);
                        }
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
            // ************************************************************* APPEND-CHILD
            //EASTERN
            estOne.textContent = data.conference["Eastern conference"][1].longname;
            estTwo.textContent = data.conference["Eastern conference"][2].longname;
            estThree.textContent = data.conference["Eastern conference"][3].longname;
            estFour.textContent = data.conference["Eastern conference"][4].longname;
            estFive.textContent = data.conference["Eastern conference"][5].longname;
            estSix.textContent = data.conference["Eastern conference"][6].longname;
            estSeven.textContent = data.conference["Eastern conference"][7].longname;
            estEight.textContent = data.conference["Eastern conference"][8].longname;
            estNine.textContent = data.conference["Eastern conference"][9].longname;
            estTen.textContent = data.conference["Eastern conference"][10].longname;
            estEleven.textContent = data.conference["Eastern conference"][11].longname;
            estTwelve.textContent = data.conference["Eastern conference"][12].longname;
            estThirteen.textContent = data.conference["Eastern conference"][13].longname;
            estFourteen.textContent = data.conference["Eastern conference"][14].longname;
            estFifteen.textContent = data.conference["Eastern conference"][15].longname;
            estSixteen.textContent = data.conference["Eastern conference"][16].longname;

            estOnePts.textContent = data.conference["Eastern conference"][1].points;
            estTwoPts.textContent = data.conference["Eastern conference"][2].points;
            estThreePts.textContent = data.conference["Eastern conference"][3].points;
            estFourPts.textContent = data.conference["Eastern conference"][4].points;
            estFivePts.textContent = data.conference["Eastern conference"][5].points;
            estSixPts.textContent = data.conference["Eastern conference"][6].points;
            estSevenPts.textContent = data.conference["Eastern conference"][7].points;
            estEightPts.textContent = data.conference["Eastern conference"][8].points;
            estNinePts.textContent = data.conference["Eastern conference"][9].points;
            estTenPts.textContent = data.conference["Eastern conference"][10].points;
            estElevenPts.textContent = data.conference["Eastern conference"][11].points;
            estTwelvePts.textContent = data.conference["Eastern conference"][12].points;
            estThirteenPts.textContent = data.conference["Eastern conference"][13].points;
            estFourteenPts.textContent = data.conference["Eastern conference"][14].points;
            estFifteenPts.textContent = data.conference["Eastern conference"][15].points;
            estSixteenPts.textContent = data.conference["Eastern conference"][16].points;

            estOneWin.textContent = data.conference["Eastern conference"][1].wins;
            estTwoWin.textContent = data.conference["Eastern conference"][2].wins;
            estThreeWin.textContent = data.conference["Eastern conference"][3].wins;
            estFourWin.textContent = data.conference["Eastern conference"][4].wins;
            estFiveWin.textContent = data.conference["Eastern conference"][5].wins;
            estSixWin.textContent = data.conference["Eastern conference"][6].wins;
            estSevenWin.textContent = data.conference["Eastern conference"][7].wins;
            estEightWin.textContent = data.conference["Eastern conference"][8].wins;
            estNineWin.textContent = data.conference["Eastern conference"][9].wins;
            estTenWin.textContent = data.conference["Eastern conference"][10].wins;
            estElevenWin.textContent = data.conference["Eastern conference"][11].wins;
            estTwelveWin.textContent = data.conference["Eastern conference"][12].wins;
            estThirteenWin.textContent = data.conference["Eastern conference"][13].wins;
            estFourteenWin.textContent = data.conference["Eastern conference"][14].wins;
            estFifteenWin.textContent = data.conference["Eastern conference"][15].wins;
            estSixteenWin.textContent = data.conference["Eastern conference"][16].wins;

            estOneLoss.textContent = data.conference["Eastern conference"][1].losts;
            estTwoLoss.textContent = data.conference["Eastern conference"][2].losts;
            estThreeLoss.textContent = data.conference["Eastern conference"][3].losts;
            estFourLoss.textContent = data.conference["Eastern conference"][4].losts;
            estFiveLoss.textContent = data.conference["Eastern conference"][5].losts;
            estSixLoss.textContent = data.conference["Eastern conference"][6].losts;
            estSevenLoss.textContent = data.conference["Eastern conference"][7].losts;
            estEightLoss.textContent = data.conference["Eastern conference"][8].losts;
            estNineLoss.textContent = data.conference["Eastern conference"][9].losts;
            estTenLoss.textContent = data.conference["Eastern conference"][10].losts;
            estElevenLoss.textContent = data.conference["Eastern conference"][11].losts;
            estTwelveLoss.textContent = data.conference["Eastern conference"][12].losts;
            estThirteenLoss.textContent = data.conference["Eastern conference"][13].losts;
            estFourteenLoss.textContent = data.conference["Eastern conference"][14].losts;
            estFifteenLoss.textContent = data.conference["Eastern conference"][15].losts;
            estSixteenLoss.textContent = data.conference["Eastern conference"][16].losts;

            //WESTERN        
            westOne.textContent = data.conference["Western conference"][1].longname;
            westTwo.textContent = data.conference["Western conference"][2].longname;
            westThree.textContent = data.conference["Western conference"][3].longname;
            westFour.textContent = data.conference["Western conference"][4].longname;
            westFive.textContent = data.conference["Western conference"][5].longname;
            westSix.textContent = data.conference["Western conference"][6].longname;
            westSeven.textContent = data.conference["Western conference"][7].longname;
            westEight.textContent = data.conference["Western conference"][8].longname;
            westNine.textContent = data.conference["Western conference"][9].longname;
            westTen.textContent = data.conference["Western conference"][10].longname;
            westEleven.textContent = data.conference["Western conference"][11].longname;
            westTwelve.textContent = data.conference["Western conference"][12].longname;
            westThirteen.textContent = data.conference["Western conference"][13].longname;
            westFourteen.textContent = data.conference["Western conference"][14].longname;
            westFifteen.textContent = data.conference["Western conference"][15].longname;
            westSixteen.textContent = data.conference["Western conference"][16].longname;

            westOnePts.textContent = data.conference["Western conference"][1].points;
            westTwoPts.textContent = data.conference["Western conference"][2].points;
            westThreePts.textContent = data.conference["Western conference"][3].points;
            westFourPts.textContent = data.conference["Western conference"][4].points;
            westFivePts.textContent = data.conference["Western conference"][5].points;
            westSixPts.textContent = data.conference["Western conference"][6].points;
            westSevenPts.textContent = data.conference["Western conference"][7].points;
            westEightPts.textContent = data.conference["Western conference"][8].points;
            westNinePts.textContent = data.conference["Western conference"][9].points;
            westTenPts.textContent = data.conference["Western conference"][10].points;
            westElevenPts.textContent = data.conference["Western conference"][11].points;
            westTwelvePts.textContent = data.conference["Western conference"][12].points;
            westThirteenPts.textContent = data.conference["Western conference"][13].points;
            westFourteenPts.textContent = data.conference["Western conference"][14].points;
            westFifteenPts.textContent = data.conference["Western conference"][15].points;
            westSixteenPts.textContent = data.conference["Western conference"][16].points;

            westOneWin.textContent = data.conference["Western conference"][1].wins;
            westTwoWin.textContent = data.conference["Western conference"][2].wins;
            westThreeWin.textContent = data.conference["Western conference"][3].wins;
            westFourWin.textContent = data.conference["Western conference"][4].wins;
            westFiveWin.textContent = data.conference["Western conference"][5].wins;
            westSixWin.textContent = data.conference["Western conference"][6].wins;
            westSevenWin.textContent = data.conference["Western conference"][7].wins;
            westEightWin.textContent = data.conference["Western conference"][8].wins;
            westNineWin.textContent = data.conference["Western conference"][9].wins;
            westTenWin.textContent = data.conference["Western conference"][10].wins;
            westElevenWin.textContent = data.conference["Western conference"][11].wins;
            westTwelveWin.textContent = data.conference["Western conference"][12].wins;
            westThirteenWin.textContent = data.conference["Western conference"][13].wins;
            westFourteenWin.textContent = data.conference["Western conference"][14].wins;
            westFifteenWin.textContent = data.conference["Western conference"][15].wins;
            westSixteenWin.textContent = data.conference["Western conference"][16].wins;

            westOneLoss.textContent = data.conference["Western conference"][1].losts;
            westTwoLoss.textContent = data.conference["Western conference"][2].losts;
            westThreeLoss.textContent = data.conference["Western conference"][3].losts;
            westFourLoss.textContent = data.conference["Western conference"][4].losts;
            westFiveLoss.textContent = data.conference["Western conference"][5].losts;
            westSixLoss.textContent = data.conference["Western conference"][6].losts;
            westSevenLoss.textContent = data.conference["Western conference"][7].losts;
            westEightLoss.textContent = data.conference["Western conference"][8].losts;
            westNineLoss.textContent = data.conference["Western conference"][9].losts;
            westTenLoss.textContent = data.conference["Western conference"][10].losts;
            westElevenLoss.textContent = data.conference["Western conference"][11].losts;
            westTwelveLoss.textContent = data.conference["Western conference"][12].losts;
            westThirteenLoss.textContent = data.conference["Western conference"][13].losts;
            westFourteenLoss.textContent = data.conference["Western conference"][14].losts;
            westFifteenLoss.textContent = data.conference["Western conference"][15].losts;
            westSixteenLoss.textContent = data.conference["Western conference"][16].losts;
            
        })
        .catch(err => console.error(err));
});