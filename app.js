/* Le module express, facilite la redactions et l'implementations de certaines  
 operations et les rends plus lisibles et plus simplifiee.*/


let redly = require('express');         /* Import du module express et nous le stockons dans une variable*/       

let didly = redly()                     /* Appel(sous forme de fonction) et stockage une fois de plus de la variable contenant le module express*/

didly.set('view engine', 'ejs')         /* Permet de specifier que, les elements contenues dans express doivent etre des view engine,
                                            et de facto, nous appelons egalement le module ejs*/

didly.listen(3000);

didly.set('views', './mesvues')

didly.use(redly.static('finel'));

didly.get('/', (req,res)=>{
    // let maf =[
    //     {
    //         titre: "Mon premier tuto en NodeJs",
    //         bref: "Commencez et faites votre premier pas avec NodeJs",
    //         desc: " NodeJs est fondamentalement et initialemnet tres important dans la communaute de developpeur web backend Javascript",
    //     },

    //     {
    //         titre: "Mon premier tuto en ReactJs",
    //         bref: "Commencez et faites votre premier pas avec ReactJs",
    //         desc: " ReactJs est fondamentalement et initialemnet tres important dans la communaute de developpeur web backend Javascript",
    //     },

    //     {
    //         titre: "Mon premier tuto en VueJs",
    //         bref: "Commencez et faites votre premier pas avec VueJs",
    //         desc: " VueJs est fondamentalement et initialemnet tres important dans la communaute de developpeur web backend Javascript",
    //     },

    // ] 
     res.render('Accueil') //{blogs: maf})                 /* render est possible grace a l'omportation de ejs*/
})

didly.get('/inscription', (req,res)=>{
    // let heybro = 'apropos'
    res.render('inscription') //, {titre: heybro})
})

didly.get('/preinscription', (req,res)=>{
    // let heybro = 'contacts'
    res.render('preinscription') //, {titre: heybro})
})

didly.get('/login', (req,res)=>{
    // let heybro = 'contacts'
    res.render('login') //, {titre: heybro})
})

didly.get('/page1', (req,res)=>{

   
    // let heybro = 'contacts'
    res.render('page1') //, {titre: heybro})
})

didly.get('/page2', (req,res)=>{
    // let heybro = 'contacts'
    res.render('page2') //, {titre: heybro})
})

didly.get('/page3', (req,res)=>{
    // let heybro = 'contacts'
    res.render('page3') //, {titre: heybro})
})

didly.get('/inscription2', (req,res)=>{
    // let heybro = 'contacts'
    res.render('inscription2') //, {titre: heybro})
})

didly.get('/mesdroits', (req,res)=>{
    // let heybro = 'contacts'
    res.render('droit') //, {titre: heybro})
})

didly.get('/apropos-de-nous', (req,res)=>{
    let heybro = 'Apropos'
    res.redirect('/', {titre: heybro});
})

didly.use((req,res)=>{
    let heybro = '404'
    res.render('404', {titre: heybro})
})