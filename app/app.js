
// **********************************
// flow chart
// **********************************

function genChart(id) {
  var c1 = document.getElementById(id + 'Code');
  var digest = flowchart.parse(c1.value);
  digest.drawSVG(id);
}

// **********************************