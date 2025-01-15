import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import Button from "./Button";
export default function SectionContactUs() {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-[url('/img/bg-contact-us.png')] bg-no-repeat relative bg-center bg-cover">
        <div className="bg-[rgba(28,30,83,0.60)] relative h-full">
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
        <form className="flex flex-col py-8 px-20">
          <div className="my-5">
            <SectionTitle variant="text-2xxll">Daftarkan Dirimu!</SectionTitle>
          </div>
          <SectionParagraph variant="var-text-base">
            Persiapkan diri untuk masa depan yang penuh dengan bintang
          </SectionParagraph>
          <div className="mt-14">
            <input
              className="w-full px-4 py-4 border-2 border-violet-300/50 rounded-md bg-transparent focus:outline-none focus-ring-2 focus-ring-indigo-500 text-white"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="mt-8">
            <input
              className="w-full px-4 py-4 border-2 border-violet-300/50 rounded-md bg-transparent focus:outline-none focus-ring-2 focus-ring-indigo-500 text-white"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="mt-8">
            <input
              className="w-full px-4 py-4 border-2 border-violet-300/50 rounded-md bg-transparent focus:outline-none focus-ring-2 focus-ring-indigo-500 text-white"
              placeholder="Pass****"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button
              className="w-full block bg-amber-300 rounded-lg py-4 px-4 uppercase text-indigo-950 font-semibold text-base tracking-widest hover:bg-amber-400"
              type="button"
            >
              daftar
            </button>
          </div>
          <div className="mt-8 text-center">
            <SectionParagraph variant="var-text-base">
              Sudah punya akun?{" "}
              <a href="#" className="underline decoration-white">
                Login
              </a>
            </SectionParagraph>
          </div>
        </form>
      </div>
    </div>
  );
}
