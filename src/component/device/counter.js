import React from "react";
import { useSetCount } from './useCount';

function Counter(props) {
  const count = useSetCount(1, 1);

  return (
    <div>
      <p>count is {count}</p>
    </div>
  );
}

export default Counter


// function Counter(props) {
//   const count = useSetCount(10, 10);
//
//   return (
//     <div>
//       <p>count is {count}</p>
//     </div>
//   );
// }
