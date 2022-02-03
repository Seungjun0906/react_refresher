import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationCahange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationCahange);

    return () => {
      window.removeEventListener("popstate", onLocationCahange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
