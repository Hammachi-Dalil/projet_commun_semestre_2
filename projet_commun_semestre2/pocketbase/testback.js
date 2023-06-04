import { allJoueur } from "./backend.mjs";

try {
    const ListeJoueur = await allJoueur() ;
    console.log(JSON.stringify(ListeJoueur, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }