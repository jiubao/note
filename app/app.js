
// **********************************
// flow chart
// **********************************

function genChart(id) {
  var c1 = document.getElementById(id + 'Code');
  var chart = flowchart.parse(c1.value);
  chart.drawSVG(id);
}

// **********************************


// **********************************
// diagra
// **********************************

function genDiagram(id) {
  var d1 = document.getElementById(id+'Code');
  var diagram = Diagram.parse(d1.value);
  diagram.drawSVG(id, {theme: 'hand'});
}

// **********************************