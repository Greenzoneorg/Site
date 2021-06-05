import Head from 'next/head'
import Image from 'next/image'

export default function arav() {
    return (
        <section className="text-gray-700 ">
            <div className="container flex flex-col px-5 mx-auto lg:items-center">
              <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> About</h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 "> The Easiest Way to find if items are recyable and help the eviorment </p>
                <button className="bg-blue-00"> About </button>
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