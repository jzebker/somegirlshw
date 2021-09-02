var t=[]
for (let i=0;i<1000;i++) {
    t.push((i/1000).toFixed(3))
}
var x=[]
var y=[]
for (j in t) {
    x.push(Math.sin(2*Math.PI*5*j))
    y.push(Math.sin(2*Math.PI*5*j))
}
Plotly.newPlot("plot", [{
    type: 'scatter3d',
    mode: 'lines',
    x: x,
    y: y,
    z: t
}],{height: 720, width: 720})