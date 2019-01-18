
import $ from 'jquery';
import { Bike } from './bike.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
    $("#location-btn").click(function() {
      let city = $('#userLocation').val();
      $('#userLocation').val("");
      let weeks = $('#weeks').val();
      $('#weeks').val("");
      let color = $('#color').val();
      $('#color').val("");
      

    let bike = new Bike();  // create instance of Bike class
    let promise = bike.getBikeByLocation(city); 
    // call the instance method and pass in user input
    // let promise2 = bike.getBikeByLocation(city);
    //console.log(promise);
      promise.then(function(response) {
        //console.log(response);
        let body = JSON.parse(response);
        let sortedByDate = bike.sortBikesByDate(body, weeks);
        console.log(sortedByDate);
        $('.results').text(`We Found the Follwing Bikes that Match Search Request:`);
        for(let x = 0; x < (sortedByDate.length); x++){
            $('.showBikes').append(`<li>City:${city}<br> Title: ${sortedByDate[x][0]}<br> Date Stolen: ${sortedByDate[x][1]}</li>`);
            }
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });


// $(document).ready(function () {

//     $("#userForm").submit(function (event) {
//         event.preventDefault();
//         const userName = $('#userName').val();
//         let newGame = new Game(userName);

//             let showNewCard = function() {
//                 // display card question
//                 $("#card").text(newGame.newCard.definition);
//                 //start timer
//                 newGame.setTimer();
//                 //print time to page
//                 setInterval(function(){
//                     $("#timer").text(`Time Remaining: ${newGame.time}`);
//                     if (newGame.time<=0){
//                         newGame.timeOut();
//                         $("#score").text(`Time's up!! New score is ${newGame.score}`);
//                         newGame.clearTimer();
//                         showNewCard();
//                     }
//                 }, 1000);
            
//                 // submit and check answer
//                 $("#answerForm").submit(function (event) {
//                     event.preventDefault();
//                     let userAnswer = $('#answer').val();
//                     $("#answerForm").off("submit")
//                     let finalResult = newGame.checkCard(userAnswer);
//                     newGame.clearTimer();
//                     $("#score").text(finalResult + newGame.score);
//                     // show images API
//                     if(newGame.didYouWinGame() === true) {
//                         $(".img").show();
//                         $.ajax({
//                                 url: `https://api.giphy.com/v1/stickers/random?api_key=eA4oR2RUdVtaS1l8xJ1UtQaJs6JeItIz&tag=&rating=PG&limit=1`,
//                                 type: 'GET',
//                                 data: {
//                                   format: 'json'
//                                 },
//                                 success: function (response) {
//                                   document.getElementById("test").src = response.data.images.original.url;
                            
                                
//                                 },
//                                 error: function () {
//                                   $('#errors').text("There was an error processing your request. Please try again.");
//                                 }
//                               });  
//                         }
//                         else{
//                             showNewCard();
//                         }
                    

//                 })
//             }

//         showNewCard();
           

    

//     });
// });
