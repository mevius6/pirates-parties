import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} className="font-cond tracking-tight">{format(date, "LL. d. yyyy")}</time>;
}
