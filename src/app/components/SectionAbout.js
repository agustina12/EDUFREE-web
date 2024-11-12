import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
export default function SectionAbout() {
  return (
    <div className="flex">
      <div className="w-6/12 flex flex-col justify-center">
        <SectionParagraph variant="text-lg">Tentang Kami</SectionParagraph>
        <SectionTitle variant="text-4xl">
          EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
        </SectionTitle>
        <SectionParagraph variant="text-base">
          Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
          kedepanya dalam bidang pendidikan
        </SectionParagraph>
      </div>
      <div className="w-6/12 flex justify-end">
        <img src="./img/about.png" className="w-auto h-auto" />
      </div>
    </div>
  );
}
