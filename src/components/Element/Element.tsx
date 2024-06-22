const Element = ({ name, symbol }: { name: string; symbol: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-16 h-16 px-4 py-2 m-2 rounded-sm shadow-md bg-violet-200 dark:bg-violet-600">
      <h1 className="text-xl font-bold">{symbol}</h1>
      <h3 className="text-xs font-light">{name}</h3>
    </div>
  );
};

export default Element;
