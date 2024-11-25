"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
export default function SectionFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      index: "01",
      title: "Apakah kursus ini benar-benar gratis?",
      content:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      index: "02",
      title: "Untuk siapa kursus ini?",
      content: "Content for item 2",
    },
    {
      index: "03",
      title: "Apakah kursus ini bersertifikat?",
      content: "Content for item 3",
    },
    {
      index: "04",
      title: "Sampai kapan kursus ini berakhir?",
      content: "Content for item 2",
    },
    {
      index: "05",
      title: "Apakah ada penyaluran kerja setelah lulus?",
      content: "Content for item 3",
    },
  ];

  return (
    <div className="flex gap-36">
      <div className="w-2/5">
        <SectionTitle variant="text-3xl">
          Frequently Asked Questions
        </SectionTitle>
        <SectionParagraph variant="text-base">
          Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222 333
        </SectionParagraph>
      </div>
      <div className="w-3/5">
        <div className="flex-col">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }>
                <div className="flex gap-14">
                  <SectionTitle variant="text-2xxl">{item.index}</SectionTitle>
                  <div className="flex-col">
                    <SectionParagraph variant="text-lg2">
                      {item.title}
                    </SectionParagraph>
                    <SectionParagraph variant="text-base">
                      {openIndex === index && item.content}
                    </SectionParagraph>
                  </div>
                </div>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
