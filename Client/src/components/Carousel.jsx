import { useState, useEffect } from "react"
import avatar6 from "../assets/images/avatar6.jpg"
import rodeo2 from "../assets/images/rodeo2.jpg"
import ski from "../assets/images/ski.jpg"
import ski2 from "../assets/images/ski2.jpg"
import meet2 from "../assets/images/meet2.jpg"





const Carousel = () => {
  const [ currentCarouselImage, setCurrentCarouselImage ] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    if (currentCarouselImage > 3) {
      setCurrentCarouselImage(0)
    }
    else {
      setCurrentCarouselImage(currentCarouselImage + 1)
    }
    }, 3000)
    return () => clearInterval(timer)
  })

  return (
    <div
      id="default-carousel"
      className="absolute w-3/4 "
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-1/4 w-3/6 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className={`duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 ${currentCarouselImage === 0 ? "active" : "hidden"}`} data-carousel-item>
          <img
            src={avatar6}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className={`duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 ${currentCarouselImage === 1 ? "active" : "hidden"}`} data-carousel-item>
          <img
            src={rodeo2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className={`duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 ${currentCarouselImage === 2 ? "active" : "hidden"}`} data-carousel-item>
          <img
            src={ski}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div className={`duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 ${currentCarouselImage === 3 ? "active" : "hidden"}`} data-carousel-item>
          <img
            src={ski2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 5 --> */}
        <div className={`duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 ${currentCarouselImage === 4 ? "active" : "hidden"}`} data-carousel-item>
          <img
            src={meet2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>

      {/* <!-- Slider controls --> */}
  
      <button 
       onClick={() => setCurrentCarouselImage(currentCarouselImage - 1)}
      type="button" 
      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button 
    onClick={() => setCurrentCarouselImage(currentCarouselImage + 1)}
    type="button" 
    className="absolute top-0 end-0 me-96 pe-86 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    </div>
  )
}
export default Carousel