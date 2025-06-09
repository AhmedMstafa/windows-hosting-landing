type mainWrapperProps = {
  children: React.ReactNode;
};

export default function MainWrapper({ children }: mainWrapperProps) {
  return <main className="bg-section-color">{children}</main>;
}
