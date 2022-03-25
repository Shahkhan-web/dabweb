import React from 'react'

const Hero = () => {
   
  return (
    <div class="hero min-h-screen place-items-start" style={{backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)"}}>
    <div class="hero-overlay bg-opacity-30 p-0 t"></div>
    <div className='m-6'>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
  
  )
}

export default Hero