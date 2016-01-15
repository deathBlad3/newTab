$('a').on('click',function(event){
	clickedLink = $(this).attr('href');
	window.open(clickedLink);
	return false;
});