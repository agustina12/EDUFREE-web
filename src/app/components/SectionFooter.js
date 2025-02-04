import Logo from "./Logo";
import SectionParagraph from "./SectionParagraph";

export default function SectionFooter() {
  return (
    <div className="flex">
      <div className="w-2/5 py-14 flex flex-col">
        <Logo />
        <SectionParagraph variant="var-text-base">
          Bangun dan wujudkan cita bersama edufree
        </SectionParagraph>
        <div className="bg-amber-200 w-3/4 rounded-t-lg mt-8 relative top-14">
          <div className="flex flex-row justify-around">
            <div className="flex flex-col py-4">
              <SectionParagraph variant="footer-font">Email</SectionParagraph>
              <SectionParagraph variant="text-basee">
                contact@website.com
              </SectionParagraph>
            </div>
            <div className="flex flex-col py-4">
              <SectionParagraph variant="footer-font">
                Telephone
              </SectionParagraph>
              <SectionParagraph variant="text-basee">
                +6288 999 222 333
              </SectionParagraph>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 py-14">
        <div className="flex flex-row justify-end gap-14">
          <ul className="list-none">
            <li className="text-white">
              <SectionParagraph variant="footer-title">
                Sosial Media
              </SectionParagraph>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Instagram
                </SectionParagraph>
              </a>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Twitter
                </SectionParagraph>
              </a>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  LinkedIn
                </SectionParagraph>
              </a>
            </li>
          </ul>
          <ul className="list-none">
            <li className="text-white">
              <SectionParagraph variant="footer-title">
                Program
              </SectionParagraph>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Merdeka Belajar
                </SectionParagraph>
              </a>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Finterpreneur
                </SectionParagraph>
              </a>
            </li>
          </ul>
          <ul className="list-none">
            <li className="text-white">
              <SectionParagraph variant="footer-title">
                Dukungan
              </SectionParagraph>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Tentang Kami
                </SectionParagraph>
              </a>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Ketentuan
                </SectionParagraph>
              </a>
            </li>
            <li className="py-2">
              <a href="#">
                <SectionParagraph variant="var-text-base">
                  Kebijakan Privasi
                </SectionParagraph>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
