//click "Start" button, starts game.

var timer = 120;

var correctAnswers;
var incorrectAnswers;
var answeredQuestions = 0
var unansweredQuestions = 10;

setTimeout(oneTwentySeconds, 1000 * 0);

var countDown = setInterval(doCountDown, 1000);

function oneTwentySeconds() {
	$("#timer-number").html(timer);
	console.log("120 seconds left!");
}

function changeTime(time, el) {
	$(el).html(time);

}

function doCountDown() {
	timer = timer - 1;
	console.log(timer)

	if (timer === 0) {
		timeUp();
		clearInterval(countDown);
		checkAnswers();
		//functionToCheckAnswers()

	}else{
		changeTime(timer, "#timer-number");

	}
}

function timeUp() {
	$("#timer-text").html("Time up!");
	$("#timer-number").html("");
	console.log("Time up!");
	alert("Time up!");
}

function checkAnswers() {

	var answeredQuestions = $("input:checked")

	var numberOfAnsweredQuestions = answeredQuestions.length;
	console.log(numberOfAnsweredQuestions);
	$("#answered").append(numberOfAnsweredQuestions);

	var numberOfUnansweredQuestions = $(".questions").length - numberOfAnsweredQuestions;
	console.log(numberOfUnansweredQuestions);
	$("#unanswered").append(numberOfUnansweredQuestions);

	var numberOfCorrectAnswers = 0;

	for (var i = answeredQuestions.length - 1; i >= 0; i--) {

		if (answeredQuestions[i].className === "js-correct") {
			numberOfCorrectAnswers++;

		}

	}

	console.log(numberOfCorrectAnswers);
	$("#correct").append(numberOfCorrectAnswers);
}



//If timer runs out:
///show "All Done" page with "ALL DONE!:
//Correct Answers: ___", "Incorrect Answers: ___" , and "Unanswered Questions: ___"

//If User clicks "Done" button:
//show "All Done" page with "ALL DONE!:
//Correct Answers: ___", "Incorrect Answers: ___" , and "Unanswered Questions: ___"

