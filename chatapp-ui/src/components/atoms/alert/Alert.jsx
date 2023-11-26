import React from 'react'
import { Alert as RAlert } from 'antd';
const Alert = ({successMessage,type,style}) => {
  return (
    <RAlert message={successMessage} type={type} style={style} />
  )
}

export default Alert;