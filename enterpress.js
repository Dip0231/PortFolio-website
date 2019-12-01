var wage = document.getElementById("material");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    var item = e.target.value;
    

	var newitem=document.createTextNode(item);
	 var newlist=document.createElement("li");

	 newlist.appendChild(newitem);

  document.getElementById("additem").appendChild(newlist);
}