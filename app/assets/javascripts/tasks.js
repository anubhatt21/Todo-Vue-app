
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Anu!',
      taskitems: [
        'Vaccum Living Room',
        'Complete HW',
        'Yada yada'
      ],
      newTask: ""
    }, 
    methods: {
      addTask: function() {
        if (this.newTask !== "") {
        this.taskitems.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});
