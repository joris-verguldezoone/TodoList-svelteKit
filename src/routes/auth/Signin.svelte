<script>
    import  {userStore, connexion}  from '../../stores/userStore';
    import {goto} from '$app/navigation';
    console.log($userStore)
    let user = $userStore;
    async function handleSignIn() {
        await connexion(user.signIn);
        console.log(user.user, 'result du signIn');
        setTimeout(1000, 
            goto('/super_reminder')
        )
}
</script>
<div class="flex items-center justify-center h-screen">
    <form class="gap-6 bg-flex flex-col justify-center items-center space-y-4 bg-emerald-200 p-5-200 flex flex-col items-center justify-center rounded-[12px] p-12">
        <h1 class="text-center">Connexion</h1>
        <div class="gap-2 flex flex-col">
            <label for="email">email</label>
            <input bind:value={user.signIn.email} type="email" name="email" id="email" class="">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="password">Mot de passe</label>
            <input bind:value={user.signIn.password} type="password" name="password" id="password" class="">
        </div>
        <button on:click={handleSignIn} class="rounded-[12px] w-[125px] bg-flex flex-col justify-center items-center space-y-4 bg-emerald-200 p-5-300 p-3 border border-cyan-100" type="button">Se connecter</button>
        <span>Vous n'avez pas de compte ? <button type='button' class="underline text-red-500">Inscription</button></span>
    </form>
</div>