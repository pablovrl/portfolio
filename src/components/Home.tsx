import { CVLINK, PAGECONTENT } from "../data";
import { SectionLayout } from "./layout/SectionLayout";
import profilePicture from "../assets/profile.png";
import { Anchor } from "./Anchor";

export function Home() {
  return (
    <SectionLayout>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <header>
            <h1 className="text-6xl font-bold mb-8">{PAGECONTENT.en.title}</h1>
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
              <Anchor color="secondary">{PAGECONTENT.en.contact}</Anchor>
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
