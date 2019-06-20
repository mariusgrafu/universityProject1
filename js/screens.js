let screens = [];

let generateScreensURLS = () => {
    screens = [];
    for(let i = 1; i <= 26; ++i) {
        screens.push(`https://www.rockstargames.com/reddeadredemption2/rockstar_games/r_d_r2_core/img/screenshots/${i}-full.jpg`);
    }
}

generateScreensURLS();

//console.log(JSON.stringify(screens));

let showBigScreen;

let refreshScreens = () => {
    let screensWrap = document.getElementById('screensWrap');
    screensWrap.innerHTML = ``;

    screens.map( (screen, i) => {
        let newFigure = document.createElement("figure");
        newFigure.innerHTML = `<img src="${screen}" alt="screen"/>`;
        newFigure.onclick = () => {
            showBigScreen(i);
        };
    
        screensWrap.appendChild(newFigure);
    });
}

showBigScreen = (i) => {
    let screen = screens[i];
    let bigScreen = document.createElement("div");
    bigScreen.className = 'bigScreenOv';
    bigScreen.innerHTML = `
    <img src="${screen}" />
    `;
    bigScreen.onclick = () => {
        selectedScreen = -1;
        bigScreen.parentNode.removeChild(bigScreen);
        document.body.removeAttribute("fixed");
    }
    
    document.body.appendChild(bigScreen);
    document.body.setAttribute("fixed", true);
}

refreshScreens();