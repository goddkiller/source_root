###日历组件(datepicker)

datepicker组件是一个第三方jquery插件，详情可以见(http://www.eyecon.ro/datepicker/)
####简单的例子:

#####引入日历

	require("datepicker");

#####初始化日历

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

页面上的html

	<div id="widget">
		<div id="widgetField">
			<span></span>
			<a href="#">Select date range</a>
		</div>
		<div id="widgetCalendar">
		</div>
	</div>


#widgetCalendar: 日历所在的容器;

date: 日历的初始日期.

calendars: 几版

mode：range是时间段，删掉是时间点

onChange: 日期发生变化后的回调函数

######获取选择的日期

	$('#widgetCalendar').DatePickerGetDate("Y-m-d")：

#####设置日期

	$('#inputDate').DatePickerSetDate(["2013-01-01", "2013-02-02"]);


	

