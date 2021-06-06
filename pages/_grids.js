import Head from "next/head";
import Image from "next/image";

export default function Grid() {
  return (
    <section class="text-gray-700 ">
      <div class="container items-center px-5 py-8 mx-auto">
        <div class="flex flex-wrap mb-12 text-left">
          <div class="w-full mx-auto lg:w-1/3">
            <div class="p-6">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                Let's be honest, we don't recycle
              </h1>
              <p class="mx-auto text-base font-medium leading-relaxed text-gray-500 ">
                Recycling is annnyoing. We hate it, you hate it. Everyone tells
                you, you need to recycle. though, actually figuring it all out
                is annnyoing.
              </p>
            </div>
          </div>
          <div class="w-full mx-auto lg:w-1/3">
            <div class="p-6">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                It's confusing{" "}
              </h1>
              <p class="mx-auto text-base font-medium leading-relaxed text-gray-500 ">
                Is this{" "}
                <a href="https://TimHortons.com" className="text-blue-500">
                  {" "}
                  Tim hortons Coffee
                </a>
                , recyable? or is not? Some items may seem like they are, yet
                they're not. Let's actually fix that
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
