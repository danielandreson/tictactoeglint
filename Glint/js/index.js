$(document).ready(function() 
{
	var first ='x'
	var second = 'o'
	var count = 0
	var o_win = 0
	var x_win = 0

	$('#game li').click(function()
	{
		if ($(this).hasClass('disable'))
		{
			confirm('Already selected')
			return
		}

		count++

		if (count == 9 && !checkComplete('x') && !checkComplete('o'))
		{
			confirm('Its a tie. It will restart.')
			$("#reset").click()
		}
		else if (count%2 == 0)
		{
		 	$(this).text('o').addClass('disable o btn-primary')  
	  	}
	   	else  
	  	{
	    	$(this).text('x').addClass('disable x btn-info')	
	    	loadAI()	   
	  	}

	  	if (checkComplete('o'))
	    {
	    	$('#o_win').text(++o_win)
			confirm('O wins')
			$("#reset").click()
        }
    	else if (checkComplete('x'))
	    {
	    	$('#x_win').text(++x_win)
	 		confirm('X wins')
	 		$("#reset").click()
        }
	 });

    $("#reset").click(function () 
    {
	  	$("#game li").text("+").removeClass('disable o x btn-primary btn-info')
		count = 0
	});

	var checkComplete=function($value)
	{
		if (
				$("#one").hasClass($value) && $("#two").hasClass($value) && $("#three").hasClass($value) || 
				$("#four").hasClass($value) && $("#five").hasClass($value) && $("#six").hasClass($value) || 
				$("#seven").hasClass($value) && $("#eight").hasClass($value) && $("#nine").hasClass($value) || 
				$("#one").hasClass($value) && $("#four").hasClass($value) && $("#seven").hasClass($value) || 
				$("#two").hasClass($value) && $("#five").hasClass($value) && $("#eight").hasClass($value) || 
				$("#three").hasClass($value) && $("#six").hasClass($value) && $("#nine").hasClass($value) || 
				$("#one").hasClass($value) && $("#five").hasClass($value) && $("#nine").hasClass($value) || 
				$("#three").hasClass($value) && $("#five").hasClass($value) && $("#seven").hasClass($value)
			)
        {
        	return true;
        }
	};

	var loadAI=function()
	{
		var number = parseInt(Math.random() * 9)
		var test = $(".btn.span1")[0]
		if (!$(".btn.span1")[number].className.includes('disable'))
		{
			$(".btn.span1")[number].click()
		}
		else
		{
			loadAI()
		}
	};
});





