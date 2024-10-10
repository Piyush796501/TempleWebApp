import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MainHeader()
{
  return <h1>React course</h1>;
}
function SubHeader()
{
  return <h1>Welcome</h1>;
}
root.render(<div><MainHeader /><SubHeader /></div>);

