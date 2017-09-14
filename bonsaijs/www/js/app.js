/*new Rect(10,10,100,100)
.addTo(stage)
.attr(`fillColor`, `blue`)

.animate('5s', {
  x: 100,
  y: 150
}, {
  easing: 'bounceIn',
  delay: '200ms'
})*/

new Circle(0,5,12)
.addTo(stage)
.attr('fillColor', 'black')

.animate(new KeyframeAnimation('4s', {
  from: { x: 0, y: 5 },
  '1s': { x: 300, y: 5 },
  '2.5s': { x: 300, y: 450},
  to: { x: 0, y: 5 }
}))

new Arc(0,5,12,(Math.PI/100)*60,(Math.PI/180)*300)
.addTo(stage)
.attr('fillColor', 'red')

.animate(new KeyframeAnimation('6s', {
  from: { x: 0, y: 5 },
  '1s': { x: 300, y: 5 },
  '2.5s': { x: 300, y: 450},
  to: { x: 0, y: 5 }
}))

