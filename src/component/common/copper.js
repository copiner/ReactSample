import React, { Component } from 'react';
import { Button,Divider } from 'antd';
import Cropper  from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import stl from './index.css'

let pic = "data:image/png;base64,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"

class Crop extends Component {
    constructor(props) {
        super(props);
    }

    crop =()=>{
      //this.cropper.setCropBoxData({top:0,width:178,height:220})
      //this.cropper.setCropBoxData({top:0,width:100,height:200})
      //console.log(this.cropper.getData())
      console.log(this.cropper.getCroppedCanvas().toDataURL());
    }

    onCropperInit=(cropper) => {
        this.cropper = cropper;
    }

    componentDidMount() {
      console.log('componentDidMount');
    }

    render() {
      console.log(this.props.hideM)
      return (
        <>
          <Cropper
            className={stl.copperBox}
            src={ pic }
            // Cropper.js options
            guides={true}
            // crop={this.crop}
            // center={false}
            // minCropBoxWidth={600}
            // minCropBoxHeight={400}
            autoCrop={true}
            data={{ x:200,y:50,width:178,height:220 }}
            movable={true}
            cropBoxResizable={false}
            onInitialized={this.onCropperInit}
            />
            <div className={stl.copperBtn}>
              <Button onClick={this.props.hideM}>取消</Button>
              <Button type="primary" onClick={this.crop}>保存</Button>
            </div>
        </>
        );
    }
}

export default Crop;
