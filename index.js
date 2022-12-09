document.body.addEventListener("click", function (e) {
	if (e.target.id === 'btn') {
		handleClick(e)
		}
});



function handleClick(e) {
    
    document.getElementById("btn-container").style.display = 'none'
    const nodes = document.getElementsByClassName('hide')
    for (let i = 0; i < nodes.length; i++) {
			nodes[i].style.display = "flex";
		}
}