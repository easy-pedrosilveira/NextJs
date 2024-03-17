import { GridContainer } from "@/components";
import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";
import Image from "next/image";

export function SectionHero() {
  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center">
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo curso focado em instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">
            Destrave as suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="Icon File" />
              <span className="text-white font-medium">
                Assinar lista agora
              </span>
            </button>
            <button className="py-4 px-6 bg-green-btn rounded-full text-green-primary font-bold">
              Começar Agora
            </button>
          </div>
        </div>
        <div className="relative w-full h-28 max-w-area-icons mt-4">
          <Image
            src={IconHand}
            alt="icon-hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="icon-hand02"
            className="absolute right-0 top-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative -rotate-12 top-[18px] left-[53px]"
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative rotate-12 top-[18px] right-[53px]"
          />
        </div>
      </GridContainer>
    </section>
  );
}
