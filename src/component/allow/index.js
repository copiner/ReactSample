import React, { useState } from 'react';
import { DatePicker, Button, Input, Divider,Modal, message  } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import List from './list'
import Create from './create'

import ComInput from '../common/bipt'
import CNF from '../../config'



import { useModalVisible } from '../common/modal';

import stl from './index.css'

function Allowed(props) {

  console.log(props)
  let initatom = { task: "",name: "", idno: "",phone: "", cdate:[] };

  const [dtl, setDtl] = useState(initatom);

  const printValues = e => {
    e.preventDefault();
    console.log(dtl)
    props.allowSt()
  };

  const updateField = e => {
    setDtl({
      ...dtl,
      [e.target.name]: e.target.value
    });
  };

  const emptyField = e => {
    setDtl({
      ...dtl,
      [e.target.name]: ''
    });
  };

  const resetField = e => {
    setDtl(initatom);
  };

  const updateDate = (date, dateString) =>{
    setDtl({
      ...dtl,
      cdate:date
    });
  }

  const { visible, hideModal, openModal } = useModalVisible();
  const handleOk = e => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
      <div className={stl.allowed}>
        <p>
          <label>任务名称:</label>
          <ComInput
            limit={ CNF.IPTLIT.namea }
            prefix={null}
            placeholder={"任务名称"}
            value={dtl.task}
            name={ "task" }
            clear = { emptyField }
            update={ updateField } />
          <label>用户姓名:</label>
          <ComInput
            limit={ CNF.IPTLIT.nameb }
            prefix={null}
            placeholder={"用户姓名"}
            value={dtl.name}
            name={ "name" }
            clear = { emptyField }
            update={ updateField } />
          <label>证件号码:</label>
          <ComInput
            limit={ CNF.IPTLIT.cert }
            prefix={null}
            placeholder={"证件号码"}
            value={dtl.idno}
            name={ "idno" }
            clear = { emptyField }
            update={ updateField } />
          <label>手机号:</label>
          <ComInput
            limit={ CNF.IPTLIT.mobile }
            prefix={null}
            placeholder={"手机号"}
            value={dtl.phone}
            name={ "phone" }
            clear = { emptyField }
            update={ updateField } />
          </p>
          <p>
            <label>创建日期:</label>
            <DatePicker.RangePicker
              inputReadOnly
              value={dtl.cdate}
              onChange={ updateDate }/>

            <Button type="primary" size={"default"} onClick={ printValues } >查询</Button>
            <Button onClick={resetField}>清空</Button>
          </p>
        <hr />
        <Button type="primary" onClick={openModal}>创建白名单</Button>
        <div>
          <List allow={props.allow} />
        </div>

        {
          /*创建白名单*/
        }
        <Modal
          visible={visible}
          title={"创建白名单"}
          width={ "480px" }
          onOk={handleOk}
          onCancel={hideModal} >
          {
            /*modal*/
          }
          <Create />
        </Modal>
      </div>
    );
}

export default Allowed;
