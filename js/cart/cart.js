/**
 * New node file
 */


console.log("here")




	function Geeks(index) {
		
        document.getElementsByTagName("tr")[index].remove();
    }

	function calculateTotalPrice() {
		var nums = document.getElementById("Pranav1").value
		document.getElementById("Price1").innerText = nums*450 + 450
	}
	function calculatePrice() {
		var nums = document.getElementById("Pranav1").value
		document.getElementById("Price1").innerText = nums*450 - 450
	}

	function calculateTotalPrice1() {
		var nums = document.getElementById("Pranav2").value
		document.getElementById("Price2").innerText = nums*30 + 30
	}
	function calculatePrice1() {
		var nums = document.getElementById("Pranav2").value
		document.getElementById("Price2").innerText = nums*30 - 30
	}

	function calculateTotalPrice2() {
		var nums = document.getElementById("Pranav3").value
		document.getElementById("Price3").innerText = nums*50 + 50
	}
	function calculatePrice2() {
		var nums = document.getElementById("Pranav3").value
		document.getElementById("Price3").innerText = nums*50 - 50
	}
	function calculateTotalPrice3() {
		var nums = document.getElementById("Pranav4").value
		document.getElementById("Price4").innerText = nums*90 + 90
	}
	function calculatePrice3() {
		var nums = document.getElementById("Pranav4").value
		document.getElementById("Price4").innerText = nums*90 - 90
	}
	function calculateTotalPrice4() {
		var nums = document.getElementById("Pranav5").value
		document.getElementById("Price5").innerText = nums*200 + 200
	}
	function calculatePrice4() {
		var nums = document.getElementById("Pranav5").value
		document.getElementById("Price5").innerText = nums*200 - 200
	}
	
function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName('container-fluid')[0]
	var cartRows = cartItemContainer.getElementsByClassName('row px-xl-5')
	for(var i=0; i< cartRows.length; i++){
		var cartRow = cartWors[i]
		var priceElement = cartRow.getElementsByClassName('align-middle')
		var quantityElement = cartRow.getElementsByClassName('input-group quantity mx-auto')[0]
		console.log(priceElement, quantityElement)
	}
}

