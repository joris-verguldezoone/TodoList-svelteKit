<script>
    export let setModal;
    export let tindex;

    /**
     * @param {string} value
     */
    function handleKeyDown(value){
        setModal(value)
    }

</script>

<div class="top-0 right-0 absolute z-3 opacity-50 bg-rose-300 h-screen w-full" role="button" tabindex={tindex} on:click={()=>{handleKeyDown('')}} on:keydown={()=>{handleKeyDown('')}}></div>
<div class="absolute z-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-300 h-[500px] p-5 rounded-[8px] flex flex-col justify-between">
    <slot name="header"></slot> <!-- Emplacement nommé "header" -->
    <slot></slot> <!-- Emplacement par défaut -->
    <slot name="footer"></slot> 
</div>