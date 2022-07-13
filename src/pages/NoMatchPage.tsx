import { Link } from 'react-router-dom';

export function NoMatchPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-green-500 p-8">
        <h2 className="text-5xl font-bold text-gray-100">Something Wrongs Here...</h2>
        <p className="my-8 max-w-[33rem] text-justify text-2xl font-bold text-gray-100">
          We can{"'"}t find the page you{"'"}re looking for. You can Head back to home on
          the button below
        </p>
        <Link
          to="/"
          className="rounded-lg border border-green-300 px-4 py-2 text-2xl text-green-300 transition hover:bg-green-300 hover:text-gray-100"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
