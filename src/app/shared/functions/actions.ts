import { fi } from "date-fns/locale";
import { SearchFilterComponent } from "../components/search-filter/search-filter.component";

export function DatesFilter(component: any) {
  let datesFilterArray = [
    {
      labelDate: component.component.datesFilterArray[0],
      dateStart: component.component.filters.startDate,
      dateEnd: component.component.filters.endDate,
    },
  ];

  let dialogDatesFilter = component._dialog.open(SearchFilterComponent, {
    width: "380px",
    data: datesFilterArray,
  });

  dialogDatesFilter.componentInstance.datesFilter.subscribe((data) => {
    component.component.filters.startDate = data.startDate;
    component.component.filters.endDate = data.endDate;

    let filter_active = false;

    Object.entries(data).forEach(([key, value]) => {
      if (value != null && filter_active == false) {
        filter_active = true;
      }
    });

    component.component.filters_dates_actives = filter_active;
    dialogDatesFilter.close(true);
  });

  dialogDatesFilter.afterClose().subscribe((data: any) => {
    if (data) {
      component.formatGetInputs();
    }
  });
}
