const container=document.getElementById('container');
container.addEventListener('click',(e)=>{
     if(e.target.tagName==='BUTTON'){
         const button=e.target;
        console.log(button.parentNode.parentNode.children);
     }
})