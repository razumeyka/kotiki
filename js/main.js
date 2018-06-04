$(document).ready(function(){
    
//mobile menu   
    $( '.burger' ).click( function() { 
        $( '.navbar' ).slideToggle();
        $( '.burger' ).toggleClass( 'active' ); 
    });

    
// select 
    	$('.extended_search_button').click(function(e) { 
        e.preventDefault();
		$('.extended_search').toggleClass('active');
        $('.main_screen').toggleClass('active');
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