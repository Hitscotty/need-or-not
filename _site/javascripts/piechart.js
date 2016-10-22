
window.onload = function () {
 var chart = new CanvasJS.Chart("chartContainer",
 {
  title:{
   text: "Need or Not?",
   fontFamily: "arial black"
  },
                animationEnabled: true,
    theme: "theme1",
  data: [
  {
   type: "pie",
   indexLabelFontFamily: "Garamond",
   indexLabelFontSize: 20,
   indexLabelFontWeight: "bold",
   startAngle:0,
   indexLabelFontColor: "MistyRose",
   indexLabelLineColor: "darkgrey",
   indexLabelPlacement: "inside",
   toolTipContent: "{name}",
   showInLegend: true,
   indexLabel: "#percent%",
   dataPoints: [
    {  y: 52, name: "Need"},
    {  y: 44, name: "Not"}
   ]
  }
  ]
 });
 chart.render();
}
