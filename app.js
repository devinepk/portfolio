// var app = new Vue({
//
//   el: '#app',
//
//   data: {
//     apiRequest: new XMLHttpRequest(),
//     backgroundImages: {}
//
//   },
//
//   created: function () {
//
//     // Format a url
//     let url = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=3o0fsEzz2T1gTRsj9hczHWjX35yEFo3b&limit=20';
//
//     // Fetch from the url
//     this.apiRequest.onload = this.onSuccess;
//     this.apiRequest.onerror = this.onError;
//     this.apiRequest.open('get', url, true);
//     this.apiRequest.send();
//
// },
//
//   methods: {
//
//     getImageCollection = function () {
//
//     },
//
//     rotateCollection = function () {
//
//     },
//
//     onSuccess = function () {
//
//       if (apiRequest.status == "200") {
//
//         let response = JSON.parse(apiRequest.responseText);
//
//     }
//
//   }
// })
//
// // // This is main.js
// // let zipcode = document.getElementById('zipcodeInput');
// // let weatherButton = document.getElementById('weatherButton');
// // let appId = '58e92c763df5499a2c9ae20da806e2dc';
// // let apiRequest = new XMLHttpRequest();
// // let output = document.getElementById('output');
// // let error = document.getElementById('error');
// // let output_city = document.getElementById('output-city');
// // let output_condition = document.getElementById('output-condition');
// // let output_c = document.getElementById('output-c');
// // let output_f = document.getElementById('output-f');
// // let output_k = document.getElementById('output-k');
// // let output_image = document.getElementById('output-image');
// //
// //
// // document.onreadystatechange = function () {
// //     if (document.readyState == "interactive") {
// //         weatherButton.onclick = getWeather;
// //     }
// // }
// //
// // function getWeather() {
// //
// //     // Format a url
// //     let url = 'https://api.openweathermap.org/data/2.5/weather?zip=<zipcode>,us&appid=<appid>';
// //     url = url.replace("<zipcode>", zipcode.value);
// //     url = url.replace("<appid>", appId);
// //
// //     // Fetch from the url
// //     apiRequest.onload = onSuccess;
// //     apiRequest.onerror = onError;
// //     apiRequest.open('get', url, true);
// //     apiRequest.send();
// //
// // }
// //
// //
// // function onError() {
// //
// //     // Update the text inside error
// //     if (apiRequest.responseText) {
// //         document.querySelector('#error div').innerHTML = JSON.parse(apiRequest.responseText).message;
// //     }
// //     else {
// //         document.querySelector('#error div').innerHTML = "An error has occurred. Please try again.";
// //     }
// //
// //     // Turn "off" output
// //     output.style.display = 'none';
// //
// //     // Turn "on" error
// //     error.style.display = 'block';
// //
// // }
// //
// // function onSuccess() {
// //
// //     if (apiRequest.status == "200") {
// //
// //         let response = JSON.parse(apiRequest.responseText);
// //
// //         output_city.innerHTML = response.name;
// //         output_condition.innerHTML = response.weather[0].description;
// //         output_k.innerHTML = Math.round(response.main.temp) + ' K';
// //         output_c.innerHTML = Math.round(KtoC(response.main.temp)) + ' C';
// //         output_f.innerHTML = Math.round(KtoF(response.main.temp)) + ' F';
// //         output_image.src = decideImage(response.main.temp);
// //
// //         // Turn "off" error
// //         error.style.display = 'none';
// //
// //         // Turn "on" output
// //         output.style.display = 'block';
// //
// //     }
// //     else {
// //         onError();
// //     }
// //
// // }
// //
// // function KtoC(tempK) {
// //     return tempK - 273.15;
// // }
// //
// // function KtoF(tempK) {
// //     return (tempK * 9/5) - 459.67;
// // }
// //
// // function decideImage(tempK) {
// //
// //     if (tempK > 294) { // HOT!
// //         return "https://jonsdeepthoughts.files.wordpress.com/2015/05/10.jpg";
// //     }
// //     else if (tempK < 285) { // COLD!
// //         return "https://i.ytimg.com/vi/CniJKgIrpX4/maxresdefault.jpg";
// //     }
// //     return "https://parrisisland.files.wordpress.com/2011/08/di.jpg";
// //
// // }
