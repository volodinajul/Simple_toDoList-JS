let list = document.querySelector(".section_list");
let input = document.querySelector(".form_input");
let button = document.querySelector(".section_button");

function createValueInput (value) { 
   let newValue = document.createElement("p");
   let deleteValue = document.createElement("button");
   

   deleteValue.className = "button_delete";
   deleteValue.textContent = "Delete";

   newValue.className = "value_input";
   newValue.textContent = value;

   list.appendChild(newValue);
   list.appendChild(deleteValue);
}


button.addEventListener("click", function(e){
   e.preventDefault();
   if(input.value === "Add: " || input.value === ""){
    }else{
   createValueInput(input.value);
   };
});

input.addEventListener("focus", function(){
   input.value = "";                       //при наведении убирается пустое значение 
});

input.addEventListener("blur", function(){
if(input.value === ""){
   input.value = "Add: ";  //когда отводим - появляется надписть add
};
});

//создать новый тег куда будет добавляться значения через функуию



