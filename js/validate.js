function validateOrderForm() {
	var name = document.forms["order"]["name"];
	if (name.value == null || name.value == "")
	{
		alert("Name cannot be empty");
		name.focus();
		return false;
	}
	
	var email = document.forms["order"]["email"];
	if (email.value == null || email.value == "")
	{
		alert("Email cannot be empty");
		email.focus();
		return false;
	}
	
	var address = document.forms["order"]["address"];
	if (address.value == null || address.value == "")
	{
		alert("Address cannot be empty");
		address.focus();
		return false;
	}
	
	var quantity = document.forms["order"]["quantity"];
	{
	if (quantity.value == null || quantity.value == "")
	{
		alert("Quantity can't be empty");
		quantity.focus();
		return false;
	}
	
	else if (quantity.value < 0)
	{
		alert("Quantity can't be 0 or lower than 0");
		quantity.focus();
		return false;
	}
	}
	
	var phoneno = document.forms["order"]["phone"];
	var phonenopattern = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

	if (!(phoneno.value.match(phonenopattern)))
	{
		alert("Phone number must be in this format! \n+XX XXXX XXXX\n+XX-XXXX-XXXX");
		phoneno.focus();
		return false;
	}
}