export default function JoinCard({ angka, judul, teks }) {
  return (
    <div className=" bg-blue-50 p-7">
      <h1 className="text-3xl font-semibold text-white bg-blue-700 py-3 px-3 w-12 h-14 my-3 rounded text-center">
        {angka}
      </h1>
      <h2 className="text-2xl text-gray-900 font-normal mt-6">{judul}</h2>
      <p className="text-base text-gray-400 font-normal tracking-wider py-2 text-wrap">
        {teks}
      </p>
    </div>
  );
}
