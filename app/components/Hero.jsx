import Image from 'next/image';
import Link from 'next/link';
import Avatar from './../../public/assets/avatar.jpeg';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row justify-evenly space-y-5 items-center text-center md:text-left md:min-h-screen md:max-h-fit">
      <div className="max-w-[1240px] min-w-[400px]">
        <h2 className="text-2xl md:text-4xl pb-2">Hi, I am</h2>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold pb-2">
          Falko
        </h1>

        <h2 className="md:text-2xl sm:text-xl text-md tracking-[2px] pb-2">
          Junior Software Engineer and React Developer
        </h2>
        <h3 className="md:text-2xl sm:text-xl text-md tracking-[2px] pb-2">
          based in Germany
        </h3>

        <Link href={'#'} target="_blank" rel="noreferrer noopener">
          <button className="button text-md md:text-lg">
            Check out my resume
          </button>
        </Link>
      </div>
      <div className="m-0 md:ml-10">
        <div className="h-[250px] w-[250px] md:h-96 md:w-96 mx-auto relative">
          <Image
            src={Avatar}
            alt={'Avatar'}
            fill
            className="border-8 border-grey rounded-full object-cover z-10"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;