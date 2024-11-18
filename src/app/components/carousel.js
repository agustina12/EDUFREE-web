"use client";
import { useState } from "react";
import SectionParagraph from "./SectionParagraph";

const userTestimonial = [
  {
    text: "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!",
    image: "./users/user-2.png",
    name: "Jenny Wilson",
    position: "Vice President",
  },
  {
    text: "Kursus di platform ini sangat membantu saya meningkatkan keterampilan sebagai Product Manager. Materinya jelas dan aplikatif, langsung bisa saya terapkan di pekerjaan 🫡",
    image: "./users/user-3.png",
    name: "James Anderson",
    position: "Product Manager",
  },
  {
    text: "Saya mendapatkan pemahaman yang lebih dalam tentang pengembangan perangkat lunak dari kursus ini. Setiap modul sangat mudah dipahami dan langsung bisa dipraktekkan 🤗",
    image: "./users/user-4.png",
    name: "Sophia Davis",
    position: "Digital Marketer",
  },
  {
    text: "Kursus ini membantu saya mengasah keterampilan dalam pemasaran digital. Dari SEO hingga iklan berbayar, semua materi sangat berguna dan bisa langsung diterapkan di pekerjaan 🙌",
    image: "./users/user-5.png",
    name: "Ryan Clark",
    position: "Software Engineer",
  },
  {
    text: "Kursus ini sangat relevan dengan pekerjaan saya sebagai Business Analyst. Saya bisa mengasah keterampilan analisis data dan meningkatkan efisiensi kerja sehari-hari 👍",
    image: "./users/user-6.png",
    name: "Chris Martin",
    position: "Business Analyst",
  },
];

export default function carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="">
      <SectionParagraph variant="text-2xl">
        "{userTestimonial[currentIndex].text}"
      </SectionParagraph>
      <div className="flex align-middle items-center justify-between mt-7">
        <div className="flex items-center gap-5">
          <img
            src={userTestimonial[currentIndex].image}
            className="rounded-full w-20"
          />
          <div className="flex-row justify-start">
            <SectionParagraph variant="text-lg2">
              {userTestimonial[currentIndex].name}
            </SectionParagraph>
            <SectionParagraph variant="text-xs">
              {userTestimonial[currentIndex].position}
            </SectionParagraph>
          </div>
        </div>
        <div className="flex justify-around gap-2">
          {userTestimonial.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`rounded-full w-4 h-4 ${
                currentIndex === index ? "bg-blue-700" : "bg-blue-300"
              } flex item-center transition-all`}
            >
              {}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
