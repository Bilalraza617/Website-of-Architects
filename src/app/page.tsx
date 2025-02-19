import React from "react";
import Image from "next/image";
import img from "../../public/Rectangle 6.png";
import img1 from "../../public/Group 13@2x.png";
import img2 from "../../public/Group 20.png";
import img3 from "../../public/Group 79.png";
export default function page() {
  return (
    <div className="m-10">
      <div className="flex justify-center gap-72">
        <div>
          <h1 className="font-light text-5xl text-stone-400 mt-64 ml-14">
            Project
          </h1>
          <h2 className="font-extrabold text-5xl mt-3 ml-14">lorem</h2>
        </div>
        <div className="flex justify-items-end">
          <Image src={img} alt="" />
        </div>
      </div>

      <div className="md:mr-14 md:ml-14 mt-14">
        <div>
          <div>
            2<div>p</div>
            <div>p</div>
          </div>
          <div>c</div>
        </div>
      </div>
      <div className=" lg:ml-14 mt-14">
        <h1 className="font-light text-5xl text-stone-200 mt-5 ml-14">
          Main Focus/Mission Statement
        </h1>
        <div className="block sm:flex sm:gap-16">
          <div className="flex justify-center ">
            <h1 className="font-bold text-[200px] text-stone-200 lg:ml-14">
              1
            </h1>

            <div className=" sm:block sm:w-64 ml-10 ">
              <p className="mt-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                possimus exercitationem magni,Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ea possimus exercitationem magni,{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="font-bold text-[200px] text-stone-200  lg:ml-36">
              2
            </h1>

            <div className=" sm:block sm:w-64 ml-10 ">
              <p className="mt-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                possimus exercitationem magni,Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ea possimus exercitationem magni,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="font-light text-3xl md:text-5xl text-gray-400 mt-5  lg:ml-24 ">
          our Project
        </h1>
        <div className=" mt-10 sm:flex justify-center gap-10 ">
          <div className="mt-5">
            <img
              className="w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="mt-5">
            <img
              className="w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
        <div className="gap-y-3 sm:flex justify-center gap-5">
          <div className="mt-5">
            <img
              className="w-[400px] h-[100px] sm:w-[350px] sm:h-[200px] md:w-[400px] md:h-[200px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwkJBSabTrMjX8_jkWp2eu65RszRSttnMfQ&s"
              alt=""
            />
          </div>
          <div className="mt-5">
            <img
              className="w-[400px] h-[100px] sm:w-[350px] sm:h-[200px] md:w-[400px] md:h-[200px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQM6z80u1Poo9KUfwAc6gJRqa52fV8LX9qw&s"
              alt=""
            />
          </div>
          <div className="mt-5">
            <img
              className="w-[400px] h-[100px] sm:w-[350px] sm:h-[200px] md:w-[400px] md:h-[200px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_h0ieEID48wL49v0tnGq26bT3ymnMx5bXQ&s"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-light text-3xl md:text-5xl text-gray-400 mt-5  lg:ml-36 ">
          Contact Us
        </h1>
        <div className="hero mt-10  ">
          <div className="hero-content flex-col lg:flex-row-reverse gap-40">
            <div className="text-center lg:text-left">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                width={600}
                height={600}
              />
            </div>
            <div className="card w-full max-w-sm  shadow-sm ">
              <form className="card-body gap-5">
                <div className="form-control gap-3">
                  <input
                    type="password"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Intrested In"
                    className="input input-bordered"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Messege"
                    className="input input-bordered"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-neutral ml-56">Send Email</button>
    </div>
  );
}
