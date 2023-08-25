import CardBio from "@/components/cardBio";
import MainHeader from "@/components/mainHeader";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col">
      <MainHeader title={"Ahmad Aby Ayyasi"} />
      <CardBio />
      <p className="mt-[36px]">
        Sebagai seorang Front-end Developer, saya telah mengembangkan berbagai
        website dan platform yang melibatkan teknologi-teknologi terbaru seperti
        ReactJS, dan juga frameworknya yaitu NextJS. Saya selalu mencari cara
        untuk meningkatkan keterampilan saya dan mengeksplorasi teknologi baru
        yang dapat membantu saya menciptakan solusi yang lebih baik.
      </p>
      <div className="inline-flex mt-[30px]">
        <Link
          href="/"
          className=" underline underline-offset-2 mr-[17px] px-4 py-2 font-semibold"
        >
          Github
        </Link>
        <Link
          href="/"
          className=" underline underline-offset-2 px-4 mr-[17px] py-2 font-semibold"
        >
          Instagram
        </Link>
        <Link
          href="/"
          className=" underline underline-offset-2 px-4 py-2 font-semibold"
        >
          Facebook
        </Link>
      </div>
    </section>
  );
}
