import React from "react";
import photo from "../assets/Design/dimas.png";
import email from "../assets/Icon/gmail.png";
import linkdin from "../assets/Icon/linkedin.png";
import ig from "../assets/Icon/instagram.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
        <div className="w-full mt-[20px] inline-block">
            <Navbar />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-4 md:mx-auto mt-[50px]">
        <div>
          <h1 className="text-white text-[55px] font-bold">
            I’m Dimas Julio Cessar. Live in Tangerang City and i'm student of Esa
            Unggul University.
          </h1>
          <p className=" text-[#9999A1] text-[20px] py-5 cursor-default">
            I was born and raised in Tangerang City, when I attended SMKN 1
            Tangerang City, I was a very active person in extracurricular
            activities.<br/><br/>
            I had participated in several city-level competitions
            and managed to achieve several achievements.I am a perfectionist,
            sometimes I do my assignments very neatly, even the front cover of
            my assignments is always the same for 6 semesters when I am
            currently in college.<br/><br/>
             I studied at Esa Unggul University, I got a
            recommendation to take part in activities such as DPMF because I am
            trusted in the field I occupy, namely the Aspiration Expert Staff,
            and I'm currently taking an independent study from the Generasi
            GIGIH 2.0 by YABB & GoTo held by Kampus Merdeka. and that's my
            journey so far.
          </p>
        </div>
        <div className="my-5">
          <img src={photo} alt="/" className="mx-auto max-w-[389px] h-auto origin-center -rotate-6 hover:-rotate-0 ease-in-out duration-300 scale-100 hover:scale-105" />
          <div className="grid grid-rows-3 grid-flow-col gap-3 text-white mt-10">
          <img src={ig} alt="/" className="w-[40px] h-auto mx-auto my-auto"/>
          <img src={linkdin} alt="/" className="w-[40px] h-auto mx-auto my-auto"/>
          <img src={email} alt="/" className="w-[40px] h-auto mx-auto my-auto"/>
          <p className="my-auto text-white hover:text-[#00df9a] cursor-pointer"><a href="https://www.instagram.com/moskujh_/?hl=id" target="_blank" rel="noreferrer">Follow Me in Instagram</a></p>
          <p className="my-auto text-white hover:text-[#00df9a] cursor-pointer"><a href="https://www.linkedin.com/in/dimas-julio-cessar-b66424222" target="_blank" rel="noreferrer">Follow Me in Linkedin</a></p>
          <p className="my-auto text-white hover:text-[#00df9a] cursor-default">dimasjc08@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
