import React from "react";

const Hooks = () => {
  const bool = true;

  const TestElement = bool ? "div" : "h1";

  return <TestElement className="h-screen bg-violet-200">Hooks</TestElement>;
};

export default Hooks;
