import { sleep } from 'misc-utils-of-mine-generic';
import { serial } from 'misc-utils-of-mine-generic';

// import LazyLinePainter
const LazyLinePainter= require( 'lazy-line-painter')
function test1(){

// select your svg
let el = document.querySelector('#d1')

// initialise & configure LazyLinePainter
// let myAnimation = new LazyLinePainter(el, { strokeWidth : 10 })

// paint! :)
// myAnimation.paint()

let config = {

	// style properties
	'strokeWidth': 2,     // Adjust width of stroke
	'strokeColor' : 'red',    // Adjust stroke color
	'strokeCap'    : 'butt',   // Adjust stroke cap  - butt  | round | square
	'strokeJoin' : 'miter',     // Adjust stroke join - miter | round | bevel
	'strokeOpacity': 0.6,  // Adjust stroke opacity 0 - 1
	'strokeDash': '5,5' ,     // Adjust stroke dash - '5, 5'

	// animation properties
	'delay'    : 1,       // Delay before animation starts
	'reverse' :true,        // reverse playback
	'ease'   :    'easeOutQuad',     // penner easing - easeExpoOut / easeExpoInOut / easeExpoIn etc
	'repeat'  : true,        // number of additional plays, -1 for loop
} as any

let svg = document.querySelector('#face') 
let myAnimation = new LazyLinePainter(svg, config)

myAnimation.paint()
}



  async function test2(){
// function test22(el:any){

  let config = {
  
    // style properties
    'strokeWidth': 2,     // Adjust width of stroke
    'strokeColor' : 'red',    // Adjust stroke color
    'strokeCap'    : 'butt',   // Adjust stroke cap  - butt  | round | square
    'strokeJoin' : 'miter',     // Adjust stroke join - miter | round | bevel
    'strokeOpacity': 0.6,  // Adjust stroke opacity 0 - 1
    'strokeDash': '5,5' ,     // Adjust stroke dash - '5, 5'
  
    // animation properties
    'delay'    : 0,       // Delay before animation starts
    // 'reverse' :true,        // reverse playback
    'ease'   :    'easeOutQuad',     // penner easing - easeExpoOut / easeExpoInOut / easeExpoIn etc
    'repeat'  : true,        // number of additional plays, -1 for loop
  } as any
  
  // let svg = document.querySelector('#face') 

// }

// await pMap
await serial(Array.from(document.querySelectorAll('g')!).map(p=>async ()=>{
  // console.log(p);
// return new Promise(resolve=>{
  let myAnimation = new LazyLinePainter(p ,config)  
  myAnimation.paint()
  await sleep(100)
  // myAnimation.on('complete', resolve())
// })
  // test22(p)
 return  sleep(1000)
}))
  }

  test2()

  // import pMap from 'p-map'