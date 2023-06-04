import { allJoueur } from "./backend.mjs";
import { allEquipe } from "./backend.mjs";
import { AllJoueurByEquipe } from "./backend.mjs";


/*
try {
    const ListeJoueur = await allJoueur() ;
    console.log(JSON.stringify(ListeJoueur, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }
*/
try {
    const ListeEquipe = await allEquipe() ;
    console.log(JSON.stringify(ListeEquipe, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }

/*
try {
    const a = await AllJoueurByEquipe('equipe 2');
    console.log(JSON.stringify(a,null,2));
} catch (e) {
    console.error(e);
}
*/