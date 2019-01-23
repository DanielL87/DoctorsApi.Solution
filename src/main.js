
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
    let promise = doctor.searchDoctor(name, issue); 

      promise.then(function(response) {
        let body = JSON.parse(response);

        $('.results').text(`We Found the Following Doctors that Match Search Request:`);
        for(let x = 0; x < (body.data.length); x++){
            $('.showDoctors').append(`<li>Name:${body.data[x].profile.first_name}<br></li>`);
            }
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });

