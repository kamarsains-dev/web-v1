type Props = {
  children: React.ReactNode;
};

export const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="hidden md:block w-[304px] z-50">
      <div className="fixed">
        {children}
      </div>
    </div>
  );
};
