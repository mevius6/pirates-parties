import { BRAND_NAME_ABBR } from "@/lib/constants";

export default function Intro() {
  return (
    // <section className="mt-16 mb-16 md:mb-12">
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-8">
      <h1 className="text-6xl md:text-8xl md:pr-8 leading-cap">
        {/* <abbr className="font-displaycaps">{BRAND_NAME_ABBR}</abbr> */}
        <abbr>{BRAND_NAME_ABBR}</abbr>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="256" viewBox="0 0 225 73">
          <path fill="#21201F" d="m1.537 60.405.288-2.88c.192-1.632-.288-4.512-.288-6.912v-8.16c0-4.992.576-3.072.384-7.776 0-.864-.096-1.728-.096-2.496v-7.104l.096-5.376c0-.288-.096-.384.096-.96v-2.496c0-1.824-.192-3.745-.384-5.569-.096-.767-.192-1.727-.192-2.495 0-2.016.672-2.88 1.344-3.552.48-.576.96-1.152 2.4-1.152H7.01c4.992 0 1.824-.288 7.104-.288 3.072-.096 10.656.192 16.512.192h12.768c3.744 0 7.296-.288 10.944-.288.192 0 .288 0 .48.096 1.056.096 1.536 0 2.496 0h2.304c1.056 0 2.784-.288 3.936-.288 1.632 0 2.688.864 3.168 1.44.192.096 1.056 1.248.96 2.688l-.096 1.728c-.096.96-.288.864-.288 2.016 0 .96.096 1.536-.096 5.088l-.096 2.016c-.096 1.536.192 3.936.288 4.992.384 4.8-.384 8.736-.384 12.96v4.704c.288 3.744.096 4.416.192 6.624l.096 3.552c0 1.632.192 1.92.096 3.936s-.096 1.92-.096 3.072c0 2.016-.192 3.168 0 5.376.096 2.208.192.768.288 2.688v.48c0 .864-.192 2.208-1.152 3.168-.48.576-1.536 1.536-3.072 1.536-1.728 0-3.456-.096-5.184-.096-1.152 0-2.208.096-3.36.096l-4.704-.192c-1.44-.096-2.784.096-4.608.096-1.92 0-2.4-.288-3.168-1.248-.576-.768-.864-1.152-.864-2.88 0-2.112.096-1.248.096-3.36v-.672c0-.768-.096-1.44-.192-2.496-.384-3.744-.192-5.856-.192-11.04V43.7c0-2.496.192-4.896.192-7.488v-1.824c0-2.305-1.44-3.456-1.728-3.648-1.92-1.248-2.592-.576-3.552-.672l-2.016-.096c-.672 0-2.784.288-3.264.384-.384.096-1.44.384-1.824.672-.384.384-1.152 1.152-1.152 2.4v3.84c0 1.632.096 3.072.096 4.703 0 2.304-.288 4.416-.288 6.624 0 1.825.288 2.977.672 5.089.384 3.552-.384 4.704-.48 7.776 0 1.344.096 2.4.096 4.224v.576c0 2.304-.48 2.784-1.152 3.456-.768.768-1.248 1.152-3.264 1.248h-1.056c-.864-.096-1.344-.192-2.88-.192h-7.584c-1.056 0-1.92.096-2.976.096H6.721c-2.304 0-3.264-.48-4.128-1.344-.672-.48-1.152-.96-1.152-2.976 0-1.44.096-2.784.096-4.224 0-.576-.096-1.248 0-1.92Zm101.829-36.576c1.248 0 3.264-1.633 5.76-6.049 1.632-2.784 2.4-5.663 3.36-8.927.96-3.264 1.344-4.512 2.688-5.376.48-.288 1.728-.576 3.456-.576h1.92c.672 0 2.016 0 2.784-.096.96-.096 1.344-.096 2.112-.096.96 0 2.208.096 3.36.192 1.344.096 1.824.192 2.592.192h1.248c.576 0 .864-.096 1.824-.192.96 0 2.4-.096 2.88-.096 1.728 0 4.416.384 4.416 2.016 0 1.152 0 1.536-.384 2.688a37.913 37.913 0 0 1-1.536 3.935l-.864 2.017c-.768 1.824-1.824 3.072-2.688 4.8-.864 1.536-.96 2.207-1.728 3.168-1.44 1.92-1.632 2.591-2.304 3.552l-1.44 2.207c-.768 1.056-1.536 2.017-2.304 3.265-1.152 1.824-1.92 2.784-1.92 4.128-.096 1.247.384 1.728.384 1.824.672.768 0 .288 1.536 2.4.864 1.248 1.92 3.264 2.688 4.416 1.92 2.976 3.264 5.088 3.936 5.856.288.384.864 1.632 1.632 2.784l2.976 4.896c1.536 2.688 3.072 4.224 3.84 5.472 1.728 2.208 2.4 3.84 2.4 5.856 0 2.208-2.112 3.072-3.456 2.976-1.44-.096-4.416-.384-5.856-.384-1.248 0-2.112.096-3.36 0-1.632-.096-2.784-.289-4.512-.289-1.632 0-2.784.289-4.512.385-.96.096-1.536.096-2.496.096h-1.056c-.672 0-1.44-.096-1.632-.192-.384 0-2.592-.097-3.072-1.44l-1.248-2.112c-.864-1.728-.96-1.824-2.208-4.128-1.056-2.112-1.344-2.496-2.592-4.704-.48-.768-1.056-1.248-1.536-2.016-1.152-1.536-3.84-7.392-5.76-7.392-.192 0-1.152 0-1.92.864-1.248 1.44-.384 5.856-.576 8.352-.096.768-.192 2.88-.192 3.648 0 1.728.576 2.88.576 4.512 0 3.648-1.728 4.608-4.896 4.608H93.19c-1.536 0-2.592 0-4.224-.192-1.728-.096-2.976-.385-4.8-.385-2.112.096-3.552.48-5.664.48-1.056 0-2.112 0-3.168-1.055-.192-.096-.576-.48-.672-.768-.288-.384-.384-.864-.48-1.632-.192-.768-.288-1.056-.288-2.496v-.288c.096-1.824.288-3.168.48-4.992.096-1.056.096-1.824.096-2.88.096-.576.096-.96.096-1.536 0-.672-.096-.864-.096-1.344 0 0-.096-.96-.096-1.536 0-2.016.192-3.456.192-5.472 0-3.456-.384-5.952-.384-9.504 0-2.112.288-3.648.288-5.76 0-1.92-.096-3.169 0-4.992.096-2.112.384-3.552.384-5.665 0-2.207-.192-3.648-.384-5.76-.096-1.728-.096-2.88-.096-4.511 0-.864-.096-1.536-.096-2.4 0-2.304.864-3.744 1.824-4.704.288-.192.48-.384.576-.384.288-.192.768-.288 1.536-.288h3.36c1.632 0 2.784.192 4.416 0 1.152 0 1.92-.192 3.072-.192 1.632 0 2.784.096 4.416.096 1.536 0 4.608-.288 6.048.96.288.192.48.288.768.768.192.384.384 2.208.384 2.688 0 .96-.192 1.728-.288 2.688-.096 1.343 0 2.304-.096 3.648-.096.96 0 3.36 0 4.32 0 .672.096 1.152.096 1.824.096.863 0 2.784 1.056 3.648.192.096 1.344.576 1.92.576Zm92.553 20.544h-.096c-.192 0-.48.192-.576.192-.576.48-1.056.768-1.632 1.344a.75.75 0 0 0-.384.383c-.288.289-.192.097-.384.48-.288.193-.672.673-.864.96l-1.344 1.153c-.48.576-.576 1.056-1.536 1.92-.672.575-1.92 1.536-2.592 1.536-.48 0-.672-.096-1.152-.288-1.344-.576-1.344-1.056-2.112-1.632-.288-.288-.96-.672-1.536-1.248l-1.344-1.632c-1.44-1.536-1.728-1.92-2.688-1.92-.864 0-1.632.48-1.632 1.44v.096c0 .672.192 1.152.288 1.728.096.672.096 1.056.096 1.728 0 1.344-.096 2.304 0 3.648 0 1.632.192 2.784.192 4.416-.096 1.44-.384 2.784-.384 4.224v.288c0 1.632.192 2.784.192 4.416 0 3.168-2.112 3.264-4.32 3.264-1.824 0-3.072-.192-4.896-.192-1.056 0-1.824.096-2.88.096-1.248 0-2.496-.096-3.84-.096-1.248 0-2.016.096-3.264.096-.864.096-1.536.096-2.4.096-1.344 0-2.784 0-4.128-1.44-.864-.96-1.152-2.305-1.152-2.4-.192-.672-.192-1.248-.192-2.4 0-1.728.288-2.88.48-4.608l.192-3.456c.096-2.208.288-3.84.288-6.048 0-3.072-.384-5.184-.384-8.256 0-3.744.384-6.432.384-10.272V31.7c0-1.44-.096-2.784-.096-4.224 0-2.209.192-3.84.192-6.048 0-2.4-.192-4.032-.48-6.528-.096-.672-.384-3.168-.384-5.568.096-1.44.288-3.168 1.056-4.608.288-.384.768-.96 1.056-1.152.864-.576 2.208-.576 2.208-.576.384-.096 1.248-.192 2.208-.192 2.592 0 5.088.384 7.584.384 2.592 0 4.512-.192 7.2-.192 1.824 0 2.88.192 3.744.768.576.384 1.536 1.344 2.4 2.784 0 .096.864 1.632 1.44 2.496.48.768.96 1.152 1.536 1.824l3.168 4.223 1.44 1.537 1.152 1.151c.096 0 .384.289.576.48.288.097.48.193.96.193 1.728 0 2.688-1.92 2.88-2.208l.48-.576c.288-.288.192-.097.384-.48.672-.768 1.152-1.537 1.344-1.92.288-.672.48-1.248.864-1.825.384-.768.768-1.248 1.248-2.015.192-.288.864-1.824 1.824-2.976.576-.768 1.152-1.056 1.728-1.728.96-.96 1.248-1.536 2.496-1.536s2.016-.192 3.264-.192c1.344 0 2.208.096 3.552.096 2.88 0 10.176-.768 13.056.096.192.096 1.632.384 2.496 1.536.672.96.672 2.208.672 3.072 0 1.344-.096 2.304-.288 3.647-.096 2.017-.288 3.36-.288 5.376 0 1.44.096 2.4.192 3.84v2.593c.096 1.152.288 1.92.288 2.976 0 1.344-.192 2.208-.192 3.456-.192 2.784-.384 4.704-.384 7.488 0 2.4.192 4.032.192 6.431 0 1.825-.096 3.073 0 4.8.192 2.017.384 3.457.384 5.377 0 2.112 0 3.552.096 5.664.096 1.632.288 2.784.288 4.416 0 .768-.192 3.456-.384 4.128-.288.768-.672 1.248-.864 1.44-1.344 1.44-2.976 1.44-4.416 1.44-.576.096-.96.096-1.44.096-1.248 0-2.016-.192-3.264-.192-1.728-.096-2.976-.096-4.704-.096-1.056 0-1.92.096-2.4.192-1.056.096-1.728.192-2.88.192-.768 0-3.168-.096-3.936-.48a3.987 3.987 0 0 1-1.056-.672c-.48-.384-.576-.48-.768-.769-.288-.576-.384-2.207-.48-2.687 0-1.632.288-2.784.192-4.416-.096-1.344-.48-2.304-.48-3.744 0-.288.096-.672.096-1.056v-1.824c.096-.192.288-1.152.288-1.824 0-.48-.096-.864-.096-1.344-.096-.48-.096-.768-.096-1.248 0-1.248 0-2.112.096-3.36V46.58c0-1.056-.384-1.728-.864-2.016-.192-.192-.384-.192-.48-.192Z"/>
        </svg> */}
      </h1>
      <h4 className="mt-3.5 md:mt-auto mb-0 text-center md:text-left md:pl-8">
        imagine your trip<br/>
        бортовой журнал &bull; архив материалов &bull; анонс мероприятий
      </h4>
    </section>
  );
}
