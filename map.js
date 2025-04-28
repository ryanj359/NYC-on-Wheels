var map = L.map('map').setView([40.7463, -73.9509], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([40.67712, -73.99436]).addTo(map); //Up a Notch//
var popupContent1 = "<b>Up a Notch</b><br><a href='https://www.google.com/maps/place/5th+Ave+%26+9th+St,+Brooklyn,+NY+11215/@40.6691556,-73.98892,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25afc55d7ea0b:0x2b54a24ccaf5d2ee!8m2!3d40.6691516!4d-73.9863397!16s%2Fg%2F11hb5v7dj2?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>5th Ave and 9th St</a><br>Everyday<br>12PM - 4AM<br><a href='https://www.instagram.com/upanotchbk/?hl=en'>Instagram</a>";
marker1.bindPopup(popupContent1);


var marker2 = L.marker([40.757038, -73.982073]).addTo(map); // Moshe's Falafel Truck //
var popupContent2 = "<b>Moshe's Falafel</b><br><a href='https://www.google.com/maps/place/6th+Ave+%26+W+46th+St,+New+York,+NY+10036/@40.7573958,-73.98483,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258ff9d4adfef:0xe6532f0274eb965d!8m2!3d40.7573918!4d-73.9822497!16s%2Fg%2F11f38p3nm0?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>6th Ave & W 46th St</a><br>Monday - Thursday: 11AM - 5PM<br>Friday: 10:30AM - 4PM<br>Saturday - Sunday: Closed <br> <a href='https://www.instagram.com/moshesfalafel/'>Instagram</a>";
marker2.bindPopup(popupContent2);

var marker3 = L.marker([40.7850716, -73.975496]).addTo(map); // Moshe's Falafel Brick-and-mortar //
var popupContent3 = "<b>Moshe's Falafel</b><br><a href='https://www.google.com/maps/place/142+W+83rd+St,+New+York,+NY+10024/@40.785056,-73.9779385,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25885bea5ca27:0x3d458124454105a2!8m2!3d40.785052!4d-73.9753582!16s%2Fg%2F11h_f6cfks?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>142 W 83rd St</a><br>Sunday - Thursday: 11AM - 9PM<br>Friday: 10:30AM - 4:30PM<br>Saturday: Closed <br> <a href='https://www.instagram.com/moshesfalafel/'>Instagram</a>";
marker3.bindPopup(popupContent3);


var marker4 = L.marker([40.7800, -73.9815]).addTo(map); // Birria Landia Truck UWS //
var popupContent4 = "<b>Birria Landia</b><br><a href='https://www.google.com/maps/place/W+70th+St+%26+Amsterdam+Ave,+New+York,+NY+10023/@40.777309,-73.9851539,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2588a7de4fbf3:0x4e061270a771ddf0!8m2!3d40.777305!4d-73.9825736!16s%2Fg%2F11hb35_rys?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>W 70th St & Amsterdam Ave</a><br>Everyday<br> 4PM - 12AM <br><a href='https://www.instagram.com/birria_landia/'>Instagram</a>";
marker4.bindPopup(popupContent4);

var marker5 = L.marker([40.7236, -73.9909]).addTo(map); // Birria Landia Truck LES //
var popupContent5 = "<b>Birria Landia</b><br><a href='https://www.google.com/maps/place/E+Houston+St+%26+Bowery,+New+York,+NY+10012/@40.7240969,-73.9952858,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25985a67928b3:0x52ce658fd02e10b4!8m2!3d40.7240929!4d-73.9927055!16s%2Fg%2F11f3fkmqdg?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>E Houston St & Bowery</a><br>Monday - Thursday: 4PM - 12AM<br> Saturday: 12PM - 1AM <br> Sunday: 12PM-12AM <br><a href='https://www.instagram.com/birria_landia/'>Instagram</a>";
marker5.bindPopup(popupContent5);

var marker6 = L.marker([40.86273, -73.89732]).addTo(map); // Birria Landia Truck Bronx //
var popupContent6 = "<b>Birria Landia</b><br><a href='https://www.google.com/maps/place/2501+Grand+Concourse,+Bronx,+NY+10468/@40.8628565,-73.8998067,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2f3870ecc9215:0x82fa5172efa74051!8m2!3d40.8628525!4d-73.8972264!16s%2Fg%2F11c3q3bdfj?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>2501 Grand Concourse</a><br> Everyday <br> 12PM-11PM <br><a href='https://www.instagram.com/birria_landia/'>Instagram</a>";
marker6.bindPopup(popupContent6);

var marker7 = L.marker([40.7147, -73.9423]).addTo(map); // Birria Landia Truck Brooklyn //
var popupContent7 = "<b>Birria Landia</b><br><a href='https://www.google.com/maps/place/491+Metropolitan+Ave,+Brooklyn,+NY+11211/@40.7142821,-73.9550817,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259592359cbfb:0x71b63d244219d821!8m2!3d40.7142781!4d-73.9525014!16s%2Fg%2F11t4m03rnc?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>491 Metropolitan Ave</a><br> Monday - Friday: 4PM - 1AM <br> Saturday - Sunday: 1PM-1AM <br><a href='https://www.instagram.com/birria_landia/'>Instagram</a>";
marker7.bindPopup(popupContent7);

var marker8 = L.marker([40.7490, -73.8885]).addTo(map); // Birria Landia Truck Queens //
var popupContent8 = "<b>Birria Landia</b><br><a href='https://www.google.com/maps/place/77-99+Roosevelt+Ave,+Jackson+Heights,+NY+11372/@40.7472348,-73.8903567,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25fa9edd622bd:0x79dc820da327d1ad!8m2!3d40.7472308!4d-73.8877764?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>77-99 Roosevelt Ave</a><br> Monday - Thursday: 5PM - 1AM <br> Friday: 5PM - 2AM <br> Saturday: 12PM-2AM <br> Sunday: 12PM - 1AM<br><a href='https://www.instagram.com/birria_landia/'>Instagram</a>";
marker8.bindPopup(popupContent8);


var marker9 = L.marker([40.7308, -73.9988]).addTo(map); // NY Dosas //
var popupContent9 = "<b>NY Dosas</b><br><a href='https://www.google.com/maps/place/50+Washington+Square+S,+New+York,+NY+10012/@40.7304707,-74.0014488,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259910bf3e20f:0x39c395119946f874!8m2!3d40.7304667!4d-73.9988685!16s%2Fg%2F11b8z43hkf?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>50 Washington Square S</a><br> Monday - Saturday: 11AM - 3PM <br> Sunday: Closed <br> <a href='https://www.instagram.com/nydosas/?hl=en'>Instagram</a>";
marker9.bindPopup(popupContent9);


var marker10 = L.marker([40.6830, -73.9443]).addTo(map); // Chilo's //
var popupContent10 = "<b>Chilo's</b><br><a href='https://www.google.com/maps/place/Chilo's/@40.6883675,-73.9595345,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b95c9feaafd:0xdf6788a55bf9bfb6!8m2!3d40.6883635!4d-73.9569542!16s%2Fg%2F11b7lmxqyj?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'>323 Franklin Ave</a><br> Monday: 5PM - 11PM <br> Tuesday - Wednesday: Closed <br> Friday: 5PM - 12AM <br> Saturday: 12PM - 12AM <br> Sunday: 12PM - 10PM <br><a href='https://www.instagram.com/chilosbk'>Instagram</a>";
marker10.bindPopup(popupContent10);