
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes, match: { params } } = this.props;

    const { name } = params;

    return (
      <>
        <h1>Greeting page</h1>
         {name}
         <ul>
           {
             routes.map((link,idx)=>{
               return (
                 <li>
                    <Link key={link.id} to={link.path}>{link.title}</Link>
                 </li>
               )
             })
           }
         </ul>
          <hr />
          <Switch>
            {
              routes.map((route,index)=>{
                return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  )

              })
            }

          </Switch>
      </>
    );
  }
}

export default Home
