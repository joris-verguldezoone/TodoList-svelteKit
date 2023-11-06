<script>
import Signin from './Signin.svelte';
import Register from './Register.svelte';
import { userStore } from '../../stores/userStore';

let user = $userStore.user
console.log(user,'user')

let auth = null
  
function handleAuth(value){
    auth = value
    console.log(auth, 'cc')
}
</script>

{#if auth === null}
<div class="flex justify-center items-center h-screen gap-10">
    <button class="p-3 bg-red-300 rounded-[8px] border border-red-50 w-[150px]" on:click={()=>{handleAuth(true)}}>S'inscrire</button>
    <button class="p-3 bg-red-300 rounded-[8px] border border-red-50 w-[150px]" on:click={() => {handleAuth(false)}}>Se connecter</button>
</div>
{/if}
{#if auth === true}
    <Register handleAuth={handleAuth}></Register>
{:else if auth === false}
    <Signin handleAuth={handleAuth}></Signin>
{/if}