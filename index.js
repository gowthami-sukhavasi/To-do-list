window.onload=function(){
    var form = document.getElementById("form");
    var input = document.getElementById("input");
    var btn = document.getElementById("btn");
    var list = document.getElementById("list");
  
  
    btn.addEventListener("click",addToDoItem);
    list.addEventListener("click",boxChecked);
  
    function addToDoItem(){
      if(input.value===''){
        alert("You must enter a value");
      }
      else{
        var text = input.value;
        var item = `<li style="border: 1px solid white;padding: 0.5rem 0.5rem 0.5rem 0.5rem;	margin: 0 1rem 0 1rem; background-color: #ff7c7c;">
          <input id="box" class="checkboxes" type="checkbox">
          ${text}
          </li>`;
        list.insertAdjacentHTML('beforeend',item);	
      
      }
    }
    function boxChecked(event){
      const element = event.target;
      if(element.type === "checkbox"){
        element.parentNode.style.textDecoration = "line-through";
      }
    }
}