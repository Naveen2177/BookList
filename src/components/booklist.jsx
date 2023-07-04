import React from 'react'
import {books} from '../data/books'
import ButtonGroup from './buttonGroup'

const Booklist = () => {
  return (
    <div style={{display:'flex'}} className=''>
        {
            books.map((data)=>{
                return(
                    <div className='text-center' key={data.id}>
                        <img src={data.img} alt='png' style={{width:'500px'}}/>
                        <h3>{data.title}</h3>
                        <p>{data.name}</p>
                        
                        <div className='d-flex gap-5 justify-content-center'>
                           <ButtonGroup  title={data.title}/>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}




export default Booklist;




// import React from 'react'
// import { books } from '../data/books'
// import ButtonGroup from './buttonGroup'

// const Booklist = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {books.map((data) => {
//         return (
//           <div className='text-center' key={data.id} style={{ flex: '0 0 33%', padding: '1rem' }}>
//             <img src={data.img} alt='png' style={{ width: '100%' }} />
//             <h3>{data.title}</h3>
//             <p>{data.name}</p>

//             <div className='d-flex gap-5 justify-content-center'>
//               <ButtonGroup books={data.name} />
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Booklist;
