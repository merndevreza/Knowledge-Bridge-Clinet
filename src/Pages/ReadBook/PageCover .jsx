import React from 'react';

const PageCover  = (props, ref) => {
   return (
      <div className="page page-cover" ref={ref} data-density="hard">
       <div className="page-content">
         <h2>{props.children}</h2>
       </div>
     </div>
   );
};

export default PageCover ;
