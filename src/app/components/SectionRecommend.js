import SectionTitle from "./SectionTitle";
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
            <img src="./arrow.svg" className="w-5 stroke-indigo-950" />
          </div>
          <Button variant="btn-yellow">Lihat Semua</Button>
        </div>
      </div>
      <hr className="border-2 py-px bg-gray-300 w-full" />
    </div>
  );
}
