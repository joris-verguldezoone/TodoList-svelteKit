import { json } from '@sveltejs/kit';
import { writable } from 'svelte/store';



    const userStore = writable({
        users: null,
        user: {
            email:"",
            firstname:"",
            lastname:"",
        },
        newUser: {
            email:"",
            firstname:"",
            lastname:"",
            password:"",
            confirm_password:""
        },
        signIn: {
            email: "",
            password: "",
        }
    });

    async function register(newUser) {
        console.log(newUser, 'coucou from register')
        let formData = new FormData();
        formData.append("user", JSON.stringify(newUser));
        let result = await fetch('http://localhost/backend_php/traitement.php', {
            method: 'POST',
            body: formData,
            mode:'no-cors'
        });
        console.log(result, 'register result');

    }

    async function connexion(newUser) {
        console.log(newUser, 'coucou from signin')
        let formData = new FormData();
        formData.append("signin", JSON.stringify(newUser));
        let response = await fetch('http://localhost/backend_php/traitement.php?signin', {
            method: 'POST',
            body:formData,
        });
        console.log(response)
        const result = await response.json();
        console.log(result,'result signin'); 
        userStore.update(storeData => {
            storeData.user = result;
            return storeData;
        });    
        // userStore.signIn = {email: '', password: ''}
        // userStore.user = result
        // console.log(result,'result')
        // let jsonResult = await result.json();
        // console.log(jsonResult, 'register result');
        // return jsonResult;
     }
    
     
     
     
     
    

    export  {userStore, connexion, register} ;

