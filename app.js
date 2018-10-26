// let key = '68370ce2deef2be16984aaf925ec51e580fdfdea684ae759b95a5484e27b6b9b'
// let collectionsID = '2270935';
// let apiRequest = new XMLHttpRequest();
// let headshot = document.getElementsByClassName('headshot')[0];
//
// document.onreadystatechange = function () {
//     if (document.readyState == "interactive") {
//         getPicture();
//     }
// }
//
//
// function getPicture() {
//
//   let url = 'https://api.unsplash.com/collections/2270935/photos/?client_id=68370ce2deef2be16984aaf925ec51e580fdfdea684ae759b95a5484e27b6b9b';
//
//
//   apiRequest.onload = onSuccess;
//   apiRequest.open('get', url, true);
//   apiRequest.send();
//
// }
//
// function onSuccess() {
//     if (apiRequest.status == "200") {
//
//         let response = JSON.parse(apiRequest.responseText)
//         console.log(response[0].urls.full);
//
//         headshot.style.backgroundImage = 'url(' + response[0].urls.full + ')';
//
//
// } else {
//
//   onError();
// }
//
//
// function onError() {
//
//         console.log('no good.');
//
//       }
//   }
