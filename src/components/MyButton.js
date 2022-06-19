import React from 'react'

const MyButton = ({title, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{title}</button>
  )
}

export default MyButton
