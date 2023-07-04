import React from "react";
import { shirts } from "../data/shirts";
import ButtonGroup from "./buttonGroup";

const ShirtItems = () => {
  return (
    <div style={{ display: "flex" }} className="text-center row">
      {shirts.map((item) => {
        return (
          <div className="px-4 col" key={item.brand}>
            <img
              src={item.img}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
            <h4>{item.brand}</h4>
            <p>{item.size}</p>

            <div className="d-flex gap-5 justify-content-center ">
              <ButtonGroup item={item.brand} />
            </div>
            <hr />
            <div className="shadow-lg p-3 mb-5  rounded">Larger shadow</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShirtItems;

// import React from 'react'
// import { shirts } from '../data/shirts'
// import ButtonGroup from './buttonGroup'

// const ShirtItems = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }} className='text-center'>
//       {shirts.map((item) => {
//         return (
//           <div className='px-5' key={item.id} style={{ flex: '0 0 33%', padding: '1rem' }}>
//             <img src={item.img} alt='' style={{ width: '100%', height: 'auto', maxHeight: '400px' }} />
//             <h4>{item.brand}</h4>
//             <p>{item.id}</p>

//             <div className='d-flex gap-5 justify-content-center '>
//               <ButtonGroup shirts={item.brand} />
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default ShirtItems;
