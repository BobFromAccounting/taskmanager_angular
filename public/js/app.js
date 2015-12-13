"use strict";
(function () {

    var app = angular.module("TasksApp", []);

    app.controller('TasksController', function() {

        this.saved = localStorage.getItem('tasks');
        
        this.tasks = [];
        
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
                complete: false
            }

            $('#myModal').modal('show');
        };

        this.saveEditedTask = function() {
            
            this.tasks[this.taskToEdit.id] = this.taskToEdit;

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            
            $('#myModal').modal('hide');
        };

        this.deleteTask = function(id) {
            if (confirm('Are you sure you want to remove this task?')) {
               this.tasks.splice(id, 1);
            }
        };


    });
})();