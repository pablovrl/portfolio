interface SectionLayoutProps {
  children: React.ReactNode;
}

export function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <section className="lg:max-w-6xl lg:mx-auto">
      {children}
    </section>
  );
}