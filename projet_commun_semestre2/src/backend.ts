
import PocketBase from 'pocketbase'
import { Collections, type EquipeResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');

// définir les fonctions

export async function allJoueur() {
    const ListeJoueur = await pb.collection("joueur").getFullList() ;
    return ListeJoueur;
}

export async function allEquipe() {
    const ListeEquipe = await pb.collection("equipe").getFullList() ;
    return ListeEquipe;
}

export async function AllJoueurByEquipe(p:string){
    const sortedJoueurEquipe = await pb.collection('equipe').getFullList({
     filter: `nom = '${p}'`,
        expand: 'joueur',
    });
    return sortedJoueurEquipe;
}

export async function JoueurById(id:string) {
    const unJoueur = await pb.collection('joueur').getOne(id);
    return unJoueur;
}

export async function EquipeById(id:string) {
    const rep = await pb.collection(Collections.Equipe).getOne<EquipeResponse>(id, {expand:'joueur_link'});
    return rep;
}