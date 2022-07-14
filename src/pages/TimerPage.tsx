import { Play } from 'phosphor-react';

export function TimerPage() {
  return (
    <main className="flex h-full flex-1  flex-col items-center">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold text-gray-100">
          <label htmlFor="task">I{"'"}m gonna work on</label>
          <input
            className="h-10 flex-1 border-0 border-b-2 border-gray-500 bg-transparent px-1 text-lg  font-bold text-gray-100 transition-all placeholder:text-gray-500 focus:-translate-y-1 focus:rounded focus:border-b-green-300 focus:shadow focus:shadow-green-300 "
            id="task"
            placeholder="Type the task name here"
          />

          <label htmlFor="minutesAmount">For</label>
          <input
            className="h-10 border-0 border-b-2 border-gray-500 bg-transparent px-1 text-lg  font-bold text-gray-100 transition-all placeholder:text-gray-500 focus:-translate-y-1 focus:rounded focus:border-b-green-300 focus:shadow focus:shadow-green-300"
            type="number"
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutes.</span>
        </div>
        <div className="flex gap-4 font-rmono text-[10rem] leading-[8rem] text-gray-100">
          <span className="rounded-lg bg-gray-900 py-8 px-4">0</span>
          <span className="rounded-lg bg-gray-900 py-8 px-4">0</span>
          <span className="flex w-16 justify-center overflow-hidden py-8 text-green-300">
            :
          </span>
          <span className="rounded-lg bg-gray-900 py-8 px-4">0</span>
          <span className="rounded-lg bg-gray-900 py-8 px-4">0</span>
        </div>
        <button
          type="submit"
          className="flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-lg border-0 bg-green-500  py-4 font-bold text-gray-300 hover:bg-green-300 hover:text-gray-100 disabled:cursor-not-allowed disabled:bg-green-700 disabled:text-gray-400"
        >
          <Play size={24} />
          <strong>Start</strong>
        </button>
      </form>
    </main>
  );
}
