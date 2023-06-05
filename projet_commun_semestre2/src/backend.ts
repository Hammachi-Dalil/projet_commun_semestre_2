import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

// définir les fonctions

export async function allJoueur() {
    const ListeJoueur = await pb.collection("joueur").getFullList() ;
    return ListeJoueur;
}

export async function allEquipe() {
    const ListeEquipe = await pb.collection("equipe").getFullList() ;
    return ListeEquipe;
}

export async function AllJoueurByEquipe(p){
    const sortedJoueurEquipe = await pb.collection('equipe').getFullList({
     filter: `nom = '${p}'`,
        expand: 'joueur',
    });
    return sortedJoueurEquipe;
}
    
