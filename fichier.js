// document.querySelector('#para').innerHTML="salut! Moi c'est anthelme et c'est ma premier page javascript soyez indulgent".toLocaleUpperCase()
// document.querySelector('#para').style.color="blue"; // mettre le texte en couleur bleue
//  document.getElementById('bjr').innerHTML = document.getElementsByTagName('ul')[0]. innerHTML // afficher le menu dans le paragraphe. Ici j'ai tager 'ul' car il est l'element parent

// function colorRouge()  // pour mettre une couleur rouge dans le paragraphe parrainrouge au click du bouton  lorsque j'appelle la fonction dans le bouton
// {
//     document.querySelector('#parain').style.color="red";
// }


// function colorBleu()   // pour mettre une couleur bleu dans le paragraphe anthelme au click du bouton bleu lorsque j'appelle la fonction dans le bouton
// {
//     document.querySelector('#anthelme').style.color="blue";
// }

// function color(c) // pour changer la couleur d'un paragraphe en foncion ds differents boutons
// {
//     document.querySelector('#nan').style.color=c;
// }

//Afficher un massage a l'affiche de la page
// function load()
// {
//     alert('voila comment onload fonctionne')
// }

//comment déactiver un bouton
// function desactiver()
// {
//     document.getElementById("desa").disabled = true
// }

//comment activer un bouton id=desa 
// function activer()
// {
//     document.getElementById("desa").disabled = false
// }

// LES ADDEVENTLISTENER avec click mouseover et recuperer une valeur avec un input

// afficher un message dès le premier click de la page

// let el = document.getElementById("palu");
// el.addEventListener('mouseover', function(){
//     alert("Si vous voyez ce message c'est que vous est contaminé par le paludisme");
// })

// let vs = document.getElementById('msg')

// vs.addEventListener('click', function(){
//     let nom = prompt("Votre nom")
//     let age = prompt("Age");
//     vs.innerHTML="BIENVENU "+nom+ "vous avez "+age; 
// })

// let nom = document.getElementById('nom');
// let age = document.getElementById('age')
// let btn = document.getElementById('bt')
// btn.addEventListener('click',function()
// {
//     let recupNom = nom.value;
//     let recupAge =age.value;
    
//     document.getElementById('inp').innerHTML="Bienvenu "+recupNom+ " vous avez "+recupAge+ " ans n'est ce pas ?"
    
// })

//setAttribut changer un input en un bouton

// let va = document.getElementsByTagName('input')[2];
// va.addEventListener('click', function()
// { 
//     va.setAttribute("type", "button");
//     va.value="NOM";
    
// })
var alum = false;
let amp = document.getElementsByTagName('img')[0];
var btn = document.getElementById('btn');
btn.addEventListener('click', function()
{   
    if(!alum)
    {
        amp.setAttribute("src","images/pic_bulbon.gif")
        alum = true;
    }
    else{
        amp.setAttribute("src","images/pic_bulboff.gif")
        alum = false;
    }
    
}
)


