import React from 'react'

function CardsDisplay(props) {
  return (
    <div
    key={props.index}
    className={`animate-bounce z-10 shadow-md border-1 rounded-full flex justify-center items-center py-[6px] px-[20px] absolute`}
    style={{
      backgroundColor: `${props.backGroundColor}`,
      top: `${
        props.funcCond === "lg"
          ? props.lgTop
          : props.funcCond === "md"
          ? props.mdTop
          : props.mdTop
      }px`,
      left: `${
        props.funcCond === "lg"
          ? props.lgLeft
          : props.funcCond === "md"
          ? props.mdLeft
          : props.left
      }px`,
      right: `${
        props.funcCond === "phone" ? props.right : null
      }`,
      rotate: `${props.rotation}`,
      animationDuration: `${props.duration}s`,
    }}
  >
    <p style={{ color: `${props.textColor}` }}>{props.text}</p>
  </div>  )
}

export default CardsDisplay