window.addEventListener("load", () =>{

let league = "NHL";
let year = "2021";

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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'hockey-live-sk-data.p.rapidapi.com',
		'X-RapidAPI-Key': '749aa31749msh682c457b13ac752p18415ajsn3be27bc97888'
	}
};

fetch(`https://hockey-live-sk-data.p.rapidapi.com/table/${league}/${year}?key=cb7bb85fda71e55ea7aaf92950eebb89`, options)
	.then(response => response.json())
	.then(data => {
        console.log(data)
        
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

        
    })


	.catch(err => console.error(err));

});