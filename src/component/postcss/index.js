
import React, { Component } from 'react';

import styles from './article.css';

class Cexample extends Component{
    render() {
        return (
            <div>
                <div className={styles.title}>
                   <p>TITLE</p>
                </div>
                <div className={styles.article}>
                  <p>ARTICLE</p>
                </div>
            </div>
        )
    }
}

export default Cexample;
