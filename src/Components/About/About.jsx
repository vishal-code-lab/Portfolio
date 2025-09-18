import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div>
      <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>

<div className='flex flex-col-reverse md:flex-row justify-between items-center'>
  {/* left side */}
<div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
  {/* greeting */}
  <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2'>Hi, I am</h1>
  {/* Name */}
  <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Vishal</h2>
  {/* skills heading with typing effect */}
<h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
  I am a{" "}
  { <TypeAnimation
    sequence={[
      'Frontend Developer', // type this
      2000,                 // wait 2 sec
      '',                   // erase it
      1000                  // wait 1 sec before retyping
    ]}
    speed={50}
    repeat={Infinity}  // infinite loop
    cursor={true}      // blinking cursor
  /> }
</h3>

{/* About me paragraph */}
<p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>As a frontend developer, I specialize in building user-friendly and visually appealing web interfaces that bring ideas to life. My focus is on creating responsive, accessible, and high-performance applications using modern technologies like HTML, CSS, JavaScript, and frameworks such as React. I enjoy turning complex problems into simple, intuitive designs and ensuring a seamless user experience across devices.</p>

{/* Resume Button */}

<a 
  href="f" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-100 transform hover:scale-105"
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 40px #8245ec'
  }}
>
  DOWNLOAD CV
</a>



  

</div>
{/*right side photo */}
<div className='md:w-1/2 flex justify-center md:justify-end'>
<Tilt 
className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
tiltMaxAngleX={20}
tiltMaxAngleY={20}
perspective={1000}
scale={1.05}
transitionSpeed={1000}
gyroscope={true}>
  <img src={profile} alt="" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20x_rgba(130,69,236,0.5)] overflow-hidden' />
</Tilt>
  
</div>


</div>
      </section>
    </div>
  )
}

export default About