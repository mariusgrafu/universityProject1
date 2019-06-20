Array.from(document.getElementsByName("platform")).map( (el) => {
    el.onclick = () => {
        let val = el.value;
        let coverArt = document.getElementById("coverArt");
        if(val == `xbone`) {
            coverArt.src = `img/order/xbox.jpg`;
        }else {
            coverArt.src = `img/order/ps4.jpg`;
        }
    }
});

Array.from(document.getElementsByName("format")).map( (el) => {
    el.onclick = () => {
        let val = el.value;
        if(val == `physical`) {
            document.getElementById("physicalDetails").style.display = 'flex';
            document.getElementById("digitalDetails").style.display = 'none';
        }else {
            document.getElementById("physicalDetails").style.display = 'none';
            document.getElementById("digitalDetails").style.display = 'flex';
        }
    }
});

let form = document.getElementById("orderForm");

let placeOrder = (data) => {
    let bigScreen = document.createElement("div");
    bigScreen.className = 'bigScreenOv';
    let platformStr = (data.platform == 'ps4')?('PS4'):('XBOX ONE');
    let editionStr;
    switch(data.edition) {
        case 'special':
        editionStr = `Special Edition`;
        break;
        case 'ultimate':
        editionStr = `Ultimate Edition`;
        break;
        default:
        editionStr = `Standard Edition`;
    }
    let shopStr = (data.retailer == 'altex')?('Altex'):('Flanco');
    let placeStr = `Your order of <span>Red Dead Redemption II</span> 
    (<span>${editionStr}</span> for <span>${platformStr}</span>) has been placed at 
    <span>${shopStr}</span>.`;
    if(data.format == 'physical') {
        placeStr += `
        It will be delivered at ${data.shipping}
        ${(data.fastShipping?'(Fast Shipping is selected)':'')}
        .`;
    }else {
        placeStr += `
        You will receive an email at <span>${data.email}</span> with the 
        activation code.
        `;
    }
    bigScreen.innerHTML = `
    <div class="orderPlacedAnn">${placeStr}</div>
    `;

    bigScreen.onclick = () => {
        bigScreen.parentNode.removeChild(bigScreen);
        document.body.removeAttribute("fixed");
    }
    
    document.body.appendChild(bigScreen);
    document.body.setAttribute("fixed", true);
}

form.onsubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let data = {};
    data.platform = form.platform.value;
    data.edition = form.edition.value;
    data.retailer = form.retailer.value;
    data.format = form.format.value;

    let canDo = true;

    if(data.format == 'physical') {
        data.shipping = form.shipping.value;
        if(!data.shipping || !data.shipping.trim().length) {
            alert("you must enter a shipping address!"); 
            canDo = false;
        }   
        data.fastShipping = form.fastShipping.checked;
    }else {
        data.email = form.email.value;
        if(!data.email || !data.email.trim().length) {
            alert("you must enter an email address!"); 
            canDo = false;
        }  
    }

    if(canDo)
        placeOrder(data);
    
}