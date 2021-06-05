import Head from 'next/head'
import Image from 'next/image'

export default function Grid() {
    return (
<section class="text-gray-700 ">
<div class="container items-center px-5 py-8 mx-auto">
  <div class="flex flex-wrap mb-12 text-left">
    <div class="w-full mx-auto lg:w-1/3">
      <div class="p-6">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
          </svg>
        </div>
        <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> Let's be honest, we don't recyale</h1>
        <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 ">Recycling is annnyoing. We hate it, you hate it. Everyone tells you, you need to recycle.
though, actually figuring it all out is annnyoing.</p>
      </div>
    </div>
    <div class="w-full mx-auto lg:w-1/3">
      <div class="p-6">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
          </svg>
        </div>
        <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"> It's confusing </h1>
        <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 ">Does this <a href="https://TimHortons.com" className="text-blue-700"> Tim hortons Coffee</a>, recyable?  or is not? Some items may seem like they are, yet they're not. Let's actually fix that</p>
      </div>
    </div>
  </div>
</div>
</section>
    )
}