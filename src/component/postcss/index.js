/* Shared */
// @import "./colors.css";
// @import "./typo.css";
/* Components */
//@import "./article.css";

import React, { Component } from 'react';
import style from "./article.css";
console.log(style)
class Pxample extends Component{
    render() {
        return (
            <div>
                <div className={style.title}>
                   <p>TITLE</p>
                </div>
                <div className={style.article}>
                  <p>ARTICLE</p>
                </div>
            </div>
        )
    }
}

export default Pxample
