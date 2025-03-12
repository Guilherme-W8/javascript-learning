import chalk from 'chalk';

// Callback: function passada para outra function como argumento
function executeTask(task, systemAction) {
    console.log(`[${chalk.green(task)}]\nWaiting user action...`);

    systemAction();
}

function taskStatus(){
    console.log('Task completed\n');
}

executeTask('Study Javascript for 2 hours', taskStatus);

// Callback: Criando callback dentro de um parameter
executeTask('Study Java Quarkus Framework', () => {
    console.log('System pausing Task...');
});