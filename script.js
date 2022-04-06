const menu__toggle = document.querySelector('.menu__toggle');
const navigation = document.querySelector('.navigation');

menu__toggle.onclick = function(){
    navigation.classList.toggle('active');
}
