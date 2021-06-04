import Head from 'next/head'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="text-gray-700 ">
            <div className="container flex flex-col px-5 py-20 mx-auto lg:items-center">
              <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> A medium length headline. </h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3"> You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing . </p>
              </div>
              <div className="flex flex-col w-full px-0 mx-auto lg:w-2/3 sm:flex-row md:px-8">
                <input className="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder="Your Name" type="text"/>
                <input className="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder="Your Email" type="email"/>
                <button className="flex items-center justify-center w-1/2 px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Sign Up</button>
              </div>
              <p className="w-full mt-12 mb-8 text-sm text-gray-500 lg:text-center">Neutra shabby chic ramps, viral fixie. <a href="#" className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Learn More <svg className="w-4 h-4 ml-2" xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                  </svg>
                </a>
              </p>
            </div>
          </section>
    )
}