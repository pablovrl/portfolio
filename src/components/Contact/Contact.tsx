import { CONTACTS, PAGECONTENT } from "../../data";
import { SectionLayout } from "../layout/SectionLayout";

export function Contact() {
  return (
    <SectionLayout id="contact">
      <div className="flex flex-col items-center gap-8">
        <p className="border border-black rounded-full font-bold px-2 bg-orange-100">
          {PAGECONTENT.en.contactSubtitle.toUpperCase()}
        </p>
        <p className="font-bold text-3xl text-center">{PAGECONTENT.en.contactTitle}</p>
        <div className="flex flex-wrap justify-center gap-10">
          {CONTACTS.map((contact) => (
            <a href={contact.url} target="_blank" key={contact.name} className="w-72 flex flex-col items-center border border-black border-b-8 p-10 rounded-xl gap-3">
              <div className={`${contact.color} p-2 rounded-full border border-black  text-2xl`}>{contact.icon}</div>
              <span>{contact.user}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
