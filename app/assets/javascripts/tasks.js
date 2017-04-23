
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Anu!',
      taskitems: [
        'Vaccum Living Room',
        'Complete HW',
        'Yada yada'
      ]
    }
  });
});
