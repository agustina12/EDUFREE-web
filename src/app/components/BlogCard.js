import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
export default function CourseCard({
  image,
  date,
  judul,
  teks,
  link,
  iconArrow,
}) {
  return (
    <div>
      <div className="flex flex-row items-end">
        <img src={image} className="w-full" />
      </div>
      <div>
        <SectionParagraph variant="text-base">{date}</SectionParagraph>
        <SectionTitle variant="text-2xll">{judul}</SectionTitle>
        <SectionParagraph variant="text-base">{teks}</SectionParagraph>
        <div className="flex items-center gap-2 pt-5">
          <a href="#">
            <SectionParagraph variant="text-basee">{link}</SectionParagraph>
          </a>
          <img src={iconArrow} />
        </div>
      </div>
    </div>
  );
}
