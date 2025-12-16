import React from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
import emptyImg from "../../assets/EmptyLikeSection/Empty.png";
const EmptyLikeList = () => {
  return (
    <>
      <div
    className="bg-[#F8F9FB] text-text-light dark:text-text-dark font-sans min-h-screen flex flex-col transition-colors duration-200">
    
    <main className="flex-grow container mx-auto px-4 lg:px-8 py-8 flex flex-col">
       
        <div className="flex-grow flex flex-col items-center justify-center py-12 lg:py-20 text-center animate-fade-in-up">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl">
                </div>
                <div className="relative z-40 w-full h-full flex items-center justify-center mb-8">
                    {/* <svg className="w-full h-full text-gray-300 dark:text-zinc-700" fill="none" viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z"
                            fill="currentColor" fillOpacity="0.1"></path>
                        <path
                            d="M65 100C65 108.284 58.2843 115 50 115C41.7157 115 35 108.284 35 100M165 100C165 108.284 158.284 115 150 115C141.716 115 135 108.284 135 100"
                            stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
                        <path d="M70 70L80 50M130 70L120 50" stroke="currentColor" strokeLinecap="round"
                            strokeWidth="6"></path>
                        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeDasharray="10 10"
                            strokeWidth="4"></circle>
                        <path d="M80 130C90 140 110 140 120 130" stroke="currentColor" strokeLinecap="round"
                            strokeWidth="6"></path>
                        
                    </svg> */}
                    
                    <Image src={emptyImg} alt="" className='object-fill w-[600px] scale-200'/>
                </div>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                No Liked Recipes Yet
            </h1>
            <p
                className="text-subtext-light dark:text-subtext-dark text-lg lg:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                Your cookbook is looking a little empty! Tap the heart icon on any recipe you love to save it here for
                later.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 bg-green-300"
                    href="#">
                    <span className="material-icons"><RestaurantMenuIcon/></span>
                    Explore Recipes
                </a>
                <a className="bg-white  border border-gray-200 hover:border-primary dark:hover:border-primary text-text-light dark:text-text-dark px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-md transition-all flex items-center justify-center gap-2"
                    href="#">
                    <span className="material-icons text-secondary"><WhatshotIcon/></span>
                    Trending Now
                </a>
            </div>
        </div>
        
    </main>
</div>  
    </>
  )
}

export default EmptyLikeList