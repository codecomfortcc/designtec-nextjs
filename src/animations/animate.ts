'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateMainImage(){
  gsap.registerPlugin(ScrollTrigger);
  const image= document.getElementById("main-image");
  const brandName = document.getElementById("brand-name");
  const slogan = document.getElementById("slogan");
  const sloganHead = document.getElementById("slogan-head");
  const sloganTail = document.getElementById("slogan-tail");
  const info = document.getElementById("info");
  const mainButton = document.getElementById("main-button");
  const about = document.getElementById("section-2");
  const product = document.getElementById("section-3");
  const footer = document.getElementById("section-4");
  const loyalCustomers = document.getElementById("loyal-customers");
  
  if(image && brandName && slogan && sloganHead && sloganTail && info && mainButton){
    const tl = gsap.timeline();
    tl.from([brandName,slogan,sloganHead,sloganTail,info,mainButton],{
      
    })
  }

if(about)
  gsap.from(about.children, {
    scrollTrigger: {
      trigger: about,
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    x: -1200,
    
    stagger: 0.2
  },);
if(about){
  gsap.from(loyalCustomers, {
    scrollTrigger: {
      trigger: about,
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    color:'rgb(156 163 175)',
    fontSize:'36px',
    stagger: 0.2
  });
}
if(product)
  gsap.from(product.children, {
    scrollTrigger: {
      trigger: product,
      start: "top-=120 center", // 20px above the trigger point
      end: "bottom center",
      scrub: true
    },
    opacity: 0.5,
    stagger: 1.0
  });
if (footer)
  gsap.from(footer.children, {
    scrollTrigger: {
      trigger: footer,
      start: "top center",
      end: "bottom center",
      scrub: true
    },
 
    stagger: 0.2
  });
}
