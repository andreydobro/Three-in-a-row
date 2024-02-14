// Конфигурация игры
let  = {

    containerColorBg: '#A2A2A2',
    contentColorBg: '#D9D9D9',

    rows: 6,
    colums: 7,

    gemSize: 64,

    colorCoin: [
        
    ],

    offsetBorder: 10,
    borderRadios: 8,

    gemClass:"gem",
	gemIdPrefix: "gem",
	gameStates: ["pick", "switch", "revert", "remove", "refill"],
	gameState: "",
	
	movingItems: 0,

	countScore: 0
}

// создаем разметку странице
let components = {
    container: document.createElement('div'),
    content: document.createElement('div'),
    wraper: document.createElement('div'),
    cursor: document.createElement('div'),
    score: document.createElement('div'),
    gems: new Array(),
}


function initGame() {
    document.body.style.margin = '0px';
    createPage();
    createContent();
    createWraper();
    createCursor();
    createScore();

}