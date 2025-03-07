"use client";

import { useEffect, useState } from "react";

type GlowCardProps = {
  animationPath: any;
};

const AnimationLottie = ({ animationPath }: GlowCardProps) => {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  if (!Lottie) return null;

  return <Lottie animationData={animationPath} loop autoplay style={{ width: "95%" }} />;
};

export default AnimationLottie;
