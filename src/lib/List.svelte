<script>
// @ts-nocheck
import Task from "./Task.svelte";
    // let lists = [{name:'',tasks:{}}]; 
  let lists = []; 
  let newList = ''; // input qui définira ma nouvelle taskList
  let currentIndex = null;
  let newTask = "";

  function updateTask(taskIndex, updatedTask){
    console.log(updatedTask,'ICI')
    console.log(lists[currentIndex].tasks[taskIndex],'show index')
    lists[currentIndex].tasks[taskIndex] =  updatedTask
    console.log(lists, 'updatedTask')
    setModal('')
  }

  function addList() {
    if (newList.trim() !== '') {
      const newListObject = { name: newList, tasks: [] };
      lists = [...lists, newListObject];
      newList = ''; // Réinitialisez le champ d'entrée
    }
    console.log(lists,'lists');
  }


  function addTask() {
    lists[currentIndex].tasks = [...lists[currentIndex].tasks, {taskName: newTask, taskBody: '', taskUser: 0}];
    newTask = ""
    console.log(lists,'lists voir new task')
  }
  function setListIndex(newIndex){
    currentIndex = newIndex;
    console.log(currentIndex,'currentIndex')
    console.log(lists[currentIndex],'list[currentIndex]')
  }

  function deleteTask(currentTask){
    lists[currentIndex].tasks = lists[currentIndex].tasks.filter((task, index) => index !== currentTask);
    console.log(lists, 'lists[currentIndex].tasks[currentTask]')
  }

  </script>

  <div class="flex flex-row justify-center items-center space-x-4 bg-red-200 p-5">

    <input class="h-[40px] w-[300px] focus:bg-red-100 focus:border-2 focus:border-red-300 outline-none rounded-[8px] pr-3 pl-3" type="text" placeholder="nouvelle liste" bind:value={newList} />
    
    <button on:click={addList} class="rounded-[12px] bg-red-300 p-3 border border-cyan-100">Nouvelle liste</button>
  </div>
  <div class="flex align-center flex-wrap bg-red-200 p-5 h-screen">
    {#each lists as list, index}
    <div class="w-[300px] h-[600px] border-2 border-red-50 bg-red-100 m-3 p-5 rounded-[6px]">
      <div class="h-[15%] ">
        <button class="bg-red-50 p-3 rounded-[12px] border-2 border-red-300 text-2xl w-3/4" on:click={() => {setListIndex(index)}}>{list.name}</button>
      </div>
      <div class="h-[65%] flex flex-col space-y-[6px]">
        {#if lists[index]['tasks'].length > 0}
        {#each lists[index]['tasks'] as task, tindex}
          <Task updateTask={updateTask} task={task} tindex={tindex} deleteTask={deleteTask}></Task>
        {/each}
        {/if}
      </div>
      {#if currentIndex != null && currentIndex === index}
      <div class="flex flex-col h-[20%] space-y-3 ">
          <input type="text" class="focus:bg-red-100 focus:border-2 focus:border-red-300 outline-none rounded-[12px] p-3" placeholder="nouvelle tache" bind:value={newTask} />
          <button class="p-3 rounded-[6px] bg-red-300 " on:click={addTask}>Ajouter une nouvelle tache</button>   
      </div>
      {/if}
    </div>
    {/each}
  </div>

  