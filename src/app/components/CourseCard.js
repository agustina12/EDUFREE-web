import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
export default function CourseCard({
  image,
  icons,
  ticon,
  judul,
  teks,
  iconTime,
  iconVideo,
  iconUser,
  textTime,
  textVideo,
  textUser,
}) {
  return (
    <div>
      <div className="flex flex-row items-end">
        <img src={image} className="w-full" />
        <div className="flex justify-evenly bg-indigo-950 rounded-full py-2 px-2 w-20 ml-[-6rem] mb-[-1.2rem]">
          <img src={icons} />
          <span className="text-white text-sm font-normal">{ticon}</span>
        </div>
      </div>
      <div>
        <SectionTitle variant="text-2xll">{judul}</SectionTitle>
        <SectionParagraph variant="text-base">{teks}</SectionParagraph>
        <div className="flex gap-5 mt-7">
          <div className="flex gap-2">
            <img src={iconTime} />
            <h4 className="text-base">{textTime}</h4>
          </div>
          <div className="flex gap-2">
            <img src={iconVideo} />
            <h4 className="text-base">{textVideo}</h4>
          </div>
          <div className="flex gap-2">
            <img src={iconUser} />
            <h4 className="text-base">{textUser}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
