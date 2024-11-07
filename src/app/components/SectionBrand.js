import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./Sectiontitle";
export default function SectionBrand() {
  return (
    <div className="flex justify-between items-end">
      <div className="">
        <SectionTitle>21.000+</SectionTitle>
        <SectionParagraph>Siswa terdaftar</SectionParagraph>
      </div>
      <div className="">
        <SectionTitle>100+</SectionTitle>
        <SectionParagraph>Instruktur Ahli</SectionParagraph>
      </div>
      <div className="">
        <SectionTitle>150+</SectionTitle>
        <SectionParagraph>Kursus Gratis</SectionParagraph>
      </div>
      <div className="flex items-center gap-2">
        <img src="./lorem.svg" className="w-5 " />
        <a href="#" className="text-gray-900 text-2xl font-semibold uppercase">
          lorem
        </a>
      </div>
      <div className="flex items-center gap-2">
        <img src="./ditlance.svg" className="w-5 " />
        <a href="#" className="text-gray-900 text-2xl font-semibold uppercase">
          ditlance
        </a>
      </div>
      <div className="flex items-center gap-2">
        <img src="./owthest.svg" className="w-5 " />
        <a href="#" className="text-gray-900 text-2xl font-semibold uppercase">
          owthest
        </a>
      </div>
      <div className="flex items-center gap-2">
        <img src="./neovasi.svg" className="w-5" />
        <a href="#" className="text-gray-900 text-2xl font-semibold uppercase">
          neovasi
        </a>
      </div>
      <div className="flex items-center gap-2">
        <img src="./onago.svg" className="w-5" />
        <a href="#" className="text-gray-900 text-2xl font-semibold uppercase">
          onago
        </a>
      </div>
    </div>
  );
}
