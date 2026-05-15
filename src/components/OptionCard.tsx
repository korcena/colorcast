interface Props {
  text: string;
  selected: boolean;
  onToggle: () => void;
}

export default function OptionCard({ text, selected, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer"
      style={
        selected
          ? {
              backgroundColor: '#EEEDFE',
              borderColor: '#7F77DD',
              boxShadow: '0 0 0 1px #7F77DD',
            }
          : {
              backgroundColor: '#fff',
              borderColor: '#E5E7EB',
            }
      }
    >
      <span
        className="flex-shrink-0 w-5 h-5 mt-0.5 rounded flex items-center justify-center border-2 transition-all duration-150"
        style={
          selected
            ? { borderColor: '#7F77DD', backgroundColor: '#7F77DD' }
            : { borderColor: '#D1D5DB', backgroundColor: '#fff' }
        }
      >
        {selected && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </button>
  );
}
