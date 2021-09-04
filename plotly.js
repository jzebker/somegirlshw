var pointCount = 1000;

var x = [];
var y = [];
var z = [];

for(i = 0; i < pointCount; i++) 
{
   x.push(Math.cos(10*3.1415*i/1000));
   y.push(Math.sin(10*3.1415*i/1000));
   z.push(i/1000);
}
Plotly.newPlot('plot1', [{
    type: 'scatter3d',
    mode: 'lines+markers',
    x: x,
    y: y,
    z: z
}])

var x1 = [];
var x2 = [];
var x3 = [];
var x5 = [];
var t = [];

for(i = 0; i < pointCount; i++) 
{
    x1.push((4/3.1415)*Math.sin(8*3.1415*i/1000));
    x2.push((4/3.1415)*((Math.sin(8*3.1415*i/1000)+(Math.sin(24*3.1415*i/1000)/3))));
    x3.push((4/3.1415)*((Math.sin(8*3.1415*i/1000)+(Math.sin(24*3.1415*i/1000)/3)+(Math.sin(40*3.1415*i/1000)/5))));
    x5.push((4/3.1415)*((Math.sin(8*3.1415*i/1000)+(Math.sin(24*3.1415*i/1000)/3)+(Math.sin(40*3.1415*i/1000)/5))+(Math.sin(56*3.1415*i/1000)/7)+(Math.sin(72*3.1415*i/1000)/9)));
    t.push(i/1000);
}
var trace1 = {
    x: x1,
    y: t,
    type: 'scatter',
    name: "N=1"
  };
var trace2 = {
  x: x2,
  y: t,
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'scatter',
  name: "N=2"
};
var trace3 = {
    x: x3,
    y: t,
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter',
    name: "N=3"
};
var trace4 = {
    x: x5,
    y: t,
    xaxis: 'x5',
    yaxis: 'y5',
    type: 'scatter',
    name: "N=5"
};
var data = [trace1, trace2, trace3, trace4];

var layout = {
  grid: {rows: 1, columns: 4, subplots:[['xy','x2y2','x3y3','x5y5']]},
};
Plotly.newPlot('plot4',data,layout);