import React from 'react'
import B from './B';

export const A = () => {
    const greet = "Hello";
  return (
    <div>
        <B greet={greet}/>
    </div>
  )
}
export default A