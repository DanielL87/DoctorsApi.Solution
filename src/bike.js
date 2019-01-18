export class Bike {

    getBikeByLocation(city) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=${city}%2Cor&distance=10&stolenness=proximity`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

    sortBikesByDate(bikeArray, weeks) {
        let bikeList = [];
        let todaysDate = new Date();
        for (let x = 0; x < bikeArray.bikes.length; x++) {
            if (bikeArray.bikes[x].date_stolen > (todaysDate / 1000 - (604800 * weeks))) {
                let dateStolen = new Date((bikeArray.bikes[x].date_stolen) * 1000);
                let bikeTitle = bikeArray.bikes[x].title;
                bikeList.push([bikeTitle, dateStolen]);
            }
        }
        return bikeList;
    }
}





//    getBikeByColor(color){
//     return new Promise(function(resolve, reject) {
//         let request = new XMLHttpRequest();
//         let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=10&colors=${color}&location=IP&distance=10&stolenness=proximity`;
//         request.onload = function() {
//           if (this.status === 200) {
//             resolve(request.response);
//           } else {
//             reject(Error(request.statusText));
//           }
//         }
//         request.open("GET", url, true);
//         request.send();
//       });



// import { Card } from './card.js';
// let x = 0;


// export class Game {

//   constructor(userName) {
//     this.userName = userName;
//     this.cardNumber = 0;
//     this.newCard = Card.cardCreater(this.cardNumber);
//     this.time = 10;
//     this.score = 0;
//     this.interval = null;
//   }

//   raiseScore() {
//     return this.score++;
//   }

//   timeOut() {
//     this.score--;
//     this.time=10;
//     this.cardNumber++;
//     this.newCard = Card.cardCreater(this.cardNumber);
//   }

//   setTimer() {
//     this.interval = setInterval(() => {
//       if (this.time > 0) {
//         this.time--;
//         console.log("Set Timer:" + this.time);
//       } else {
//         this.score--;
//       }
//     }, 1000);
//   }

//   clearTimer() {
//     console.log(this.interval);
//     clearInterval(this.interval);
//   }

//   checkCard (userAnswer) {
//   let isCorrect = this.newCard.testAnswer(userAnswer);
//   if (isCorrect === true) {
//       this.raiseScore();
//       this.cardNumber++;
//       this.newCard = Card.cardCreater(this.cardNumber);
//       this.time=10;
//       return "Correct! New Score is ";

//   }
//   else {
//       this.score--;
//       this.cardNumber++;
//       this.newCard = Card.cardCreater(this.cardNumber);
//       this.time=10;
//       return "Incorrect! New Score is ";
//   }
// }

//   didYouWinGame() {
//     if (this.score >=2) {
//       this.clearTimer();
//       return true;
//     } else {
//       return false;
//     }

//   }


// }

