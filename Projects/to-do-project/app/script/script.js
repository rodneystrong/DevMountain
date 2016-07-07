$('document').ready(function() {

  var $newList = $('#newList');
  var $newTaskForm = $('#newTaskForm');
  var $newItemInput = $('#newItemInput');
  var $saveNewItem = $('#saveNewItem');
  var $cancelTodo = $('#cancel');
  var $addTodo = $('#add-todo');

  $newTaskForm.hide();

  var taskList = [];

  var Task = function(task) {
    this.task = task;
    this.id = 'new';
  };

  var addTask = function(task) {
    if(task) {
      task = new Task(task);
      taskList.push(task);
      $newItemInput.val('');

      $newList.append(
        '<a href="#finish" class="" id="item">' +
        '<li class="list-group-item">' +
        '<h3>' + task.task + '</h3>'+
        '<span class="arrow pull-right">' +
        '<i class="glyphicon glyphicon-arrow-right">' +
        '</span>' +
        '</li>' +
        '</a>'
      );

      $newTaskForm.slideToggle('fast', 'linear');
    }
  };

  $saveNewItem.on('click', function() {
    e.preventDefault();
    var task = $newItemInput.val().trim();
    addTask();
  });

  $addTodo.on('click', function() {
    $newTaskForm.fadeToggle('fast', 'linear');
  });

  $cancelTodo.on('click', function() {
    $newTaskForm.fadeToggle('fast', 'linear');
  });


});
