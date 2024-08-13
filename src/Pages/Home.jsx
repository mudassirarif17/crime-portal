import React from 'react'
import Layout from "../Pages/Layout";
import bookmark from "../assets/bookmark.png";
import cardLogo from "../assets/crime-card-icon.png";


const Home = () => {
  const CrimeCard = () => (
    <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
      <div className="card-top w-[96%] mx-auto flex justify-between items-center">
        <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
        <img src={bookmark} alt="Bookmark" />
      </div>
      <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
        <div className="logo">
          <img src={cardLogo} alt="Card logo" />
        </div>
        <div className="desc">
          <h1 className='font-semibold text-2xl'>Crime Reports Of 2023</h1>
          <p className='font-light text-md'>Karachi East, West, South, North</p>
        </div>
      </div>
      <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
        <button className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See More</button>
      </div>
    </div>
  );


  return (
    <Layout>
      <div className="contact">
        <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
          <h1 className="text-5xl font-semibold">Home</h1>
        </div>

        <div className="after-hero w-[92vw] md:w-[85vw] mx-auto px-4 my-10">
          <h1 className='font-bold text-xl md:text-5xl'>Recent Crimes Happened</h1>
          <div className="desc flex justify-between my-3">
            <p className="font-light text-sm w-[80%]">Stay informed and vigilant with our comprehensive datab</p>
            <a className='text-[#309689] text-sm md:text-xl font-semibold' href="">View all</a>
          </div>
        </div>

        <div className="crime-cards w-[90vw] mx-auto">
          <CrimeCard />
          <CrimeCard />
        </div>

        <div className="crime-category">
          
        </div>

      </div>
    </Layout>
  )
}

export default Home
