$(document).ready(function() {
	$('span#add-row').click(function() {
		$('span#number').show();
		$('span#list-item').show();
		$('input').show();
		$('span#delete').show();
	})
	$('#delete').click(function() {
		$('input').val('');
	
	})
});


			/*function() {
			$('div#item').clone();
			$('span#number').appendTo(Array.apply(2, Array(10)).map(function() { return 1; }));
		}
		})*/