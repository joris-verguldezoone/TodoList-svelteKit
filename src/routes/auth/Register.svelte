<script>
    import  {userStore, register}  from '../../stores/userStore';
    console.log($userStore)

    let user = $userStore;

    async function handleRegister() {
        await register(user.newUser);
        console.log(user.user, 'result du signIn');    
}
</script>

<div class="flex items-center justify-center h-screen">
    <form class="gap-6 bg-red-200 flex flex-col items-center justify-center rounded-[12px] p-12">
        <h1 class="text-center">Inscription</h1>
        <div class="gap-2 flex flex-col">
            <label for="email">email</label>
            <input bind:value={user.newUser.email} type="email" name="email" id="email" class="p-3 outline-none  rounded-[12px] focus:bg-red-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="firstname">Prénom</label>
            <input bind:value={user.newUser.firstname} type="text" name="firstname" id="firstname" class="p-3 outline-none  rounded-[12px] focus:bg-red-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="lastname">Nom</label>
            <input bind:value={user.newUser.lastname} type="text" name="lastname" id="lastname" class="p-3 outline-none  rounded-[12px] focus:bg-red-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="password">Mot de passe</label>
            <input bind:value={user.newUser.password} type="password" name="password" id="password" class="p-3 outline-none  rounded-[12px] focus:bg-red-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="confirm_password">Confirmation du mot de passe</label>
            <input bind:value={user.newUser.confirm_password} type="password" name="confirm_password" id="confirm_password" class="p-3 outline-none  rounded-[12px] focus:bg-red-50 focus:border-2 focus:border-teal-300">
        </div>
        <button on:click={handleRegister} class="rounded-[12px] w-[125px] bg-red-300 p-3 border border-cyan-100" type="button">S'inscrire</button>
        <span>Vous avez déjà un compte ? <button type='button' class="underline text-teal-500">Connexion</button></span>
    </form>
</div>