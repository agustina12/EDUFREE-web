import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import Carousel from "./carousel";
export default function SectionTestimonial() {
  return (
    <div className="flex py-16 gap-28">
      <div className="w-1/3">
        <SectionTitle variant="text-3xl">
          Kata Mereka Tentang Kursus EDUFREE
        </SectionTitle>
        <SectionParagraph variant="text-base">
          EDUFREE telah dipercaya lebih dari 10.000 siswa
        </SectionParagraph>
      </div>
      <div className="w-2/3">
        <Carousel />
      </div>
    </div>
  );
}
