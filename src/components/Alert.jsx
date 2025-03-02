import React from 'react'

const capitalize = (word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show top-0`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
