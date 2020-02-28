document.querySelector('#para').innerHTML="salut! Moi c'est anthelme et c'est ma premier page javascript soyez indulgent".toLocaleUpperCase()
document.querySelector('#para').style.color="blue"; // mettre le texte en couleur bleue
// document.getElementById('bjr').innerHTML = document.getElementsByTagName('ul')[0]. innerHTML // afficher le menu dans le paragraphe

function colorRouge()  // pour mettre une couleur rouge dans le paragraphe parrainrouge au click du bouton  lorsque j'appelle la fonction dans le bouton
{
    document.querySelector('#parain').style.color="red";
}


function colorBleu()   // pour mettre une couleur bleu dans le paragraphe anthelme au click du bouton bleu lorsque j'appelle la fonction dans le bouton
{
    document.querySelector('#anthelme').style.color="blue";
}

function color(c) // pour changer la couleur d'un paragraphe en foncion ds differents boutons
{
    document.querySelector('#nan').style.color=c;
}

//Afficher un massage a l'affiche de la page
// function load()
// {
//     alert('voila comment onload fonctionne')
// }

//comment déactiver un bouton
function desactiver()
{
    document.getElementById("desa").disabled = true
}

//comment activer un bouton id=desa 
function activer()
{
    document.getElementById("desa").disabled = false
}

// afficher une image dès l'ouverture de la page

function imag()
{
    alert('Belle photo non ?')
}