$(document).ready(function(){
    
// cat-dog 
        $('.dog_img').click(function() { 
        $('.cat_background').addClass('active');
    })
    
        $('.cat_img').click(function() { 
        $('.cat_background').removeClass('active');
    })
     
// select 
           
    	$('.extended_search_button').click(function(e) { 
        e.preventDefault();
		$('.extended_search').slideToggle();
        $('.main_screen').toggleClass('active'); 
         $('.extended_search_button').toggleClass('active'); 
	})
        
    	$('.select .select_field').click(function(){
		$('.select').not($(this).closest('.select')).removeClass('active');
		$(this).parent().toggleClass('active');
	})
	
	$('.select li').click(function(){
		$(this).closest('.select').find('input').val($(this).data('value'));
		$(this).closest('.select').find('.select_field').html($(this).html());
		$(this).closest('.select').toggleClass('active');
	})	
});