import { IconButton } from "@material-tailwind/react";
import { GoArrowUpRight } from "react-icons/go";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { SiTesla } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiFerrari } from "react-icons/si";
import {SkillBars} from "react-skills";
import Counter from "../components/Counter.jsx";
import CircularStroke from "../components/CircularStroke.jsx";
import AnimatedDiv from "../components/AnimatedDiv.jsx";

const skillsData = [
  {
    name: "HTML",
    level: 90,
    color: "#FABC3F",
  },
  {
    name: "CSS",
    level: 85,
    color: "#E85C0D",
  },
  {
    name: "JavaScript",
    level: 88,
    color: "#C7253E",
  },
  {
    name: "React",
    level: 86,
    color: "#821131",
  },
  {
    name: "SQL",
    level: 85,
    color: "#493D9E",
  },
  {
    name: "TailWind CSS",
    level: 89,
    color: "#B2A5FF",
  },
];

const buttonGithub = () => {
  window.open('https://github.com/ridoamali', '_blank');
};

const linkWa = () => {
  window.open('https://api.whatsapp.com/send/?phone=6285755667711&text&type=phone_number&app_absent=0', '_blank');
};

const linkEdin = () => {
  window.open('https://www.linkedin.com/in/ridha-amaly-9631b11b3/', '_blank');
};

const linkDribble = () => {
  window.open('https://www.dribbble.com/ridha-amaly/', '_blank');
};

function Home() {
  return (
    <div className="bg-white">
        <div className="relative mt-10 bg-jumbotron">
          <div className="flex flex-col md:flex-row w-full bg-jumbotron text-white mx-auto max-w-5xl px-4 py-2 h-auto md:h-[35rem] ">
              {/* deskripsi-kiri  */}
              <div className="flex-1 bg-jumbotron">
                <h1 className="font-[Quantico] text-black font-bold text-2xl sm:text-3xl">Hello! I'm</h1>
              <CircularStroke />
                <p className="text-stone-500 text-base">Hi, I'm a beginner programmer skilled in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, PHP, Laravel, and databases. I focus on front-end development with some back-end knowledge. I’m learning at kelasfullstack.id and have projects on GitHub. Excited to grow and collaborate!</p>
                <br />
                <div className="mt-5 flex flex-col sm:flex-row">
                  <button 
                  className="px-6 py-3 rounded-xs bg-orange-500 font-[NUNITO] font-bold text-lg sm:px-8 sm:py-4 cursor-pointer" 
                  onClick={linkWa}>
                    LET'S TALK
                  <GoArrowUpRight className="inline text-xl"/>
                  </button>
                  {/* <button 
                  className="mx-0 px-6 py-3 rounded-xs text-black font-[NUNITO] font-bold text-lg sm:mx-4 sm:px-8 sm:py-4 cursor-pointer " 
                  onClick={buttonGithub}>
                    <span className="ml-15 size-2 relative flex">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                    <span class="relative inline-flex size-2 rounded-full bg-orange-500"></span>
                    </span>
                  VIEW PROJECTS
                  <GoArrowUpRight className="inline text-xl" />
                  </button> */}
                <button 
                  className="mx-0 px-20 py-3 rounded-xs text-black font-[NUNITO] font-bold text-lg sm:mx-4 sm:px-8 sm:py-4 cursor-pointer flex items-center" 
                  onClick={buttonGithub}>
                  
                  {/* Ping Animation */}
                  <span className="mr-2 size-3 relative flex">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
                  </span>
                  
                  {/* Text and Arrow Icon */}
                  VIEW PROJECTS
                  <GoArrowUpRight className="inline text-xl ml-2" />
                </button>
                </div>
                <div className="flex mt-10 border-b-1 border-gray-200 justify-center sm:justify-start">
                  <p className="font-[NUNITO] text-slate-950 font-bold">Check Out My 
                    <TiSocialGithubCircular className="inline-flex ml-0 text-4xl sm:ml-40 sm:text-5xl cursor-pointer hover:animate-spin" onClick={buttonGithub} />
                    <TiSocialLinkedinCircular className="inline-flex -ml-1 text-4xl sm:text-5xl cursor-pointer hover:animate-spin" onClick={linkEdin} />
                    <TiSocialDribbbleCircular className="inline-flex -ml-1 text-4xl sm:text-5xl cursor-pointer hover:animate-spin" onClick={linkDribble} />
                  </p>
                </div>
              </div>
              {/* gambar-kanan */}
              <AnimatedDiv className="flex-1 bg-stone-100/30">
              <img src="/ppdmm.jpg" alt="profile" width={350} height={200} className="sm:ml-35" loading="lazy" />
              </AnimatedDiv>
          </div>
        </div>
      {/* kotakan hitam klien terkini */}
      <AnimatedDiv className="absolute z-99 w-full h-auto sm:w-[64rem] sm:h-[12rem] bg-black text-white sm:mx-41 max-w-5xl px-4 py-2 -mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center place-content-center items-center my-8 sm:mx-4 ">
          <div className="font-[Quantico] text-xl sm:text-2xl text-white font-bold pb-5">Meet My Recent Clients 
            <br />
            <div className="text-gray-500 text-sm sm:text-[15px] sr-only sm:not-sr-only">Here are some of my clients</div>
          </div>
          <div className="font-[Nunito] text-xl sm:text-2xl">
          <SiTesla className="inline-flex text-4xl sm:text-5xl mr-2" />
            Tesla Inc.
            </div>
          <div className="font-[Nunito] text-xl sm:text-2xl">
          <SiBmw className="inline-flex text-4xl sm:text-5xl mr-2"  />
            BMW Inc.</div>
          <div className="font-[Nunito] text-xl sm:text-2xl">
          <SiFerrari className="inline-flex text-4xl sm:text-5xl mr-2"  />
            Ferrari Inc.</div>
        </div>
      </AnimatedDiv>
      {/* SESI I CAN DO FOR U */}
      <AnimatedDiv className="flex flex-col w-fit md:flex-row md:w-5xl bg-white mx-auto px-4 py-2 h-fit md:h-[40rem]">
        {/* bagian kiri */}
        <div className="flex-1 mt-40 pr-10 ">
          <p className="text-black font-[Quantico] text-4xl font-bold">What Can I Do For You</p>
          <br />
          <p className="mb-5">I can design web, front-end development, SEO optimization, digital marketing, social media design, backlinks, and things related to coding and digital marketing. Let's Collaborate !</p>
        <div className="flex h-[4rem] mb-5 ">
          <div className="flex-1 ">
            <span className="font-[quantico] text-2xl font-bold">
            <Counter className="counter" endValue={258} />
            </span>
            <br />
            <span className="font-light">Satisfied Clients</span>
          </div>
          <div className="flex-1  ">
            <span className="font-[quantico] text-2xl font-bold">
            <Counter className="counter" endValue={303} />
              </span>
            <br />
            <span className="font-light">Projects Completed</span>
          </div>
        </div>
        <div className="flex h-[4rem] ">
          <div className="flex-1 ">
            <span className="font-[quantico] text-2xl font-bold">
              <Counter className="counter" endValue={5} />
              </span>
            <br />
            <span className="font-light">Years of Experience</span>
          </div>
          <div className="flex-1  bg-black text-white text-center ">
            <span className="font-[quantico] text-xl md:text-2xl font-bold">CERTIFIED SOFTWARE DEV</span>
          </div>
        </div>
        </div>
        {/* bagian kanan */}
        <div className="flex-1 my-10 md:mt-50 bg-keramik h-77 px-5 content-center ">
          <div className="flex  p-2 m-2">
            <div className="flex-1  ">
              <img src="/thumb1.png" alt="thumb projects" />
            </div>
            <div className="flex-2  ">
              <span className="font-[quantico] text-2xl font-bold">Front-end Dev</span>
              <br />
              <span className="font-light">50 Projects Done.</span>
            </div>
          </div>
          <div className="flex  p-2 m-2">
            <div className="flex-1 ">
            <img src="/thumb1.png" alt="thumb projects" />
            </div>
            <div className="flex-2  ">
              <span className="font-[quantico] text-2xl font-bold">UI/UX Design</span>
              <br />
              <span className="font-light">43 Projects Done.</span>
            </div>
          </div>
          <div className="flex  p-2 m-2">
            <div className="flex-1 ">
            <img src="/thumb1.png" alt="thumb projects" />
            </div>
            <div className="flex-2  ">
              <span className="font-[quantico] text-2xl font-bold">Product Design</span>
              <br />
              <span className="font-light">38 Projects Done.</span>
            </div>
          </div>
        </div>
      </AnimatedDiv>
      {/* SESI SKILL PENDIDIKAN */}
      <div className="h-fit bg-black text-white">
        <div className="sm:mx-41 px-4 py-2"> 
        <AnimatedDiv className="flex flex-row sm:flex-col mt-20">
          <span className="font-[quantico] font-bold text-4xl text-center">Check My Skills And Work Experiences</span>
          <span className="text-center sr-only sm:not-sr-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sunt.</span>
        </AnimatedDiv>
        <div className="grid sm:grid-cols-3 sm:grid-rows-1 my-20 mx-4 ">
          <AnimatedDiv className="font-[Quantico] text-3xl sm:text-[28px] text-white font-bold">
           Work Experiences
            <hr className="w-35 sm:mb-10" />
            {/* wordpress */}
            <div className="my-5 sm:mb-10 h-fit">
            <div className="text-gray-500 text-[15px]">2017 - 2020</div>
            <div className="text-[20px]">Wordpress Designer</div>
            <div className="text-orange-400 text-[14px]"> - Freelance</div> 
            </div>
            {/* web design */}
            <div className="my-5 sm:mb-10 h-fit">
            <div className="text-gray-500 text-[15px]">2020 - 2024</div>
            <div className="text-[20px]">Web Designer</div>
            <div className="text-orange-400 text-[14px]"> - Freelance</div> 
            </div>
            {/* front end dev */}
            <div className="my-5 sm:my-2 h-fit">
            <div className="text-gray-500 text-[15px]">2024 - Now</div>
            <div className="text-[20px]">Front-End Dev</div>
            <div className="text-orange-400 text-[14px]"> - Freelance</div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv className="font-[Quantico] text-3xl sm:text-[28px] text-white font-bold mt-5 sm:mt-0">
            Education
            <hr className="w-35 sm:mb-10" />
            {/* SMK */}
            <div className="my-5 sm:mb-10 h-fit">
            <div className="text-gray-500 text-[15px]">2011 - 2014</div>
            <div className="text-[20px]">MA Muhammadiyah</div>
            <div className="text-orange-400 text-[14px]"> - Tulungagung</div> 
            </div>
            {/* S1 */}
            <div className="my-5 sm:my-2 h-fit">
            <div className="text-gray-500 text-[15px]">2014 - 2019</div>
            <div className="text-[20px]">Univ. Muhammadiyah</div>
            <div className="text-orange-400 text-[14px]"> - Malang</div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv className="font-[Quantico] text-3xl sm:text-[28px] text-white font-bold mt-5 sm:mt-0">My Skills & Advantage
          <hr className="w-35 sm:mb-10" />
          <div className="mt-5">
          <SkillBars skills={skillsData} />
          </div>
          </AnimatedDiv>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Home