"use client"

import Lottie from "lottie-react";
import { ReactNode } from "react";

type GlowCardProps = {
  animationPath: any;
};
const AnimationLottie = ({ animationPath }:GlowCardProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;