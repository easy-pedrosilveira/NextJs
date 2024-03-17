import Image from "next/image";
import Mockup from "/public/mockup-main.png";
import Card01 from "/public/image-01.png";
import Card02 from "/public/image-02.png";
import Card03 from "/public/image-03.png";
import Card04 from "/public/image-04.png";
import Card05 from "/public/image-05.png";
import Card06 from "/public/image-06.png";
export function SectionCard() {
  return (
    <section className="w-ful pb-20">
      <Image
        src={Mockup}
        alt="Mockup Main"
        className="sticky top-56 mx-auto -mt-[32rem] mb-16 z-10"
      />
      <h2 className="text-center text-7xl font-semibold text-black mb-56">
        Faça <span className="text-green-title-card">você</span> mesmo de casa
      </h2>
      <div className=" relative w-full max-w-area-cards h-area-cards mx-auto">
        <Image src={Card01} className="absolute top-8 left-44" alt="Card01" />
        <Image
          src={Card02}
          className="absolute bottom-0 left-32"
          alt="Card02"
        />
        <Image
          src={Card03}
          className="absolute bottom-0 left-80"
          alt="Card03"
        />
        <Image src={Card04} className="absolute top-0 right-32" alt="Card04" />
        <Image
          src={Card05}
          className="absolute bottom-28 right-0"
          alt="Card05"
        />
        <Image
          src={Card06}
          className="absolute bottom-0 right-80"
          alt="Card06"
        />
      </div>
    </section>
  );
}
