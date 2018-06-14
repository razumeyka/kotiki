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
    
// list-or-grid
        $('.advertisements').addClass('active');
        $('.list').addClass('active'); 

        $('.grid').click(function(e) { 
        e.preventDefault();
		$('.advertisements').removeClass('active');
        $('.ads').addClass('active');
        $('.grid').addClass('active');
        $('.list').removeClass('active');
	})
    
        $('.list').click(function(e) { 
        e.preventDefault();
		$('.advertisements').addClass('active');
        $('.ads').removeClass('active');
        $('.list').addClass('active'); 
        $('.grid').removeClass('active');
	})
    
});