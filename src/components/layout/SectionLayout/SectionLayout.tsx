interface SectionLayoutProps {
  id?: string;
  children: React.ReactNode;
}

export function SectionLayout({ children, id }: SectionLayoutProps) {
  return (
    <section id={id} className="lg:max-w-6xl lg:mx-auto w-full">
      {children}
    </section>
  );
}
