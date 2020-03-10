import React, { Component } from 'react';
import AsyncComponent from '../util/loadable';//异步加载组件

const One = AsyncComponent(() => import('../component/Header/one'));
const Two = AsyncComponent(() => import('../component/Header/two'));
//const Child = AsyncComponent(() => import('../component/Header/child'));
// const GrandChild = AsyncComponent(() => import('../component/Header/grandchild'));

//
// export const hRoutes = [
//   {
//     component: One,
//     routes: [
//       {
//         path: "/",
//         exact: true,
//         component: Two
//       },
//       {
//         path: "/child/:id",
//         component: Child,
//         routes: [
//           {
//             path: "/child/:id/grandchild",
//             component: GrandChild
//           }
//         ]
//       }
//     ]
//   }
// ];

/*kick it all off with the root route
ReactDOM.render(
  <BrowserRouter>

    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
*/

import { renderRoutes } from "react-router-config";


const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </div>
);

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

export const hRoutes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grandchild",
            component: GrandChild
          }
        ]
      }
    ]
  }
];
