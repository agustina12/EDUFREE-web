import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
export default function SectionTestimonial() {
  return (
    <div className="flex py-10 gap-24">
      <div className="w-1/3">
        <SectionTitle variant="text-3xl">
          Kata Mereka Tentang Kursus EDUFREE
        </SectionTitle>
        <SectionParagraph variant="text-base">
          EDUFREE telah dipercaya lebih dari 10.000 siswa
        </SectionParagraph>
      </div>
      <div className="w-2/3">
        <SectionParagraph variant="text-2xl">
          "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat
          baik serta responnya yang cepat. So, kursus disini sangat sangat saya
          rekomendasikan!!
        </SectionParagraph>
      </div>
    </div>
  );
}
