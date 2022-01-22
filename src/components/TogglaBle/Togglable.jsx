import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  } 

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal" onClick={toggleVisibility}>{props.buttonLabelShow}</button>
      </div>
      <div style={showWhenVisible}>
         <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal" style={{backgroundColor: '#db4025'}} onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'Cancel'}</button>
         {props.children}
      </div>
      </div>
    ) 
})

export default Togglable