const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear Tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tarea(s)`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar Tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log("=============================".green);
    console.log("    Selecciona una Opción    ".green);
    console.log("=============================\n".green);

    const { opcion } = await inquirer.prompt( preguntas );

    return opcion;

}

const inquirerPausa = async () => {

    const pausa = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]
    
    console.log('\n');
    await inquirer.prompt( pausa );

}

module.exports = {
    inquirerMenu,
    inquirerPausa
}