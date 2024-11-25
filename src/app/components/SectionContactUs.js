import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import Button from "./Button";
export default function SectionContactUs() {
  return (
    <div className="flex">
      <div className="w-1/2 bg-[url('/img/bg-contact-us.png')] bg-no-repeat">
        <div className="bg-[rgba(28,30,83,0.60)]">
          <div className="py-40 mx-6">
            <div className="w-4/6">
              <SectionTitle variant="text-4xll">
                Selangkah Lebih Dekat Dengan Impianmu
              </SectionTitle>
            </div>
            <SectionParagraph variant="var-text-base">
              Sebuah layanan E-Learning gratis yang siap membantumu menjadi
              seorang ahli
            </SectionParagraph>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-950 h-auto">
        <form className="flex flex-col py-8 px-16">
          <div className="my-5">
            <SectionTitle variant="text-2xxll">Daftarkan Dirimu!</SectionTitle>
          </div>
          <SectionParagraph variant="var-text-base">
            Persiapkan diri untuk masa depan yang penuh dengan bintang
          </SectionParagraph>
          <div className="mt-8">
            <input
              className="w-full px-3 py-3 border-2 border-violet-300/50 rounded-md bg-transparent focus:outline-none focus-ring-2 focus-ring-indigo-500 text-white"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full px-3 py-3 border-2 border-violet-300/50 rounded-md bg-transparent focus:outline-none focus-ring-2 focus-ring-indigo-500 text-white"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full px-3 py-3 border-2 border-violet-300/50 rounded-md bg-transparent focus:outline-none focus-ring-2 focus-ring-indigo-500 text-white"
              placeholder="Pass****"
              type="password"
            />
          </div>
          <div className="mt-8 text-center">
            <Button variant="btn-yellow-bold">daftar</Button>
            <input
              className="w-full px-3 py-3 border-2 rounded-md border-none
              bg-amber-200 text-indigo-950 hover:bg-amber-300 font-bold uppercase"
              type="button"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
