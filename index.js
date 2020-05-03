window.onload=function(){

  var d = new Date();
  document.getElementById("date").innerHTML = d.toDateString();

    var form = document.getElementById("form");
    var input = document.getElementById("input");
    var btn = document.getElementById("btn");
    var list = document.getElementById("list");
    var id = 1;
    // listItem = {item: "todo item", checked: flase}
	  var liItem = "";
    var todoList = [];
  
    //event listeners of button and checkbox
    btn.addEventListener("click",addToDoItem);
    list.addEventListener("click",boxChecked);


    //adding items to the to-do list
    function addToDoItem(){
      if(input.value===''){
        alert("You must enter a value");
      }
      else{
        var text = input.value;
        var item = `<li class="input-list" id="li-${id}">
         <input id="box-${id}" class="checkboxes" type="checkbox"><span class="input-list-text">${text}</span> 
         <i class="fa fa-trash-o de float-right" job="delete" id="btn-${id}"></i>
         </li>`;
        list.insertAdjacentHTML('beforeend',item);	
        liItem = {item: text, checked: false};
        todoList.push(liItem);		
        id++;
        form.reset();
      }
    }
    //strike through after pressing the checkbox
    function boxChecked(event){
      const element = event.target;
     /* 
     if(element.type === "checkbox"){
        element.parentNode.style.textDecoration = "line-through";
      }*/
     //deleting the strike through text
      if(element.tagName == "I"){
        element.parentNode.style.display = "none";
      }
    }

   //event listener for enter key
    input.addEventListener('keypress', 
    function(e){
      if( e.keyCode === 13)
      {
        e.preventDefault();
        addToDoItem();
      }
    });
}
