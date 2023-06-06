import PocketBase from 'pocketbase';
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

export async function AllJoueurByEquipe(p){
    const sortedJoueurEquipe = await pb.collection('equipe').getFullList({
     filter: `nom = '${p}'`,
        expand: 'joueur',
    });
    return sortedJoueurEquipe;
}
    
export async function login() {
    await pb.collection('users').authWithPassword(document.getElementById("login").value,
    document.getElementById("passwd").value);
}


export async function register() {
      await pb.collection('users').create({
        email: document.getElementById("login").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: document.getElementById("name").value,
      });
    }


export async function reset_password() {
      await pb.collection('users').requestPasswordReset(document.getElementById("login").value);
    }

    