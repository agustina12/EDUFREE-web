import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";
import Button from "./Button";
export default function SectionRecommend() {
  return (
    <div>
      <div className="flex items-center divide-inherit ">
        <div className="w-9/12 ">
          <SectionTitle variant="text-4xl">
            Rekomendasi Kursus Untuk Kamu
          </SectionTitle>
        </div>
        <div className="w-3/12 flex justify-end">
          <div className="flex items-center">
            <Button variant="btn-transparent">Kategori</Button>
            <img src="./icons/arrow.svg" className="w-5 stroke-indigo-950" />
          </div>
          <Button variant="btn-yellow">Lihat Semua</Button>
        </div>
      </div>
      <hr className="border pt-px bg-gray-200 w-full mt-8" />
      <div className="flex mt-16 gap-16">
        <div className="w-1/3">
          <CourseCard
            image="./img/courses_1.png"
            icons="./icons/star.svg"
            ticon="4,9"
            judul="Dasar Pemrograman WEB"
            teks="Materi pembelajarn mengenai pembuatan website tingkat pemula"
            iconTime="./icons/time.svg"
            textTime="4,5 Jam"
            iconVideo="./icons/play.svg"
            textVideo="20 Video"
            iconUser="./icons/people.svg"
            textUser="1.900 Siswa"
          />
        </div>
        <div className="w-1/3">
          <CourseCard
            image="./img/courses_2.png"
            icons="./icons/star.svg"
            ticon="4,9"
            judul="Digital Marketing 101"
            teks="Materi mengenai strategi dan konsep marketing  pemula"
            iconTime="./icons/time.svg"
            textTime="6,2 Jam"
            iconVideo="./icons/play.svg"
            textVideo="32 Video"
            iconUser="./icons/people.svg"
            textUser="930 Siswa"
          />
        </div>
        <div className="w-1/3">
          <CourseCard
            image="./img/courses_3.png"
            icons="./icons/star.svg"
            ticon="4,9"
            judul="Data Science Dasar"
            teks="Materi pembelajaran mengenai dasar-dasar data science"
            iconTime="./icons/time.svg"
            textTime="8 Jam"
            iconVideo="./icons/play.svg"
            textVideo="46 Video"
            iconUser="./icons/people.svg"
            textUser="1.043 Siswa"
          />
        </div>
      </div>
    </div>
  );
}
