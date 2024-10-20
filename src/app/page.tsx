'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { VscVscode } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";


export default function Home(){
  return(
    <main>
      <div style={{backgroundImage:"url('/images/bg.jpg')"}}>
        <h1 className='text-white p-5 text-3xl flex justify-center '> Welcome To My Website</h1>
      </div>
      <title>Hammad Ali Portfolio</title>
      <header className="text-gray-300 bg-gray-700 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img className='w-9 h-9 rounded-lg' src="images/profile.jpg" alt="profile" />
      <span className="ml-3 text-xl">Hammad Ali</span>
    </a>
    <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white">Home</a>
      <a className="mr-5 hover:text-white">About US</a>
      <a className="mr-5 hover:text-white">Contact US</a>
      <a className="mr-5 hover:text-white">Privacy Policy</a>
    </nav>
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0">Github
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

{/* Hero section*/}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">

    {/* Image Tag */}

    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="image" src="images/hammad.jpg"/>
    
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><Typewriter
  options={{
    strings: ['Digital Enterprenure', 'SEO Specialist', 'Web Developer'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <p className="mb-8 leading-relaxed">I am Hammad Ali, a passionate IT student specializing in frontend development, with hands-on experience in HTML, CSS, JavaScript, and modern frameworks like Next.js. I create clean, responsive, and user-friendly websites that provide excellent user experiences. Explore my projects and see how I bring innovative ideas to life through code!.</p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">NewsLetter</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Subscribe Now</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
      <div className="flex text-gray-300">
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-purple-500 hover:text-white focus:outline-none">
          <img className='w-10 h-10' src="images/instagram.jpg" alt="" />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-white mb-1">GET Touch On Insta</span>
            <span className="title-font font-medium">@ham_mad_alii.99</span>
          </span>
        </button>
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-green-600 hover:text-white focus:outline-none">
          <img className='w-10 h-10' src="images/whatsapp.png" alt="whats" />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-white mb-1">Chat with us on</span>
            <span className="title-font font-medium">Whatsapp</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

{/* Feature Section */}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-10     mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium text-center title-font text-cyan-500 mb-4">Project features and Commands</h1>
      <p className="text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">Explore the essential features of each typescript project and easily run them using the npx command provided below:</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:Calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:atm</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start to-do list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:Currency Converter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:oopbank</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start:cli-number-guessing-game</span>
        </div>
      </div>

      {/*From Button Section*/}

    </div>   
    <button className="flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-500 hover:bg-opacity-100 bg-blue-500 focus:outline-none">
        <img className='w-10 h-10 rounded-xl' src="images/git.png" alt="logo" />
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white font-bold mb-1 ">Visit GIT HUB</span>
          <span className="title-font font-bold text-black">@Hammadali23</span>
        </span>
      </button>
  </div>

  {/*react icon use*/}

  <section>
  <div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl'>

    <div className='flex flex-col items-center bg-white border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
    <VscVscode className='text-sky-500 text-6xl' />
    <span className='mt-2 text-lg text-black'>Visual Studio Code</span>
    </div>

    <div className='flex flex-col items-center bg-white border-2 border-yellow-400 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
    <FaGithubSquare className='text-black text-6xl' />
    <span className='mt-2 text-lg text-black'>GITHUB Account </span>
    </div>

    {/*TypeWriter Effect*/}

    <h1 className='title-font sm:text-4xl text-3xl  mb-4 font medium text-white'><Typewriter options={{
      strings:['Development Tools and frame work'],
      autoStart: true,
      loop: true,
    }}
    /></h1>
  </div>
</section>

{/*contact us */}

<section className='text-gray-400 bg-gray-900 body-font p-4 mt-28'>
  <div className='container px-5 py-5 mx-auto'>
    <div className='flex flex-col text-center w-full mb-20'>
      <h1 className='text-4xl font-black p-0 title-font mb-4 text-yellow-600 tracking-widst uppercase'>Contact US</h1>
      <p className='lg:w-2/3 mx-auto leading-relaxed text-xl'>Fill the from below for any queries</p>
    </div>
  </div>

<section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900">
    <iframe title="map" width="100%" height="100%"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"/> 
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-black shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5">Please fill this form if you have any queries or complains or if you have any message for us </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Read our any privacy policy for any issues. </p>
    </div>
  </div>
</section>
</section>

{/*Footer*/}

<footer className="text-gray-400 bg-gray-900 body-font p-2 mt-16">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <img className='w-9 h-9 rounded-lg' src="images/profile.jpg" alt="profile" />
    <span className="ml-3 text-xl">Hammad Ali</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Hammad Ali -
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">malik.hammad.ali78@gmail.com</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>

</section>
     </main>
  )
}

