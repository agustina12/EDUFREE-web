import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
export default function JoinCard({ angka, judul, teks }) {
  return (
    <div className=" bg-blue-50 p-7">
      <h1 className="text-3xl font-semibold text-white bg-blue-700 py-3 px-3 w-12 h-14 my-3 rounded text-center">
        {angka}
      </h1>
      <SectionTitle variant="text-2xll">{judul}</SectionTitle>
      <SectionParagraph variant="text-base">{teks}</SectionParagraph>
    </div>
  );
}
