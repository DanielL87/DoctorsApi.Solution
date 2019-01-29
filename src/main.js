
import $ from 'jquery';
import { Doctor } from './doctor.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
    $("#location-btn").click(function() {
      let issue = $('#userIssue').val();
      $('#userIssue').val("");
      let name = $('#doctorName').val();
      $('#doctorName').val("");
      
    let doctor = new Doctor();  
    let promise = doctor.searchDoctor(name, issue); 

      promise.then(function(response) {
        let body = JSON.parse(response);
        console.log(body)

        $('.results').text(`We Found the Following Doctors that Match Search Request:`);
        for(let x = 0; x < (body.data.length); x++){
            $('.showDoctors').append(`<br><li>Name:${body.data[x].profile.first_name} ${body.data[x].profile.last_name}<br></li>`);
            $('.showDoctors').append(`<li>Phone Number:${body.data[x].practices[0].phones[0].number}<br></li>`);
            $('.showDoctors').append(`<li>Address:${body.data[x].practices[0].visit_address.city} , ${body.data[x].practices[0].visit_address.state} , ${body.data[x].practices[0].visit_address.street} , ${body.data[x].practices[0].visit_address.zip}<br></li>`);
            $('.showDoctors').append(`<li>Accepts New Patients?:${body.data[x].practices[0].accepts_new_patients}<br></li><br>`);
            }
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });

