//alert('Salut les gars, comment allez vous');
//console.log(2+37);

//  let nom='Cheville';
//  let prenom='moustique'

//  nom_prenom=nom+' '+prenom;
//  console.log(nom);
//  console.log(prenom);
//  console.log(nom_prenom);

//  let nom_complet=`il s appelle ${nom}, et aussi ${prenom}`;
//  console.log(nom_complet);

//  let email = 'ekeuviny@gmail.com';
//  let longueur = email.length;

//  console.log(longueur);

//  //let balis_Html= document.querySelector('.lobo');

// //balis_Html.style.background='yellow';

// //document.querySelector('div').style.borderRadius='300px';

// const container= document.querySelector('.lobo');

// const btn1= document.querySelector("#btn-1");
// const btn2= document.getElementById("btn-2");
// const reponse= document.querySelector('p');

// container.addEventListener('click', () =>{
//     //container.classList.remove("lobo");
//     container.classList.toggle("bedel");
// });

// btn1.addEventListener('click',() =>{

//     reponse.classList.add("down");
//     reponse.style.background='green';
// } );

// btn2.addEventListener('click', () =>{
//     reponse.classList.add("down");
//     reponse.style.background='red';
// });

// //-------------------------------------------------------------------------------------------------------
// // MouseEvenements ("pour les mouvements de la souris")

// const mouse= document.querySelector('.move');
// const yep= document.querySelector('h1');

// //mouse.addEventListener("mousemove", () =>{
//      //console.log("yes, i am !");
// //})

// // windows est au dessus de l element document.
// window.addEventListener('mousemove', (e) =>{
//     mouse.style.left=e.pageX +'px';
//     mouse.style.top=e.pageY+'px';
// });

// mouse.addEventListener("mousedown", () =>{
//     mouse.style.transform='scale(2) translate(-25%,-25%)';
// });

// mouse.addEventListener("mouseup", () =>{
//      //mouse.style.transform='scale(0.7,3) translate(-50%, -50%)';
//     mouse.classList.add('luw');
// });

// btn2.addEventListener("mouseenter", () =>{
//     btn2.style.background='rgba(30, 17, 30)';
// });

// container.addEventListener("mouseout", () =>{
//     container.style.background='blue';
// });

// yep.addEventListener("mouseover", () =>{
//     yep.style.transform='rotate(3deg)';
// });

// const trues= document.querySelector('.truss');
// const keyContainer=document.getElementById('key');

// document.addEventListener('keypress', (e) =>{
//     keyContainer.textContent=e.key;

//     if (e.key==='j'){
//         trues.style.background='green';
//         btn1.style.background='green';
//         btn2.style.background='green';
//     } else if(e.key==='k') {
//         trues.style.background='yellow';
//         btn1.style.background='yellow';
//         btn2.style.background='yellow';
//     } else{
//         trues.style.background='black';
//         btn1.style.background='black';
//         btn2.style.background='black';
//     }

    
// });

// const navi=document.querySelector('nav');

// navi.addEventListener('sroll', ()=>{
//     console.log('text d instrusion reusir !');
// })



const salutation= () =>{
    let longueur= 3;
    let largeur= 4;
    return longueur*largeur;
}

const resultat =salutation();
console.log(`la surface de mon rectangle est : ${resultat}`);

const etudiants ={
    nom: 'boris',
    prenom: 'Presnel',
    age: 13 ,
    profession: 'eleve',
    blog:['banane' , 'papaye', 'goyave', 'trusnet'],
}

etudiants.nom= 'Etike';
etudiants.prenom= 'boris';
etudiants.blog[0]= 'mangue';



  const blog= ['banane' , 'papaye', 'goyave', 'trusnet'];

    blog.forEach( (e) =>{
        console.log(e);
    });


const apprendre= [
    {
      id: 2,
      titre: 'Les bases du js',
      contenu: 'tout savoir sur les bases du js',
      likes: 10,
    },

    {
        id: 4,
        titre: 'Les bases du html',
        contenu: 'tout savoir sur les bases du html',
        likes: 12,
      },

      {
        id: 6,
        titre: 'Les bases du css',
        contenu: 'tout savoir sur les bases du css',
        likes: 14,
      },

      {
        id: 8,
        titre: 'Les bases de node',
        contenu: 'tout savoir sur les bases de node',
        likes: 16,
      }
]

 
apprendre.forEach( (t) =>{
    console.log(t.id, t.titre, t.contenu);
}

)


