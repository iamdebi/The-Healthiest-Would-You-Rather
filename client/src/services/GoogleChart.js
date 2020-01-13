
export default{
  drawChart(percentage) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Option');
    data.addColumn('number', 'Responses');

    data.addRows(2);
    data.setValue(0, 0, 'Option 1');
    data.setValue(0, 1, 0.0);
    data.setValue(1, 0, 'Option 2');
    data.setValue(1, 1, 100.0);
    var options = {
        width:500,
        height:400,
        chartArea:{left:20,top:0}
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    var percent = 0;
    var handler = setInterval(function(){
        percent += 1;
        data.setValue(0, 1, percent);
        data.setValue(1, 1, 100 - percent);
        chart.draw(data, options);
    if (percent >= percentage)
        clearInterval(handler);
    }, 30);


  }
}
