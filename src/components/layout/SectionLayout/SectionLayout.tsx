interface SectionLayoutProps {
  id?: string;
  children: React.ReactNode;
}

export function SectionLayout({ children, id }: SectionLayoutProps) {
  return (
    <section id={id} className="lg:max-w-6xl xl:mx-auto w-full px-4 xl:px-0">
      {children}
    </section>
  );
}
