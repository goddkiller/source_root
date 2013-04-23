define(function(require, exports, module) {
	require("./datepicker_example.css");
	require("datepicker");
		var now3 = new Date();
		var now4 = new Date()
		now3.setDate(now3.getDate() - 4);
		
		$('#widgetCalendar').DatePicker({
			flat: true,
			date: [new Date(now3), new Date(now4)],
			calendars: 3,
			mode: 'range',
			onChange: function(formated) {
				$('#widgetField span').get(0).innerHTML = formated.join(' &divide; ');
				// console.log($('#widgetCalendar').DatePickerGetDate("Y-m-d"));
			}
		});
		// var state = false;
		// $('#widgetField>a').bind('click', function(){
		// 	$('#widgetCalendar').stop().animate({height: state ? 0 : $('#widgetCalendar div.datepicker').get(0).offsetHeight}, 500);
		// 	state = !state;
		// 	return false;
		// });
		// $('#widgetCalendar div.datepicker').css('position', 'absolute');
})