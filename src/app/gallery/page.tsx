import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex-col items-center">
      <div>
        <h1 className="font-light text-5xl text-stone-400 mt-5 ml-14">Photo</h1>
        <h2 className="font-extrabold text-5xl mt-3 ml-14">Gallery</h2>
      </div>
      <br />
      <div className="flex justify-center flex-wrap gap-4 mt-5">
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCoM5IDJYeuYGDJj6cW4s8bXPavJksJq9ew&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVIzN6EKeeqJbyD-rOx3Zjuri8M1vDjEgYw&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpRby9fNIe-UpG33J1zxPaTvTQMzDDgRF8A&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-5">
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
        <div>
          <Image
            alt="Image"
            className="w-[300px] h-[320px] md:w-[230px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s"
          />
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

// dasaaxma;lmxa

// <div>
//     <h1 className='font-light text-5xl text-stone-400 mt-5 ml-14'>Photo</h1>
//     <h2 className='font-extrabold text-5xl mt-3 ml-14'>Gallery</h2>
//   </div>
//   <div className='flex mt-14 gap-8 ml-14 '>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVIzN6EKeeqJbyD-rOx3Zjuri8M1vDjEgYw&s" alt="" width={230} height={250} />
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCoM5IDJYeuYGDJj6cW4s8bXPavJksJq9ew&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96IxikeLU5_hIRjVuTRFxo-nzgi58FLN8AQ&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpRby9fNIe-UpG33J1zxPaTvTQMzDDgRF8A&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r7YnppSm2lH_51AMBKd8mcHp0XXX4vcdng&s" alt="" width={230} height={250}/>
//   </div>
//   <div className='flex mt-14 gap-8 ml-14 mb-10 '>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspCIlFMDuwk2jXv0oBGvdCv72dmJiq8Xx2Q&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsjXgjpl679070AriBw-_U1iGXBmxzI6_KA&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyCr7HkItJwRPjMoZ2v-lx8boWcLRSJ35sA&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiSiVxy4SyUfwl1sIih_Am5m_Lc2_MzCJnA&s" alt="" width={230} height={250}/>
//     <Image alt='Image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq91YnrhvHT8f-HFlJq-z02NusAHDUCr6bA&s" alt="" width={230} height={250}/>
//   </div>
// </div>
