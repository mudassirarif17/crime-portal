import React from 'react'
import Layout from "../Pages/Layout";
import bookmark from "../assets/bookmark.png";
import cardLogo from "../assets/crime-card-icon.png";
import quotes from "../assets/Quotes.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import arrow from "../assets/arrow-right.png";



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

        <div className="crime-category bg-[#dffaf6]">
            <h1 className='text-center font-bold text-4xl py-5'>Browse by Crime Category</h1>
            <p className='text-center font-light'>Explore Crime Types and Patterns</p>
          <div class="grid w-[85%] mx-auto cols-1 md:grid-cols-4 gap-4 py-10">

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>MURDER</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>20</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>TARGETED KILLING</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>50</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>MURDER DURING ROBBERY</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>10</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>BOMB BLAST</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>2</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>HIGH WAY ROBBERY</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>30</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>BANK ROBBERY</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>10</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>CAR SNATCHING</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>25</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>GANG RAPE</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>12</p>
            </div>

          </div>
        </div>
        
        <div className="community flex flex-col md:flex-row justify-between items-center">
            <div className="comm-left flex  justify-between gap-2 w-[100%] md:w-[45%] h-[50vh]">
              <div className="comm-left-l">
                {/* <img className='h-[50vh] w-[32vh] md:w-[37vh]' src={laptop} alt="" /> */}
              </div>
              <div className="comm-left-r flex flex-col justify-between">
                {/* <img className='h-[28vh] w-[33vh] md:w-[38vh]' src={manLaptop} alt="" /> */}
                {/* <img className='h-[20vh] w-[33vh] md:w-[38vh]' src={community} alt="" /> */}
              </div>
            </div>

            <div className="comm-right md:w-[50%] ">
              <div className="top px-4">
                <h1 className='font-bold text-lg md:text-4xl my-2'>Enhancing Community</h1>
                <h1 className='font-bold text-lg md:text-4xl text-[#309689] my-2'>Safety Together</h1>
                <p className='font-light text-sm'>In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. </p>
              </div>

              <div className="btm px-4 my-4">
                <div className="btm-top flex flex-col md:flex-row">
                  
                </div>
                <div className="btm-btm my-2  flex flex-col md:flex-row">
                 
                </div>
              </div>

            </div>

          </div>

        <div className="response-people bg-[#dffaf6] mt-10">
            <h1 className='text-center font-bold text-4xl py-5'>Response From People On Complaints</h1>
            <p className='text-center font-light'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id ...</p>
          <div class="grid w-[85%] mx-auto cols-1 md:grid-cols-3 gap-4 py-10">

            <div className="card cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
              <div className="desc px-5 py-5">
                <h1 className='text-xl font-bold'>Robbery Incident Reported</h1>
                <p className='font-light text-sm'>I witnessed the incident and immediately contacted the authorities. We need to work together to increase neighborhood watch programs to prevent further occurrences.</p>
              </div>
              <div className="icons px-5 flex justify-end">
                <img src={quotes} alt="" />
              </div>
              <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                <p>Anonymous</p>
              </div>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
              <div className="desc px-5 py-5">
                <h1 className='text-xl font-bold'>Snatching Incident on Main Street</h1>
                <p className='font-light text-sm'>This is alarming! We should organize a community meeting to discuss safety measures and possibly install more street lights in the area.</p>
              </div>
              <div className="icons px-5 flex justify-end">
                <img src={quotes} alt="" />
              </div>
              <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                <p>Anonymous</p>
              </div>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
              <div className="desc px-5 py-5">
                <h1 className='text-xl font-bold'>Addressing Gang Rape</h1>
                <p className='font-light text-sm'>This is a devastating incident that requires urgent action. We must support the victims and advocate for stronger community support services and educational programs ...</p>
              </div>
              <div className="icons px-5 flex justify-end">
                <img src={quotes} alt="" />
              </div>
              <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                <p>Anonymous</p>
              </div>
            </div>

          </div>
        </div>

        <div className='news-and-blog w-[90vw]  mx-auto my-10'>
          <div className="desc">
            <h1 className='text-xl md:text-3xl font-bold'>News and Blog Of Recent Crimes</h1>
            <p className='py-3 text-sm md:text-md font-light'>Crime in Karachi: What’s Happening Now?</p>
          </div>
          <div className="btm my-4 flex flex-col md:flex-row justify-between">
            <div className="btm-left w-[100%] md:w-[48%]">
              <img src={blog2} alt="" />
              <div className="desc py-2 px-2">
                <p className="date text-sm font-light">17 Feb</p>
                <h1 className='font-bold text-lg md:text-2xl'>CCTV footage: Thief uses child as a cover while lifting bike in Karachi
                </h1>
                <div className='flex gap-2 items-center my-2'>
                  <h1 className='text-[#309689] text-sm md:text-md font-semibold'>Read More</h1>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="btm-right w-[100%] md:w-[48%]">
              <img src={blog1} alt="" />
              <div className="desc py-2 px-2">
                <p className="date text-sm font-light">24 Jan</p>
                <h1 className='font-bold text-lg md:text-2xl'>Lyari gang war criminals among 25 arrested in Karachi</h1>
                <div className='flex gap-2 items-center my-2'>
                  <h1 className='text-[#309689] text-sm md:text-md font-semibold'>Read More</h1>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home
