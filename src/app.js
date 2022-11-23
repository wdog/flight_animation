import "./input.css";
console.log("iported CSS");



import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
/** ----------------- */


const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 200, y: 10 },
    { x: 300, y: 100 },
    { x: 800, y: -50 },
    { x: 300, y: -100 },
    { x: 900, y: 100 },
    { x: window.innerWidth, y: 0 },

  ],
};

console.log(window.innerWidth)

const tween = new TimelineLite();
tween.add(
  TweenLite.to(".plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".flight-zone",
  duration: 1000,
  triggerHook:"onCenter"
})
  //.addIndicators()
  .setTween(tween)
  .addTo(controller);
