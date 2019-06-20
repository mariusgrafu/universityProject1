let trailers = [
    {
        src : `https://videos.rockstargames.com/v3/reddeadredemption2-fghtffyrdmns-en_us-1080p.mp4`,
        screen : `img/trailers/1.jpg`,
        title : `trailer #1`,
        descr : `Red Dead Redemption 2 is an epic tale 
        of life in America’s unforgiving heartland. 
        Coming October 26, 2018.`
    },
    {
        src : `https://videos.rockstargames.com/v3/reddeadredemption2-ledger-en_us-1080p.mp4`,
        screen : `img/trailers/2.jpg`,
        title : `trailer #2`,
        descr : `
        The story of outlaw Arthur Morgan and the 
        Van der Linde gang as they rob, fight and 
        steal their way across the vast and rugged 
        heart of America in order to survive. Coming 
        October 26, 2018 to PlayStation 4 and Xbox One systems.`
    },
    {
        src : `https://videos.rockstargames.com/v3/reddeadredemption2-passintomyth-en_us-1080p.mp4`,
        screen : `img/trailers/3.jpg`,
        title : `trailer #3`,
        descr : `America, 1899. The end of the wild west 
        era has begun as lawmen hunt down the last remaining 
        outlaw gangs. Those who will not surrender or succumb 
        are killed.
        From the creators of Grand Theft Auto V and Red Dead 
        Redemption, Red Dead Redemption 2 is an epic tale of 
        life in America at the dawn of the modern age. Coming 
        October 26, 2018 to PlayStation 4 and Xbox One systems.`
    },
    {
        src : `https://videos.rockstargames.com/v3/reddeadredemption2-gp1tal-en_us-1080p.mp4`,
        screen : `img/trailers/4.jpg`,
        title : `official gameplay video`,
        descr : `Captured entirely from in-game footage, 
        watch this introduction to Red Dead Redemption 2's 
        gameplay in 4K. Red Dead Redemption 2 is coming 
        October 26, 2018 to PlayStation 4 and Xbox One 
        systems. Pre-order now.`
    },
    {
        src : `https://videos.rockstargames.com/v3/reddeadredemption2-rasgp2-en_us-1080p.mp4`,
        screen : `img/trailers/5.jpg`,
        title : `official gameplay video part 2`,
        descr : `Red Dead Redemption 2 is an epic tale of outlaw 
        life that seamlessly blends story with action, and 
        exploration with choice - all under the constant 
        threat of danger. Coming October 26, 2018 to 
        PlayStation 4 and Xbox One systems.`
    },
    {
        src : `https://videos.rockstargames.com/v3/reddeadredemption2-launchutl26-en_us-1080p.mp4`,
        screen : `img/trailers/6.jpg`,
        title : `launch trailer`,
        descr : `Red Dead Redemption 2, an epic tale of life in 
        America at the dawn of the modern age, arrives for 
        PlayStation 4 and Xbox One on October 26th.`
    }
];

let currentTrailer = 0;

let setCurrentTrailer, setTrailerList, refreshTrailers;

setCurrentTrailer = () => {
    let currentTrailerWrap = document.getElementById("currentTrailer");
    let trailer = trailers[currentTrailer];

    currentTrailerWrap.innerHTML = `
    <video controls name="media" >
    <source src="${trailer.src}" type="video/mp4">
    </video>
    <h2>${trailer.title}</h2>
    <p>${trailer.descr}</p>
    `;
}

setTrailerList = () => {
    let trailersWrap = document.getElementById("trailersWrap");
    trailersWrap.innerHTML = ``;
    trailersHTML = ``;

    trailers.map( (trailer, i) => {
        let newFigure = document.createElement('figure');
        if(i == currentTrailer) {
            newFigure.setAttribute("active", true);
        }
        newFigure.innerHTML = `
        <img src="${trailer.screen}" src="${trailer.title}" />
        <figcaption>${trailer.title}</figcaption>
        `;

        newFigure.onclick = () => {
            currentTrailer = i;
            refreshTrailers();
        }

        trailersWrap.appendChild(newFigure);
    });
}

refreshTrailers = () => {
    setCurrentTrailer();
    setTrailerList();
}

refreshTrailers();
