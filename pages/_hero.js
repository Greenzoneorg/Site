import Head from 'next/head'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="text-gray-700 ">
            <div className="container flex flex-col px-5 mx-auto lg:items-center">
              <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> Greenzone</h1>
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 "> The Easiest Way to find if items are recyable and help the eviorment </p>
                
                <br/>
                

  
              </div>
            </div>
          </section>
    )
}