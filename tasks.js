// simple task manager with add, remove, filter functions

function tasks (){
    const tasklog = [];

    function addTask(...task){
        return tasklog.push(...task);
    }

    function removeTask(task){
        if (!tasklog.includes(task)){
            console.log("No such task");
        }
        else {
            const indx = tasklog.indexOf(task);
            return tasklog.splice(indx, 1)
        }
    }

    function filterTask(task){
        if (!tasklog.includes(task)){
            console.log("No such task");
        }
        else{
            return `${task} still on your list`
        }
    }

    function printTask(){
        return tasklog;
    }

    return {addTask, printTask, removeTask, filterTask};
}

const tsk = tasks()
const task1 = tsk.addTask("go to sleep", "wake up", "eat", "code");
console.log(tsk.printTask());
const rmvTask = tsk.removeTask("go to sleep");
const rmvTask1 = tsk.removeTask("sleep");
console.log(tsk.printTask());
console.log(tsk.filterTask("code"));

