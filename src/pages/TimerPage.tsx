import { zodResolver } from '@hookform/resolvers/zod';
import { differenceInSeconds } from 'date-fns';
import { Play, Stop } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

const newCicleFormValidationSchema = zod.object({
  taskName: zod.string().min(1, 'Please! Type the task'),
  taskMinutesAmount: zod.number().min(5).max(60),
});

type INewCicleFormFields = zod.infer<typeof newCicleFormValidationSchema>;

interface Cycle {
  id: string;
  taskName: string;
  taskMinutesAmount: number;
  startDate: Date;
  stopDate?: Date;
  FinishedDate?: Date;
}

export function TimerPage() {
  const [cycles, setCycle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<INewCicleFormFields>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      taskMinutesAmount: 0,
      taskName: '',
    },
  });

  function handleCreateNewCicle(data: INewCicleFormFields) {
    setAmountSecondsPassed(0);
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      taskName: data.taskName,
      taskMinutesAmount: data.taskMinutesAmount,
      startDate: new Date(),
    };

    setCycle((state) => [...state, newCycle]);
    setActiveCycleId(id);
    reset();
  }

  function handleStopCycle() {
    setCycle(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, stopDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );

    setActiveCycleId(null);
  }

  const activeCyleObj = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCyleObj ? activeCyleObj.taskMinutesAmount * 60 : 0;
  const currentSeconds = activeCyleObj ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeCyleObj) document.title = `${minutes}:${seconds}`;
  }, [minutes, seconds, activeCyleObj]);

  const task = watch('taskName');
  const isSubmitDisabled = !task;

  useEffect(() => {
    let interval: number;

    if (activeCyleObj) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(new Date(), activeCyleObj.startDate);

        if (secondsDiff >= totalSeconds) {
          setCycle(
            cycles.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, FinishedDate: new Date() };
              } else {
                return cycle;
              }
            }),
          );
        } else {
          setAmountSecondsPassed(secondsDiff);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCyleObj]);

  return (
    <main className="flex h-full flex-1  flex-col items-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCicle)}
        className="flex flex-col items-center gap-14"
      >
        <div className="flex w-full flex-wrap items-center justify-center gap-2 text-lg font-bold text-gray-100">
          <label htmlFor="task">I{"'"}m gonna work on</label>
          <input
            {...register('taskName')}
            className="h-10 flex-1 border-0 border-b-2 border-gray-500 bg-transparent px-1 text-lg  font-bold text-gray-100 transition-all placeholder:text-gray-500 focus:-translate-y-1 focus:rounded focus:border-b-green-300 focus:shadow focus:shadow-green-300 "
            id="task"
            list="task-suggest"
            placeholder="Type the task name here"
          />

          <datalist id="task-suggest">
            <option value="dale" />
          </datalist>

          <label htmlFor="minutesAmount">For</label>
          <input
            {...register('taskMinutesAmount', { valueAsNumber: true })}
            className="h-10 border-0 border-b-2 border-gray-500 bg-transparent px-1 text-lg  font-bold text-gray-100 transition-all placeholder:text-gray-500 focus:-translate-y-1 focus:rounded focus:border-b-green-300 focus:shadow focus:shadow-green-300"
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={5}
            max={60}
            step={5}
          />
          <span>minutes.</span>
        </div>
        <div className="flex gap-4 font-rmono text-[10rem] leading-[8rem] text-gray-100">
          <span className="rounded-lg bg-gray-900 py-8 px-4">{minutes[0]}</span>
          <span className="rounded-lg bg-gray-900 py-8 px-4">{minutes[1]}</span>
          <span className="flex w-16 justify-center overflow-hidden py-8 text-green-300">
            :
          </span>
          <span className="rounded-lg bg-gray-900 py-8 px-4">{seconds[0]}</span>
          <span className="rounded-lg bg-gray-900 py-8 px-4">{seconds[1]}</span>
        </div>
        {activeCyleObj ? (
          <button
            type="button"
            onClick={handleStopCycle}
            className="flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-lg border-0 bg-red-700  py-4 font-bold text-gray-300 hover:bg-red-500 hover:text-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
          >
            <Stop size={24} />
            <strong>Stop</strong>
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="flex w-full max-w-2xl cursor-pointer items-center justify-center gap-2 rounded-lg border-0 bg-green-500  py-4 font-bold text-gray-300 hover:bg-green-300 hover:text-gray-100 disabled:cursor-not-allowed disabled:bg-green-700 disabled:text-gray-400"
          >
            <Play size={24} />
            <strong>Start</strong>
          </button>
        )}
      </form>
    </main>
  );
}
