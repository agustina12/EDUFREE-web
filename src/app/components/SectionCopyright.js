import SectionParagraph from "./SectionParagraph";

export default function SectionCopyright() {
  return (
    <div className="flex justify-between">
      <SectionParagraph variant="text-basee">
        © Copyright EDUFREE 2021 - 2022
      </SectionParagraph>
      <ul className="list-none flex gap-10">
        <li className="uppercase">
          <SectionParagraph variant="text-basee">home</SectionParagraph>
        </li>
        <li className="uppercase">
          <SectionParagraph variant="text-basee">tentang kami</SectionParagraph>
        </li>
        <li className="uppercase">
          <SectionParagraph variant="text-basee">kursus</SectionParagraph>
        </li>
        <li className="uppercase">
          <SectionParagraph variant="text-basee">faq</SectionParagraph>
        </li>
        <li className="uppercase">
          <SectionParagraph variant="text-basee">blog</SectionParagraph>
        </li>
      </ul>
    </div>
  );
}
