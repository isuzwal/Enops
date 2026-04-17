interface ChildrenProps {
  children: React.ReactNode;
}

export const Section = ({ children }: ChildrenProps) => {
  return (
    <main className="min-h-screen max-w-5xl mx-auto w-full  px-2 ">
      {children}
    </main>
  );
};
