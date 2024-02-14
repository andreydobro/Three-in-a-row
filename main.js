// Конфигурация игры
let config = {

    // containerColorBg: ('#00C1FE', '#0375FA'),
    containerColorBg: `linear-gradient(45deg, #00C1FE, #0375FA)`,
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


initGame();

function initGame() {
    document.body.style.margin = '0px';
    createPage();
    createContent();
    createWraper();
    createCursor();
    createScore();
}

function createPage() {
    components.container.style.background = config.containerColorBg;
    components.container.style.height = '100vh';
    components.container.style.overflow = 'hiden';
    components.container.style.display = 'flex';
    components.container.style.alignItems = 'center';
    components.container.style.justifyContent = 'center';

    document.body.append(components.container);
}