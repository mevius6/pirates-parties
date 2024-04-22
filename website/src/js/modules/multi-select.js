// https://github.com/argyleink/gui-challenges/tree/main/multi-select
import Isotope from "isotope-layout";
import { select } from "../utils";

// https://isotope.metafizzy.co
const IsotopeGrid = new Isotope( 'article', {
  itemSelector: 'span',
  layoutMode: 'fitRows',
  percentPosition: true
})

const filterGrid = query => {
  const { matches:motionOK } = window.matchMedia(
    '(prefers-reduced-motion: no-preference)'
  )

  IsotopeGrid.arrange({
    filter: query,
    stagger: 25,
    transitionDuration: motionOK ? '0.4s' : 0,
  })
}

// takes a <select> and returns the selection as an array
const prepareSelectOptions = (element) =>
  Array.from(element.selectedOptions).reduce((data, opt) => {
    data.push([opt.parentElement.label.toLowerCase(), opt.value]);
    return data;
  }, []);

// <select> watcher
select('select').addEventListener('input', (e) => {
  let selectData = prepareSelectOptions(e.target);
  console.warn('Multiselect', selectData);

  // DEMO
  // isotope query assembly from checkbox selections
  let query = selectData
    .reduce((query, val) => {
      query.push('.' + val[1].split(' ').join('-'));
      return query;
    }, [])
    .join(',');

  filterGrid(query);

  // update for assistive technology
  let statusRoleElement = select('#applied-filters');
  let filterResults = IsotopeGrid.getFilteredItemElements().length

  statusRoleElement.style.counterSet = selectData.length;
  statusRoleElement.textContent = " giving " + filterResults + " results"
});

select('aside form').addEventListener('input', (e) => {
  if (e.target.nodeName === 'SELECT') return;

  const formData = new FormData(select('form'));
  console.warn('Checkboxes', Array.from(formData.entries()));

  // DEMO
  // isotope query assembly from checkbox selections
  let query = Array.from(formData.values())
    .reduce((query, val) => {
      query.push('.' + val.split(' ').join('-'));
      return query;
    }, [])
    .join(',');

  filterGrid(query)

  let amount = IsotopeGrid.getFilteredItemElements().length;

  // output: giving results
  select('#applied-filters')
      .textContent = "Найдено: "
        + IsotopeGrid.getFilteredItemElements().length
        + ((amount == 0 || amount > 4)
          ? " товаров"
          : ((amount != 1) ? " товара" : " товар"))
});
