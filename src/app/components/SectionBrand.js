import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
export default function SectionBrand() {
  return (
    <div className="flex justify-between items-end">
      <div className="">
        <SectionTitle variant="text-2xl">21.000+</SectionTitle>
        <SectionParagraph variant="text-base">Siswa terdaftar</SectionParagraph>
      </div>
      <div className="">
        <SectionTitle variant="text-2xl">100+</SectionTitle>
        <SectionParagraph variant="text-base">Instruktur Ahli</SectionParagraph>
      </div>
      <div className="">
        <SectionTitle variant="text-2xl">150+</SectionTitle>
        <SectionParagraph variant="text-base">Kursus Gratis</SectionParagraph>
      </div>
      <div className="flex items-center gap-2">
        <img src="./lorem.svg" className="w-5 " />
        <SectionTitle variant="text-2xl">lorem</SectionTitle>
      </div>
      <div className="flex items-center gap-2">
        <img src="./ditlance.svg" className="w-5 " />
        <SectionTitle variant="text-2xl">ditlance</SectionTitle>
      </div>
      <div className="flex items-center gap-2">
        <img src="./owthest.svg" className="w-5 " />
        <SectionTitle variant="text-2xl">owthest</SectionTitle>
      </div>
      <div className="flex items-center gap-2">
        <img src="./neovasi.svg" className="w-5" />
        <SectionTitle variant="text-2xl">neovasi</SectionTitle>
      </div>
      <div className="flex items-center gap-2">
        <img src="./onago.svg" className="w-5" />
        <SectionTitle variant="text-2xl">onago</SectionTitle>
      </div>
    </div>
  );
}
