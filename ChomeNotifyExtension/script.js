//issue with notifications not working with content scripts, need to send message to backround script in order to create notifications


//let content load onto page first
setTimeout(function(){
   var global_key = document.body.innerHTML.toString().indexOf('SELECT SIZE');
   console.log(global_key);
   console.log("xdddd");
  checksitekey(global_key);
}, 5000);





function checksitekey(data){
  if(data>1){
    chrome.runtime.sendMessage({notify: "Passed Splash"}, function(response) {
      console.log(response.passedQueue);
    });
  }
  else{
    console.log("lel");
  }
}


// chrome.runtime.sendMessage({notify: "Passed Splash"}, function(response) {
//   console.log(response.passedQueue);
// });
//
// setTimeout(function(){}, 3000);
// var sitekey = document.querySelector('[data-sitekey]')
// if(sitekey){
// console.log("Sitekey detected");
// }
// else{
//   console.log("ur a fgt");
// }
