// import React from "react";

// import Img1 from "../images/mirzapur_2_1611034062180_1611034072422.jpg";
// import Img2 from "../images/HD-wallpaper-naruto-neon-black-simple-anime.jpg";
// import Img3 from "../images/p13004312_b_v8_au.jpg";

// const Books = () => {

//   // const Img1 =require('../images/book-1.jpg')
//   // const Img2 =require('../images/book-2.jpg')
//   // const Img3 =require('../images/book-3.jpg')

//   const books = [
//     {
//       id: 1,
//       name: "Naveen",
//       title: "Mirzapur",
//       img: Img1,
//     },
//     {
//       id: 2,
//       name: "Mounish",
//       title: "naruto,death note,jujutsu kaisan,aot",
//       img: Img2,
//     },
//     {
//       id: 3,
//       name: "Gajandra",
//       title: "The Vampire diaries",
//       img: Img3,
//     },
//   ];

//   console.log(books);

//   return (
//     <div style={{display:'flex'}}>
//       {books.map((data) => (
//         <div key={data.id}>
//           {data.id && <p>{data.id}</p>}
//           {data.name && <p>{data.name}</p>}

//           {data.title && <p>{data.title}</p>}

//           {data.img && <img src={data.img} alt=""/>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Books;

// import Img1 from "../images/book-1.jpg";
// import Img2 from "../images/book-2.jpg";
// import Img3 from "../images/book-3.jpg";

const Img1 =require('../images/book-1.jpg')
const Img2 =require('../images/book-2.jpg')
const Img3 =require('../images/book-3.jpg')

export const books = [
  {
    name: "Naveen",
    title: "Mirzapur",
    img: Img1,
    id: 1,
  },
  {
    name: "Mounish",
    title: "Money Hiest",
    img: Img2,
    id: 2,
  },
  {
    name: "Gaja",
    title: "Vampair Daires",
    img: Img3,
    id: 3,
  },
];

// console.log(books);
