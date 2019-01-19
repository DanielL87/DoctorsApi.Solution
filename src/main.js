
import $ from 'jquery';
import { Doctor } from './doctor.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
    $("#location-btn").click(function() {
      let issue = $('#userIssue').val();
      $('#userIssue').val("");
      let name = $('#doctroName').val();
      $('#doctroName').val("");
      

    let doctor = new Doctor();  
    let promise = doctor.searchDoctorbyName(name); 

      promise.then(function(response) {
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

