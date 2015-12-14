# Task Management App Using Angular.JS

## Introduction

Upon initially coming to the page, the user will be prompted to add a task to their list. Using the simple form provided, a user will provide a title for the task to be added and set a priority level for the task. This level ranges from low to high. They will also be able to set a category for the task (ie. Personal, Work, Educational, etc.) as well as add a broader description to their individual tasks. The user can then save the task into the Current Tasks table, which will persist through page loads, thanks to local storage in the BOM.

## Completing Tasks

Once the user has populated one or more tasks into the current task table, they will be able to edit the tasks details, view all of the metadata regarding a particular task - this is achieved by double clicking the task itself - or setting the task to a completed status. By clicking the green check button on the right hand side of the task, the task will be removed from the current tasks table, and stored into the completed tasks table.

Once a task has been set to completed, it no longer can be edited. However, if the task must be re-addressed, a user can click the orange reset button on the right hand side of the completed tasks table, and reset the completed status to false. This will allow the user to replace it as a current task, and now edit the task again.

These options are also available when in the detailed view modal.

## Deleting Tasks

A user is able to delete both current tasks, and completed tasks. This is accomplished by clicking the red X button on the right hand side of the table. This option is available on both tables as well as the detailed view modal.

Items deleted from either table will also be removed from local storage.


