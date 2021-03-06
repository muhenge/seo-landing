import React from 'react';

const Header = (props) => {
  return (
    <header id={props.id} className={props.className+" vh-100 position-relative"}>
      {props.children}
    </header>
  );
}

export default Header;
