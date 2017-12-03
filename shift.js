function leftShift()
{
	var num = parseInt(document.getElementById("input_field").value, 2);
	var shifts = document.getElementById("digit_field").value;
	num = num << shifts;
	document.getElementById("input_field").value = num.toString(2);
}
function rightShift()
{
	var num = parseInt(document.getElementById("input_field").value, 2);
	var shifts = document.getElementById("digit_field").value;
	num = num >> shifts;
	document.getElementById("input_field").value = num.toString(2);
}
function circularLeftShift()
{
	var num = document.getElementById("input_field").value;
	var shifts = document.getElementById("digit_field").value;
	for (i = 0; i < shifts; i++)
	{
		num = num.substring(1) + num.substring(0,1);
	}
	document.getElementById("input_field").value = num;
}
function circularRightShift()
{
	var num = document.getElementById("input_field").value;
	var shifts = document.getElementById("digit_field").value;
	for (i = 0; i < shifts; i++)
	{
		num = num[num.length-1] + num.substring(0,num.length-1);
	}
	document.getElementById("input_field").value = num;
}