import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Modal, Button, message } from 'antd';

import loadable from "@loadable/component";
import stl from './index.css'

import { useModalVisible } from '../common/modal';

const Info = loadable((props) => import(/* webpackChunkName: "info" */'./info'));
const Deal = loadable((props) => import(/* webpackChunkName: "deal" */'./deal'));
const Charge = loadable((props) => import(/* webpackChunkName: "charge" */'./charge'));
const Record = loadable((props) => import(/* webpackChunkName: "record" */'./record'));


function Detail(props) {

  console.log(props)

  const { visible, hideModal, openModal } = useModalVisible();

  const routes = [
    {
      id:'0001',
      title:"业务办理",
      path: "/sail/deal",
      component: Deal
    },
    {
      id:'0002',
      title:"业务续费",
      path: "/sail/charge",
      component: Charge
    }
  ];


  const [mol, setMol] = useState(null);

  const bindBound = e =>{
    setMol(e.target.name)
  }

  const itemN = () =>{

    switch (mol) {
      case 'a':
        //props.hAct.recordSt('ctm');
        return <Record record={props.detail} ract={props.hAct} />;
        break;
      case 'b':
        return <Charge />;
        break;
      case 'c':
        return <Charge />;
        break;
      case 'd':
        return <Charge />;
        break;
      default:
        return null;
    }

  }


  return (
      <>
        <div className={stl.homeNav}>
            {
              routes.map((link,idx)=>{
                return (
                   <Link key={link.id} to={link.path}>{link.title}</Link>
                )
              })
            }
            <a name="a" onClick={ (e) => { bindBound(e);openModal(); } }>业务记录</a>
            { true?
              <span>
                <a name="b" onClick={ (e) => { bindBound(e); openModal();}  }>打印卡片</a>
                <a name="c" onClick={ (e) => { bindBound(e); openModal();}  }>绑卡</a>
                <a name="d" onClick={ (e) => { bindBound(e); openModal();}  }>退卡</a>
              </span>
               : "" }
          </div>
          <hr />
          <div className={ stl.homeCont }>
            <Switch>
              <Route path="/sail/detail">
                <Info info={true} iAct={true}/>
              </Route>
              {
                routes.map((route,index)=>{
                  return (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={props => (
                          <route.component {...props}/>
                        )}
                      />
                    )
                })
              }
            </Switch>
          </div>
          {
            /*
              共用modal
            */
          }
          <Modal
            visible={visible}
            width={ "618px" }
            footer={null}
            onCancel={hideModal} >
            { itemN() }
          </Modal>
      </>
    );
}

export default Detail;
