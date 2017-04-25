
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Anu!',
      taskitems: [
        {task: 'Vaccum Living Room', completed: false},
        {task: 'Complete HW', completed: false},
        {task: 'Yada yada', completed: false}
      ],
      newItemTask: "",
      newItemCompleted: ""
    },
    methods: {
      toggleStatus: function(inputItem) {
        inputItem.completed = !inputItem.completed;
      },
      addItem: function() {
        this.taskitems.push({task: this.newItemTask, completed: false});
        this.newItemTask = "";
        this.newItemCompleted = "";
      }, 
      deleteItem: function(inputItem) {
      // console.log("deleting item", inputItem);
        var index = this.taskitems.indexOf(inputItem);
        this.taskitems.splice(index, 1);
      }
    }
  });
});
