// pages/about.js — `base-url/about`
import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../src/lotties/100066-coming-soon.json'
export default function about() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (

    <div>
      <Lottie 
	    options={defaultOptions}
      />
    </div>
  );
  }