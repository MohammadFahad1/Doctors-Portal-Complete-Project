import React from 'react';
import chairImage from "./../../../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse my-5">
            <div>
                <img src={chairImage} className='w-full shadow' alt="" />
            </div>
            <div className="text-center lg:text-left md:pr-5">
                <h1 className="text-5xl font-bold">Pick Schedule of a Doctor!</h1>
                <p className="py-6">Welcome to the doctors portal, here you will find doctors from all around the world and pick there schedule for checkup.</p>
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded border-0">GET STARTED</button>
            </div>
        </div>
    );
};

export default Banner;