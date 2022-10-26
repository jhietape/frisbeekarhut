import type { NextPage } from "next";
import Image from "next/image";

interface HeroCardProps {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string;
  buttonOnClick?: () => void;
  imageAltText: string;
}

const HeroCard = ({
  title,
  text,
  buttonText,
  buttonOnClick,
  imageUrl,
  imageAltText,
}: HeroCardProps) => {
  return (
    <div className="card card-compact xl:w-96 w-80 bg-base-100 shadow-xl">
      <figure className="relative sm:w-96 sm:h-52 w-80 h-48">
        <Image layout="fill" src={imageUrl} alt={imageAltText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <button onClick={buttonOnClick} className="btn btn-primary">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div
      className="hero min-h-screen" //1000x800px
      style={{ backgroundImage: `url("/images/hero_bg.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-14 justify-center items-stretch">
          <HeroCard
            imageUrl="/images/jasen_kuva_1.png"
            imageAltText="Uutiset"
            title="Liity karhulaumaan!"
            text="Liity nallelaumaan. YFK jäsenyys tarjoaa blaa blaa blaaaa sfjahs flkasfla sfjkajsf."
            buttonText="Liity Jäseneksi!"
          />
          <HeroCard
            imageUrl="/images/uutiset_kuva.png"
            imageAltText="Liity jäseneksi"
            title="Tsekkaa kuulumiset"
            text="Tsekkaa karhulauman uusimmat uutiset."
            buttonText="Selaa uutisia"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
