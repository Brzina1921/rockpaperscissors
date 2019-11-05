var counterPlayer = 0;
var counterComputer = 0;
var userOption = "";
var computerOptionRandom = "";
var computerOption = ["rock", "paper", "scissors"];

// Generisanje random broja i kompjuterske opcije

function randomComputerOption() {

  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenOption = computerOption[randomNumber];

  return randomChosenOption;
}

// Glavna funkcija igre

// $(".gameIcons").click(function(){
for (var i = 0; i < computerOption.length; i++) {
  document.querySelectorAll(".gameIcons")[i].addEventListener("click", function() {
    // var userChosenOption = $(this).attr("id");
    var userChosenOption = (this).getAttribute("id");
    userOption = userChosenOption;
    animatePressPlayer(userOption);
    console.log("Player " + userOption);
    computerOptionRandom = randomComputerOption();
    setTimeout(function() {
      animatePressComputer(computerOptionRandom);
    }, 1200);

    console.log("Computer " + computerOptionRandom);

    setTimeout(function() {
      checkWinner();
    }, 1500);
    // });
  });
}

// Funkcija za provjeravanje pobjednika

function checkWinner() {

  if ((userOption === "rock" && computerOptionRandom === "scissors") || (userOption == "paper" && computerOptionRandom == "rock") || (userOption == "scissors" && computerOptionRandom == "paper")) {
    // $(".h1-result").text("Igrac je POBIJEDIO!");
    document.querySelector(".h1-result").innerHTML = "Igrac je POBIJEDIO!";
    document.querySelector(".h1-result").style.color = "#4285F4";
    counterPlayer++;
    // $("#player").text("Igrac: " + counterPlayer);
    document.querySelector("#player").innerHTML = "Igrac: " + counterPlayer;
  } else if (userOption === computerOptionRandom) {
    // $(".h1-result").text("NERIJESENO!");
    document.querySelector(".h1-result").innerHTML = "NERIJESENO!";
    document.querySelector(".h1-result").style.color = "white";
  } else {
    // $(".h1-result").text("Kompjuter je POBIJEDIO!");
    document.querySelector(".h1-result").innerHTML = "Kompjuter je POBIJEDIO!";
    document.querySelector(".h1-result").style.color = "#eb1736";
    counterComputer++;
    // $("#computer").text("Kompjuter: " + counterComputer);
    document.querySelector("#computer").innerHTML = "Kompjuter: " + counterComputer;
  }
}

// Funkcija za animaciju klika igraca

function animatePressPlayer(currentOption) {
  // $("#" + currentOption).addClass("pressed-player");
  document.querySelector("#" + currentOption).classList.add("pressed-player");
  setTimeout(function() {
    // $("#" + currentOption).removeClass("pressed-player");
    document.querySelector("#" + currentOption).classList.remove("pressed-player");
  }, 200);
}

// Funckija za animaciju simulacije klika kompjutera

function animatePressComputer(currentOption) {
  // $("#" + currentOption).addClass("pressed-computer");
  document.querySelector("#" + currentOption).classList.add("pressed-computer");
  setTimeout(function() {
    // $("#" + currentOption).removeClass("pressed-computer");
    document.querySelector("#" + currentOption).classList.remove("pressed-computer");
  }, 200);
}
