import Image from "next/image";
import AnthonyImg from './assets/Team_Photos_Anthony.png';
import CueImg from './assets/Team_Photos_Cue.png';

//Images
import oneCardImage from "./assets/one.svg";
import twoCardImage from "./assets/two.svg";
import threeCardImage from "./assets/three.svg";


const bgImageStyle = {
  backgroundColor: 'hsla(219,45%,7%,1)',
  backgroundImage: `
    radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
    radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
    radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
    radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
    radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
    radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
  `,
  width: "auto", // Adjust width as needed
  height: "auto", // Adjust height as needed
  display: 'flex',

};

function Main({ translations }) {
  return (
    <div style={bgImageStyle} className="flex flex-col items-center mb:mt-0 mb:pb-20 pb-6 -mt-[100px] pt-48 mb:py-40">
      <div className="mb:max-w-[1100px] w-full">
        {/* Title, Description & button*/}
        <div>
          <div className="mx-10">
            <h1 className="text-center text-4xl mb:text-center mb:text-5xl font-light text-white">
              {" "} {translations.titleOne} {" "} {translations.titleTwo} 
             
            </h1>
            <h2 className="mt-4 text-center text-lg mb:px-0 mb:text-center mb:text-xl text-secondary">{translations.content}</h2>
          </div>

        </div>

        <div className="flex flex-col items-center mb:pb-16 w-full justify-center px-8 mb:px-0">

          {/* Cue Banks */}
          <div className="flex flex-col items-center mb:flex-row  mb:mt-16">
            <Image src={CueImg} className="w-56" alt='cue-img' />
            <div className="flex flex-col items-center mt-5 mb:mt-0 mb:items-start  mb:ml-24">
              <h2 className="mb:text-left text-center text-4xl font-light text-white">Cue Banks</h2>
              <p className=" mb:text-left text-center text-sm mt-4 text-secondary mb:w-full">{translations.cueStory}              </p>
            </div>
          </div>

          {/* Anthony Williams */}
          <div className="flex flex-col-reverse items-center mb:flex-row  mt-12 mb:mt-12">

            <div className="flex flex-col mb:items-end items-center ">
              <h2 className="mb:text-left text-center text-4xl font-light text-white">Anthony Williams</h2>
              <p className="mb:text-right text-center text-sm mt-4 text-secondary mb:w-full"> {translations.anthonyStory}
              </p>
            </div>
            <Image src={AnthonyImg} className="w-56 ml-0 mb:ml-20" alt='anthony-img' />
          </div>



        </div>

        {/* Cards */}
        <section className="mb:mt-20 mb:mb-20 mb-0 mt-14 flex flex-col items-center w-full  mb:flex-row justify-around">
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-fit mb:h-[450px] w-auto mb:w-80 rounded-xl flex flex-col items-center mx-8 mb:mx-0 mb:mb-0 mb-10">
            <Image src={oneCardImage} alt="card-img" width={250} height={250} />
            <div className="text-center px-10 mb-10">
              <p className="text-white font-medium text-xl">{translations.missionTitle}</p>
              <p className="text-white font-light text-base mt-2">{translations.missionContent}</p>
            </div>
          </div>
          {/* Vision Statement */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 h-fit mb:h-[450px] w-auto mb:w-80 rounded-xl flex flex-col items-center mx-8 mb:mx-0  mb:mb-0 mb-10">
            <Image src={twoCardImage} alt="card-img" width={250} height={250} />
            <div className="text-center px-10 mb-10">
              <p className="text-white font-medium text-xl">{translations.visionTitle}</p>
              <p className="text-white font-light text-base mt-2">{translations.visionContent}</p>
            </div>
          </div>
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-fit mb:h-[450px] w-auto mb:w-80 rounded-xl flex flex-col items-center mx-8 mb:mx-0  mb:mb-0 mb-10">
            <Image src={threeCardImage} alt="card-img" width={250} height={250} />
            <div className="text-center px-10 mb-10">
              <p className="text-white font-medium text-xl">{translations.purposeTitle}</p>
              <p className="text-white font-light text-base mt-2"> {translations.purposeContent} </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
