import React from 'react';
import ReactDom from 'react-dom';

function Hola() {
  return <>
    <div>
    Adios 
    </div>

  </>
}

ReactDom.render(<Hola/>, document.getElementById('root'));