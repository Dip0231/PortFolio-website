function addme()
{
	var item=document.getElementById("material").value

	var newitem=document.createTextNode(item);
	 var newlist=document.createElement("li");

	 newlist.appendChild(newitem);

  document.getElementById("additem").appendChild(newlist);

	
}


