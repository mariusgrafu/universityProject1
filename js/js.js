window.onload = () => {
    
    let navItems = Array.from(document.getElementById("navbar").children);
    navItems.map( (navItem) => {
        if(navItem.hasAttribute('active')){
            navItem.children[0].style.backgroundImage = `url(img/menubg.png?v=${Math.random()})`;
        }else{
            navItem.onmouseenter= function() {
                this.children[0].style.backgroundImage = `url(img/menubg.png?v=${Math.random()})`;
            }
        }
    });

    document.getElementById('mobileTog').onclick = () => {
        let navItems = document.getElementById("navbar").innerHTML;
        let mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobileMenuCont';
        mobileMenu.innerHTML = navItems;

        let closeBtn = document.createElement('div');
        closeBtn.className = 'mobCloseBtn';

        closeBtn.innerText = 'close';

        closeBtn.onclick = () => {
            mobileMenu.parentNode.removeChild(mobileMenu);
            document.body.removeAttribute("fixed");
        }

        mobileMenu.appendChild(closeBtn);

        document.body.appendChild(mobileMenu);
        document.body.setAttribute("fixed", true);
    }

}