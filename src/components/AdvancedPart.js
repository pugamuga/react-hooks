import React, { useState } from "react";
import { useEffect } from "react";

const AdvancedPart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resize = () => {
    return setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  if (isError) {
    return (
      <div>
        <div className="text-5xl">ERROR</div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <div className="text-5xl">LOADING...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-5xl">{width}</div>
    </div>
  );
};

export default AdvancedPart;
