import { CONTACTS } from "../../data";

export function Footer() {
  return (
    <footer className="bg-black h-56 flex justify-center items-center flex-col gap-2 text-lg">
      <p className="text-white">Created by Pablo Villarroel {":)"}</p>
      <div className="flex gap-2">
        {CONTACTS.map((contact) => (
          <a href={contact.url} target="_blank" key={contact.name}>
            {contact.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
