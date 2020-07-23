import React, { Component } from 'react'
import { v4 } from 'uuid'

import styles from './index.css'

let baseIndex = 12

class Toast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toasts: [],
      zindex: baseIndex,
    }
  }

  componentWillUnmount() {
    const toasts = this.state.toasts
    for (var i = 0; i < toasts.length; i++) {
      clearTimeout(this[toasts[i].id])
    }
  }

  add = (msg = 'a msg is necessary', {expire = 5000, type = 'default', position = 'top', style={}}) => {
    const zindex = this.state.zindex + 1
    const message = {
      id: v4(),
      msg: msg,
      type: type,
      position: position,
      zindex: zindex,
      style: style,
      expire: expire,
    }
    this.setState({
      toasts: this.state.toasts.concat(message),
      zindex: zindex,
    }, () => this.clearOnExpire(message.id, expire))

    return message.id
  }

  remove = (id)=> {
    if(!this[id]) return
    if(this.state.toasts.length === 1) {
      this.setState({
        zindex: baseIndex,
      })
    }
    clearTimeout(this[id])
    delete this[id]
    this.setState({
      toasts: this.state.toasts.filter((item) => item.id !== id)
    })
  }

  clearOnExpire = (id, expire) => {
    this[id] = setTimeout(() => {
      this.remove(id)
    }, expire)
  }

  renderToastItem = (item, index)=> {
    return (
      <div
        key={item.id}
        style={{
          ...item.style,
          zIndex: item.zindex
        }}
        className={`${styles.toast} ${styles[item.type]} ${styles[item.position]}`}
      >
        <div
          onClick={() => this.remove(item.id)}
          className={styles.cancel}
        >
        </div>
        {item.msg}
      </div>
    )
  }

  renderToasts = () => {
    return this.state.toasts.map((item, index) => this.renderToastItem(item, index))
  }

  render() {
    return (
      <>
        ABC
        { this.renderToasts() }
      </>
    )
  }
}

export default Toast
