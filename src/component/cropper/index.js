import React, { Component } from 'react';
import Cropper  from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import stl from './index.css'
import cropPic from './cropper.png'

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
      return (
        <>
          <div onClick={this.crop} className={stl.coppr}>ABC</div>
          <Cropper
            src={cropPic}
            // Cropper.js options

            // guides={false}
            // crop={this.crop}
            // center={false}
            autoCrop={true}
            data={{ x:0,y:0,width:178,height:220 }}
            movable={false}
            cropBoxResizable={false}
            onInitialized={this.onCropperInit}
            />
        </>
        );
    }
}

export default Crop;
