import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} className="font-bold">{format(date, "LL. d. yyyy")}</time>;
}
