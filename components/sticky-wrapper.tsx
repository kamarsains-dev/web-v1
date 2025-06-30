type Props = {
  children: React.ReactNode;
};

export const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="hidden lg:block w-[368px] z-50">
      <div className="fixed">
        {children}
      </div>
    </div>
  );
};
