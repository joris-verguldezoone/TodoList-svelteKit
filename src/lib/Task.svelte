<script>
  import Modal from "./Modal.svelte";
  // props
  export let task;
  export let deleteTask;
  export let tindex;
  export let updateTask;
  

  let newTask = {taskName: task.taskName, taskBody: task.taskBody, taskUser:0}
  //  props
  let modal = ''; // 
  let taskList = []; // init des taches éventuellement fetch

  function handleDeleteTask(){
    deleteTask(tindex)
  }

  function handleKeydownDeleteTask(){
    handleDeleteTask()
  }

  function setModal(currentModal){
    modal = currentModal
    console.log(modal,'modal');
  }

</script>
<div class="flex flex-row  w-full space-x-3">
  <button class="bg-red-50 border border-red-200 pt-2 pb-2 rounded-[6px] w-11/12" on:click={()=> {setModal('view-task')}}>{task.taskName}</button>
  <div class="p-2 rounded-[20px] hover:bg-gray-400"  on:click={handleDeleteTask} on:keydown={handleKeydownDeleteTask} role="button" tabindex={tindex}>
    <svg class="w-[18px] h-[18px] text-gray-700 " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
  </div>
  {#if modal != '' }
  <Modal setModal={setModal} tindex={tindex}>
    <div slot='header'>
      <input type='text'  bind:value={newTask.taskName} class="text-3xl">
    </div>
    
    <textarea rows="4" cols="50" class="h-4/6" bind:value={newTask.taskBody}></textarea>
    <div slot="footer" class="flex flex-row space-x-6 justify-end">
      <button class="p-2 rounded-[8px] bg-teal-300" on:click={()=>{updateTask(tindex,newTask),setModal('')}}>Enregistrer</button>
      <button class="p-2 rounded-[8px] bg-orange-300" on:click={()=>{setModal('')}}>Quitter</button>
    </div>
  </Modal>
  {/if}
</div>

