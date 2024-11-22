import SectionTitle from "./SectionTitle";
export default function SectionContactUs() {
  return (
    <div className="flex">
      <div className="w-1/2 object-cover bg-[url('/img/bg-contact-us.png')]-gradient-to-r from-purple-500 to-pink-500">
        <SectionTitle variant="text-5xll">
          Selangkah Lebih Dekat Dengan Impianmu
        </SectionTitle>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
