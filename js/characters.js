let characters = [
    {
        name : `Dutch Van Der Linde`,
        quote : `They're chasing us hard, because we represent everything 
        that they fear`,
        descr : `The leader of a sizeable gang of outlaws and misfits. 
        Idealistic, anarchic, charismatic, well-read, well-lived, but 
        possibly starting to unravel under the pressures of the 
        encroaching modern world.`,
        bg : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/bg/6ca99fe75880d3430c9721faf495499d.jpg`,
        img : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/characters/e0d4a049711def6b9a2c0ace29adda0a.png`
    },
    {
        name : `Hosea Matthews`,
        quote : `I wish I had acquired wisdom at less of a price`,
        descr : `A master con artist, gentleman and thief, Hosea has been 
        Dutch's closest friend and right-hand man for over twenty years. 
        Intelligent and quick-witted, he can talk his way into, or out of, 
        just about anything.`,
        bg : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/bg/50faed4d14fea3ad675cdea43884604d.jpg`,
        img : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/characters/c123df692729d19cecd81952e0490b36.png`
    },
    {
        name : `Arthur Morgan`,
        quote : `We're thieves in a world that don't want us no more`,
        descr : `Dutch's most dependable and capable enforcer since he was a boy, 
        the outlaw life is all Arthur has ever known. Sharp, cool-headed, and 
        ruthless, but with his own sense of honor. A man who gets the job done.`,
        bg : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/bg/d1ed10d6e51545dc134f62a735bb42b4.jpg`,
        img : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/characters/68c07fe236b1b2a3a7548735eb629ae1.png`
    },
    {
        name : `Leopold Strauss`,
        quote : `It's a nasty world out there, and it's catching up with us...`,
        descr : `Originally hailing from Austria, Herr Strauss is responsible for 
        keeping the gang’s books and running their money lending operation. 
        A serious, somewhat shifty and unemotional man, he has all the qualities 
        a loan shark needs.`,
        bg : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/bg/d1ed10d6e51545dc134f62a735bb42b4.jpg`,
        img : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/characters/82a8a73a56642827aedf48aabc3129ec.png`
    },
    {
        name : `Pearson`,
        quote : `The people are happy and well fed. I think perhaps we'll be ok`,
        descr : `The camp’s butcher and cook, Pearson served a short stint in 
        the navy that he likes to talk about at length. A loud, jolly degenerate 
        who is somewhat in denial about the turn his life has taken.`,
        bg : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/bg/ef71cff452329b86a47bbe0e77077863.jpg`,
        img : `https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/characters/f74ff63b1ee8fd0b095fdb4d3caec310.png`
    }
];

let tableChars = [
    {
        img : `https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/buddyiconsconavatars/rdr2_dutch_van_der_linde_256x256.jpg`,
        name : `Dutch Van Der Linde`,
        role : `Co-Founder`
    },
    {
        img : `https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/buddyiconsconavatars/rdr2_hosea_matthews_256x256.jpg`,
        name : `Hosea Matthews`,
        role : `Co-Founder`
    },
    {
        img : `https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/buddyiconsconavatars/rdr2_arthur_morgan_256x256.jpg`,
        name : `Arthur Morgan`,
        role : `Second in Command`
    },
    {
        img : `https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/buddyiconsconavatars/rdr2_leopold_strauss_256x256.jpg`,
        name : `Leopold Strauss`,
        role : `Bookkeeping`
    },
    {
        img : `https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/buddyiconsconavatars/rdr2_pearson_256x256.jpg`,
        name : `Pearson`,
        role : `Cook`
    }
];

let renderChars = () => {
    let charsWrap = document.getElementById("charsWrap");
    charsWrap.innerHTML = ``;

    characters.map( (character) => {
        let newArt = document.createElement("article");
        newArt.style.backgroundImage = `url(${character.bg})`;
        newArt.innerHTML = `
        <img src="${character.img}" alt="${character.name}"/>
        <div class="charDetails">
            <h1>${character.name}</h1>
            <q>${character.quote}</q>
            <p>${character.descr}</p>
        </div>
        `;

        charsWrap.appendChild(newArt);
    });

    let tableCont = document.createElement('div');
    tableCont.className = `charTableCont`;

    let table = document.createElement(`table`);
    table.innerHTML = `
    <tr>
        <th>picture</th>
        <th>name</th>
        <th>gang role</th>
    </tr>
    `;

    tableChars.map( (ch) => {
        table.innerHTML += `
        <tr>
            <td><img src="${ch.img}" /></td>
            <td>${ch.name}</td>
            <td>${ch.role}</td>
        </tr>
        `;
    });

    tableCont.appendChild(table);

    charsWrap.appendChild(tableCont);
}

renderChars();