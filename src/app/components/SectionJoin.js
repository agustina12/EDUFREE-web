import JoinCard from "./JoinCard";
import SectionTitle from "./SectionTitle";
export default function SectionJoin() {
  return (
    <div className="my-14">
      <div className="flex items-center text-center mx-20 my-12">
        <SectionTitle variant="text-5xl">
          Keuntungan Bergabung Dengan E-Learning EDUFREE
        </SectionTitle>
      </div>
      <div className="flex flex-wrap">
        <div className="w-4/12 py-4 px-4">
          <JoinCard
            angka="1"
            judul="Kursus Gratis"
            teks="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
          />
        </div>
        <div className="w-4/12 py-4 px-4">
          <JoinCard
            angka="2"
            judul="Akses Selamanya"
            teks="Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru"
          />
        </div>
        <div className="w-4/12 py-4 px-4">
          <JoinCard
            angka="3"
            judul="Grup Konsultasi"
            teks="Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan dan kamu juga bisa mebuka diskusi baru"
          />
        </div>
        <div className="w-4/12 py-4 px-4">
          <JoinCard
            angka="4"
            judul="Sertifikat dan Portofolio"
            teks="Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan"
          />
        </div>
        <div className="w-4/12 py-4 px-4">
          <JoinCard
            angka="5"
            judul="Belajar Lebih Terarah"
            teks="Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan"
          />
        </div>
        <div className="w-4/12 py-4 px-4">
          <JoinCard
            angka="6"
            judul="Grup Konsultasi"
            teks="Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya"
          />
        </div>
      </div>
    </div>
  );
}
