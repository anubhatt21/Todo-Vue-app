
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
      }, 
      deleteTask: function(inputItem) {
      // console.log("deleting item", inputItem);
        var index = this.taskitems.indexOf(inputItem);
        this.taskitems.splice(index, 1);
      }
    }
  });
});
