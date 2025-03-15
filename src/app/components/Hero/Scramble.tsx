"use client";

import { useState, useEffect, useRef } from "react";
import { useScramble } from "use-scramble";
import { useInterval } from "usehooks-ts";

const Scramble = ({ values }: { values: string[] }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const isFirstRender = useRef(true);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
    // We don't want to mark this as not first render yet
    // to prevent immediate replay
  }, []);

  // hook returns a ref
  const { ref, replay } = useScramble({
    text: values[currentValue],
    speed: 0.6,
    tick: 2,
    step: 1,
    overflow: true,
    seed: 4,
    scramble: 3,
    playOnMount: false,
  });

  const [interval, setInterval] = useState(3000 + Math.random() * 1000);

  useInterval(
    () => {
      // Your custom logic here
      const inter = 2000 + Math.random() * 3000;
      setInterval(inter);
      const newValue = (currentValue + 1) % values.length;

      setCurrentValue(newValue); // Update the text
      // Only replay if it's not the first client render
      if (!isFirstRender.current) {
        replay();
      } else {
        isFirstRender.current = false;
      }
    },
    // Delay in milliseconds or null to stop it
    interval
  );

  // Show the first value as a fallback during SSR
  if (!isClient) {
    return <p>{values[0]}</p>;
  }

  // apply the ref to a node
  return <p ref={ref} />;
};

export default Scramble;
