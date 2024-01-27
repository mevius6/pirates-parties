import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} className="font-bold tracking-tight">{format(date, "d LLL yyyy", {locale: ru})}</time>;
}
