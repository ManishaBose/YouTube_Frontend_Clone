export function VideoGrid({ children }: any) {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-5">
      {children}
    </div>
  );
}
