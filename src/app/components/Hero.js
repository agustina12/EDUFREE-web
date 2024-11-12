import Button from "./Button";
export default function Hero() {
  return (
    <div className="flex ">
      <div className="w-3/6 ">
        <h1 className="text-white text-5xl font-semibold leading-normal">
          Bangun dan Wujudkan Cita Bersama EDUFREE
        </h1>
        <p className="text-white font-normal text-base my-10 tracking-wide w-9/12">
          EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
          online yang bertujuan untuk membantu kamu meraih cita di bidang
          teknologi.
        </p>
        <div className="flex gap-6">
          <Button variant="btn-yellow">Lihat Kursus</Button>
          <div className="flex items-center gap-2">
            <a href="#" className="text-white text-base">
              Lihat Alur belajar
            </a>
            <img src="./icons/arrow.svg" className="w-5 text-white" />
          </div>
        </div>
      </div>
      <div className="w-3/6 flex justify-center mb-20">
        <img src="./img/hero.png" />
      </div>
    </div>
  );
}
