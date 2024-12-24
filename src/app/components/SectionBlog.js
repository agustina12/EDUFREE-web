import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";

export default function SectionBlog() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <SectionTitle variant="text-4xl">Blog, Berita dan Event</SectionTitle>
        <div className="flex items-center gap-2">
          <a href="#" className="text-indigo-950 text-base">
            Lihat Semua
          </a>
          <img src="./icons/arrow-black.svg" className="w-5 text-indigo-950" />
        </div>
      </div>
      <div className="flex mt-16 gap-16">
        <div className="w-1/3">
          <BlogCard
            image="./img/blog-1.png"
            date="19 Jan 2022"
            judul="Cara Mudah Untuk Memulai Belajar Programming - EDUFREE"
            teks="Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ..."
            link="Selengkapnya"
            iconArrow="./icons/arrow-black.svg"
          />
        </div>
        <div className="w-1/3">
          <BlogCard
            image="./img/blog-2.png"
            date="19 Jan 2022"
            judul="Tips Membuat Website Landing Page Bussines - EDUFREE"
            teks="Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ..."
            link="Selengkapnya"
            iconArrow="./icons/arrow-black.svg"
          />
        </div>
        <div className="w-1/3">
          <BlogCard
            image="./img/blog-3.png"
            date="19 Jan 2022"
            judul="Cara Installasi Wordpress Untuk Pemula -EDUFREE"
            teks="Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ..."
            link="Selengkapnya"
            iconArrow="./icons/arrow-black.svg"
          />
        </div>
      </div>
    </div>
  );
}
