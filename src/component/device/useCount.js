import React, { useState, useEffect } from "react";

export function useSetCount(c,n) {
  const [count, setCount] = useState(c);
  let interval = null;

  useEffect(() => {
    interval = setInterval(() => {
      setCount(count + n);
    }, 1000);

    return clearInterval(interval);
  });

  return count;
}
