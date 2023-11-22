const navMore = document.querySelector('.nav-more')
const menuMore = document.querySelector('.menu-more');

const navLang = document.querySelector('.nav-language');
const menuLang = document.querySelector('.menu-lang');

const navSearch = document.querySelector('.nav-search');
const imputSearch = document.querySelector('.imput-search');

navMore.addEventListener('click', showMenuMore);

navLang.addEventListener('click', showMenuLang);

navSearch.addEventListener('click', showImputSearch)

function showMenuMore(){
    const menuLangClosed = menuLang.classList.contains('inactive')
    const imputSearchClosed = imputSearch.classList.contains('inactive')

    if(!menuLangClosed || !imputSearchClosed){
        menuLang.classList.add('inactive')
        imputSearch.classList.add('inactive')
    }
    menuMore.classList.toggle('inactive')
}

function showMenuLang(){
    const menuMoreClosed = menuMore.classList.contains('inactive')
    const imputSearchClosed = imputSearch.classList.contains('inactive')

    if(!menuMoreClosed || !imputSearchClosed){
        menuMore.classList.add('inactive')
        imputSearch.classList.add('inactive')
    }
    menuLang.classList.toggle('inactive')
}

function showImputSearch(){
    const menuLangClosed = menuLang.classList.contains('inactive')
    const menuMoreClosed = menuMore.classList.contains('inactive')

    if(!menuMoreClosed || !menuLangClosed){
        menuMore.classList.add('inactive')
        menuLang.classList.add('inactive')
    }
    imputSearch.classList.toggle('inactive')
}
