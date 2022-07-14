interface Props {
  status: 'completed' | 'incompleted' | 'inProgress';
}

export function HistoryStatus({ status }: Props) {
  switch (status) {
    case 'completed':
      return (
        <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:content-['']">
          Completed
        </span>
      );
    case 'incompleted':
      return (
        <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-red-500 before:content-['']">
          Incompleted
        </span>
      );
    case 'inProgress':
      return (
        <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-yellow-500 before:content-['']">
          In Progress
        </span>
      );
  }
}
