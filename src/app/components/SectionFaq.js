import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
export default function SectionFaq() {
  return (
    <div className="flex">
      <div className="w-2/5">
        <SectionTitle variant="text-3xl">
          Frequently Asked Questions
        </SectionTitle>
        <SectionParagraph variant="text-base">
          Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222 333
        </SectionParagraph>
      </div>
      <div className="w-3/5"></div>
    </div>
  );
}
