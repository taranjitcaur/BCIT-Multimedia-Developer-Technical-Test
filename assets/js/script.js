$(document).ready(function(){
	$('.card-container').on('click', function(){
		var prioritiesHTML = $(this).children();
		var concernsHTML = $(this).children();
		if(typeof(prioritiesHTML[2]) !== 'undefined') {
			var pHtml = prioritiesHTML[2].innerHTML;
			$('.modal .list-group.priorities').html(pHtml);
		} else {
			$('.modal .list-group.priorities').html('');
		}
		if(typeof(concernsHTML[3]) !== 'undefined') {	
			var cHtml = concernsHTML[3].innerHTML;
			$('.modal .list-group.concerns').html(cHtml);
		} else {
			$('.modal .list-group.concerns').html('');
		}		
		var title = $(this).find('.card-title').text();
		var image = $(this).find('img').attr('src');		
		var attr = $(this).parent().attr('data-target');	
		var res = attr.slice(1);		
		$('.modal').attr('id', res);
		$('.modal .modal-title.card-title').html(title);
		$('.modal .img-fluid.card-img').attr("src", image);
		$(attr).modal('show');
	});	
}); 