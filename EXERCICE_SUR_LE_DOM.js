document.querySelector('#para').innerHTML="Voici le paragraphe demandé".toLocaleUpperCase()
document.querySelector('#para').style.color='blue'
document.getElementById('menu').innerHTML = document.getElementsByTagName('ul')[0]. innerHTML

function coloRouge()
{
    document.getElementById('p1').style.color='red';
}

function coloBleu()
{
    document.getElementById('p2').style.color='blue';
}
 
function couleur(coul)
{
    document.getElementById('par2').style.color=coul;
}
