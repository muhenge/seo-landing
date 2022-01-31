import React from 'react';

const Cards = (props) => {
  return (
    <>
     <div id={props.id} className={props.className+" card card-frame shadow"}>
        <div className="card-body">
          {props.children}
        </div>
     </div>
    </>
  )
}

export default Cards