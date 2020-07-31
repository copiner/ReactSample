import React, { useState } from "react";
import { Modal } from 'antd';
import { useModalVisible } from './base';

export default () => {
    const { visible, hideModal, openModal } = useModalVisible();
    return (
      <>
        <div onClick={openModal}>open Modal!</div>
        <Modal visible={visible} onCancel={hideModal} />
      </>
    );
};
