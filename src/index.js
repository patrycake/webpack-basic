import './style.css';
import {
    homeComp,
    contactComp,
    menuComp
} from './components';



(() => {
    console.log("index.js console!");
    const navBarDiv = document.createElement('div');
    const navBar = document.createElement('nav');
    const navBarList = document.createElement('ul');
    const navBarTabHome = document.createElement('li');
    const navBarTabContact = document.createElement('li');
    const navBarTabMenu = document.createElement('li');

    navBarTabHome.innerText = "Home";
    navBarTabContact.innerText = "Contact";
    navBarTabMenu.innerText = "Menu";

    navBarTabHome.addEventListener('click', function () {
        tabClickListener(homeComp)
    })
    navBarTabContact.addEventListener('click', function () {
        tabClickListener(contactComp)
    })
    navBarTabMenu.addEventListener('click', function () {
        tabClickListener(menuComp)
    })

    navBarList.classList.add('narbar-ol');
    navBarDiv.classList.add('navbar-container');

    navBarList.appendChild(navBarTabHome)
    navBarList.appendChild(navBarTabContact)
    navBarList.appendChild(navBarTabMenu)

    navBar.appendChild(navBarList)
    navBarDiv.appendChild(navBar)

    console.log("navbar added");
    console.log(document.getElementsByName('header'))
    document.getElementById('header').appendChild(navBarDiv);
    document.getElementById('page-content').appendChild(homeComp())

})();

function tabClickListener(comp) {
    document.getElementById("page-content").innerHTML = "";
    document.getElementById('page-content').appendChild(comp())

}