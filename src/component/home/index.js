import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Button, message } from 'antd';

import stl from './index.css'

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes, match: { params } } = this.props;

    const { name } = params;

    return (
      <div className={stl.homeDetail}>
          <div className={ stl.homeCont }>
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
          </div>
          <div className={stl.homeNav}>
          {
            routes.map((link,idx)=>{
              return (
                 <Button type="primary"><Link key={link.id} to={link.path}>{link.title}</Link></Button>
              )
            })
          }
          </div>
      </div>
    );
  }
}

export default Home
