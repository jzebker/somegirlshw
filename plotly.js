var pointCount = 1000;

var x = [];
var y = [];
var z = [];

for(i = 0; i < pointCount; i++) 
{
   x.push(Math.cos(2*3.1415*i/1000));
   y.push(Math.sin(2*3.1415*i/1000));
   z.push(i/1000);
}
Plotly.newPlot('plot', [{
    type: 'scatter3d',
    mode: 'lines+markers',
    x: x,
    y: y,
    z: z
}])