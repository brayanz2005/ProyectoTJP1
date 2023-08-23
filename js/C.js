$(function () {
	$('#code').on({
		focus: function () {
			$(this).removeClass('bg-light');
			$(this).addClass('bg-light');
		},
		blur: function () {
			$(this).removeClass('bg-light');
			$(this).addClass('bg-light');
		},
	});
	$('#bt').on({
		click: function () {
			$(this).addClass('bg-white');
			$(this).text('¿Estás seguro?');
		},
		dblclick: function () {
			$(this).removeClass('bg-light');
			$(this).css({ 'background-color': 'transparent', color: 'Black' });
			$(this).text('COMPRADO');
		},
	});
});