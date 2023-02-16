import { useState } from "react";
import { scrollToElement } from "../../utils";

const MENU_ITEMS = [
  {
    label: {
      en: "Home",
      es: "Inicio",
    },
    elementToScrollId: "home",
  },
  {
    label: {
      en: "Projects",
      es: "Proyectos",
    },
    elementToScrollId: "projects",
  },
  {
    label: {
      en: "Contact",
      es: "Contacto",
    },
    elementToScrollId: "contact",
  },
];

export function Navbar() {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const toggleSelectIsOpen = () => setSelectIsOpen(!selectIsOpen);
  const closeSelectIsOpen = () => setSelectIsOpen(false);

  const handleListClick = (element: string) => {
    if (selectIsOpen) closeSelectIsOpen();
    scrollToElement(element);
  };

  return (
    <div className="fixed bg-white w-full">
      <nav className="flex justify-between text-lg font-bold py-4 max-w-6xl px-4 xl:m-auto xl:px-0 ">
        <span>PABLO VILLARROEL</span>
        <ul className="gap-6 hidden md:flex">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.label.en}
              className="px-2 cursor-pointer hover:bg-black hover:text-white transition-colors duration-500"
              onClick={() => handleListClick(item.elementToScrollId)}
            >
              {item.label.en.toUpperCase()}
            </li>
          ))}
        </ul>
        <button onClick={toggleSelectIsOpen} className="md:hidden">
          click me
        </button>
      </nav>
      {selectIsOpen ? (
        <ul className="gap-6 flex flex-col pb-4">
          {MENU_ITEMS.map((item) => (
            <li
              onClick={() => handleListClick(item.elementToScrollId)}
              key={item.label.en}
              className="font-bold"
            >
              {item.label.en.toUpperCase()}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
