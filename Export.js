import React, { useState } from 'react';  
  
function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(1);
//   Upper case is not working here
// data to be fetched here
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me here
      </button>  
    </div>  
  );  
}  
export default CountApp;  