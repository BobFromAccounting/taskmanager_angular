"use strict";
(function () {

    var app = angular.module("TasksApp", []);

    app.controller('TasksController', function() {

        this.savedTasks = localStorage.getItem('tasks');
        
        this.taskItem = (localStorage.getItem('tasks') !== null) ? JSON.parse(this.savedTasks) : null;

        this.savedCompletedTasks = localStorage.getItem('completed');
        
        this.tasks = [];
        
        this.completedTasks = [];

        this.newTask = {};

        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        this.priority = [
            {level: 'Low'},
            {level: 'Medium'},
            {level: 'High'}
        ];

        this.categories = [
            {name: 'Personal'},
            {name: 'Work'},
            {name: 'School'},
            {name: 'Cleaning'},
            {name: 'Other'}
        ];

        this.newTaskCategory = this.categories;

        this.today = new Date();

        this.addTask = function (addForm) {

            this.newTask = {
                id: this.tasks.length,
                title: this.newTask.title,
                details: this.newTask.details,
                category: this.newTask.category,
                priority: this.newTask.priority,
                date_created: this.today,
                date_modified: null,
                complete: false
            };

            this.tasks.push(this.newTask);

            this.newTask = {};

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            
            addForm.$setPristine();
            addForm.$setUntouched();

            $('#showToggle').hide();
        };


        this.editTask = function(id) {

            this.taskToEdit = {
                id: this.tasks[id].id,
                title: this.tasks[id].title,
                details: this.tasks[id].details,
                priority: this.tasks[id].priority.level,
                date_created: this.tasks[id].date_created,
                date_modified: this.today,
                category: this.tasks[id].category.name,
                complete: this.tasks[id].complete
            }

            this.closeViewTaskDetails();

            $('#editModal').modal('show');

        };

        this.saveEditedTask = function() {
            
            this.tasks[this.taskToEdit.id] = this.taskToEdit;

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            
            $('#editModal').modal('hide');

            this.viewTaskDetails(this.taskToEdit.id);
        };

        this.deleteTask = function(id) {
            if (confirm('Are you sure you want to remove this task?')) {
               this.tasks.splice(id, 1);
            }

            this.closeViewTaskDetails();
        };

        this.completeTask = function(id) {
            if ( ! this.tasks[id].complete) {
                this.tasks[id].complete = true;
            }

            this.completedTasks.push(this.tasks[id]);

            this.tasks.splice(id, 1);

            this.closeViewTaskDetails();
        };

        this.showForm = function() {
            $('#showToggle').show();
        };

        this.hideForm = function($event) {
            $event.preventDefault();
            $('#showToggle').hide();
        };

        this.viewTaskDetails = function(id) {
            this.taskToView = {
                id: this.tasks[id].id,
                title: this.tasks[id].title,
                details: this.tasks[id].details,
                priority: this.tasks[id].priority.level,
                date_created: this.tasks[id].date_created,
                date_modified: this.tasks[id].date_modified,
                category: this.tasks[id].category.name,
                complete: this.tasks[id].complete
            };

            $('#viewModal').modal('show');
        };

        this.viewCompletedTaskDetails = function(id) {
            this.taskToView = {
                id: this.completedTasks[id].id,
                title: this.completedTasks[id].title,
                details: this.completedTasks[id].details,
                priority: this.completedTasks[id].priority.level,
                date_created: this.completedTasks[id].date_created,
                date_modified: this.completedTasks[id].date_modified,
                category: this.completedTasks[id].category.name,
                complete: this.completedTasks[id].complete
            };

            $('#viewModal').modal('show');
        }

        this.closeViewTaskDetails = function() {
            $('#viewModal').modal('hide');
        };
    });
})();