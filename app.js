
// const desierto = new Audio('sonidos/desierto.ogg');
// const selva = new Audio('sonidos/selva.ogg');
// const marino = new Audio('sonidos/marino.ogg');

// document.addEventListener('keypress', keyboard);
// function keyboard(){
//     if (event.code === 'KeyA'){
//         console.log("push a");
//         selva.currentTime = 3.262167
//         marino.currentTime = 3.002167
//         desierto.play();


//     } else if (event.code === 'KeyS'){
//         console.log("push s");
//         desierto.currentTime = 3.882167
//         marino.currentTime = 3.002167
//         selva.play();

//     } else if (event.code === 'KeyD'){
//         console.log("push d");
//         desierto.currentTime = 3.882167
//         selva.currentTime = 3.262167
//         marino.play();

//     } else if (event.code === 'KeyW'){
//         console.log("push w");
//     }
// }

// document.addEventListener('keypress', instructions);

// const instruicionesR_O = new Audio('sonidos/instruccionesR_O.ogg');
// const opcionesInit = new Audio('sonidos/opcionesInit.ogg')

// function instructions(){
//     if (event.code === 'Backquote'){
//         instruicionesR_O.play();
//     }else if (event.code === 'KeyR'){
//             console.log('R');
//             instruicionesR_O.play();
//             console.log(localStorage.getItem("insignias"));
//             let badges = localStorage.getItem("insignias");
//             badges = JSON.parse(badges);
//             console.log(badges[1]);
//             badges.push(3);
//             localStorage.setItem("insignias",JSON.stringify(badges));
            
        
//     } else if (event.code === 'KeyO'){
//             console.log('O');
//             opcionesInit.play();

//     } else if (event.code === 'KeyI'){
//         window.location="index2.html";

//     } else if (event.code === 'KeyQ'){
//         console.log('quitar');
//         instruicionesR_O.currentTime = instruicionesR_O.duration
//         opcionesInit.currentTime = opcionesInit.duration
//     }
// }


