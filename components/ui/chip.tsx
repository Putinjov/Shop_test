import clsx from "clsx";

type ChipProps = {
  label: string;
  active?: boolean;
};

export function Chip({ label, active = false }: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex min-h-10 items-center rounded-full border px-4 text-sm",
        active ? "border-ink-800 bg-ink-800 text-white" : "border-ink-800/20 bg-white"
      )}
    >
      {label}
    </span>
  );
}
