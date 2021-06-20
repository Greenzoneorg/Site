import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Hero() {
  return (
    <section className="fontt">
      <div className="container flex flex-col px-5 mx-auto lg:items-center">
        <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
          <h1 className="mb-6 montserrat text-2xl font-semibold tracking-wider text-white sm:text-5xl title-font">
            {" "}
            Greenzone
             
          </h1>
          <p className="mx-auto DMSans text-base font-medium leading-relaxed text-grey-500">
   
            {" "}
          
            The Easiest Way to find if items are recyable and help the eviorment{" "}
          </p>

          <br />
        </div>
      </div>
    </section>
  );
}
