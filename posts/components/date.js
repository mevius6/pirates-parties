import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} className="font-serifDeckNarrowSemi capitalize tracking-normal leading-none">{format(date, "d LLL yyyy", {locale: ru})}</time>;
}
