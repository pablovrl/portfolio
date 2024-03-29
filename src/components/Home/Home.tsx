import { CVLINK, PAGECONTENT } from "../../data";
import { SectionLayout } from "../layout/SectionLayout";
import profilePicture from "../../assets/profile.png";
import { Anchor } from "../Anchor";
import { scrollToElement } from "../../utils";
import { Button } from "../Button";

export function Home() {
  return (
    <SectionLayout id="home">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <header>
            <h1 className="pb-4 animate-text bg-gradient-to-l from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl md:text-6xl font-bold">
              {PAGECONTENT.en.title}
            </h1>
          </header>
          <div className="flex flex-col gap-4">
            {PAGECONTENT.en.description.map((paragraph, index) => (
              <p className="text-xl" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="flex gap-2">
              <Anchor blank href={CVLINK} color="primary">
                {PAGECONTENT.en.cv}
              </Anchor>
              <Button
                onClick={() => scrollToElement("contact")}
                color="secondary"
              >
                {PAGECONTENT.en.contact}
              </Button>
            </div>
          </div>
        </div>
        <img
          src={profilePicture}
          className="w-60 rounded-full"
          alt="A selfie of mine"
        />
      </div>
    </SectionLayout>
  );
}
