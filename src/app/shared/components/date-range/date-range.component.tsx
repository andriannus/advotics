import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import Litepicker from "litepicker";
import { lastDayOfMonth, startOfMonth, subDays } from "date-fns";

import { DATE_TIME_FORMAT } from "./date-range.constant";
import { DateRangeComponentState } from "./date-range.model";
import "./date-range.component.scss";

import ChevronDownIcon from "@/app/shared/assets/icons/chevron-down.png";
import CalendarIcon from "@/app/shared/assets/icons/calendar.png";
import { AdvCard } from "@/app/shared/components/card";

export default defineComponent({
  name: "DateRangeComponent",

  components: {
    AdvCard,
  },

  setup() {
    const state = reactive<DateRangeComponentState>({
      dateRange: [],
      isShown: false,
      period: "",
      picker: {} as Litepicker,
    });

    onMounted(() => {
      renderLitepicker();
    });

    function setPeriod(): void {
      const [startDate, endDate] = state.dateRange;

      state.period = startDate;

      if (endDate) {
        state.period = `${startDate} - ${endDate}`;
      }
    }

    function renderLitepicker(): void {
      const element = document.querySelector(
        ".DateRange-canvas",
      ) as HTMLElement;

      state.picker = new Litepicker({
        element,
        inlineMode: true,
        numberOfMonths: 2,
        numberOfColumns: 2,
        singleMode: false,
      });
    }

    function setToday(): void {
      state.picker.clearSelection();
      state.picker.setDate(new Date());
    }

    function setYesterday(): void {
      const yesterday = subDays(new Date(), 1);

      state.picker.clearSelection();
      state.picker.setDate(yesterday);
    }

    function setLastSevenDays(): void {
      const lastSevenDays = subDays(new Date(), 7);

      state.picker.clearSelection();
      state.picker.setDateRange(new Date(), lastSevenDays);
    }

    function setLastThirtyDays(): void {
      const lastThirtyDays = subDays(new Date(), 30);

      state.picker.clearSelection();
      state.picker.setDateRange(new Date(), lastThirtyDays);
    }

    function setThisMonth(): void {
      const startDate = startOfMonth(new Date());
      const endDate = lastDayOfMonth(new Date());

      state.picker.clearSelection();
      state.picker.setDateRange(startDate, endDate);
    }

    function setSelectedDate(): void {
      const start = state.picker.getStartDate();
      const end = state.picker.getEndDate();

      state.dateRange = [
        start?.toLocaleString("id-ID", DATE_TIME_FORMAT) || "",
        end?.toLocaleString("id-ID", DATE_TIME_FORMAT) || "",
      ];

      setPeriod();
      toggleDialog();
    }

    function toggleDialog(): void {
      state.isShown = !state.isShown;
    }

    return (): JSX.Element => (
      <>
        <div class="DateRange" onClick={() => toggleDialog()}>
          <div class="Flex AlignItems-center">
            <img src={CalendarIcon} alt="Calendar" />
            <span class="MarginRight-medium">Period</span>
            <span>{state.period || "-"}</span>
          </div>

          <img src={ChevronDownIcon} alt="Chevron Down" class="Icon" />
        </div>

        <AdvCard v-show={state.isShown} class="DateRange-dialog">
          <div class="DateRange-dialogHeader">
            <div class="Flex">
              <img src={CalendarIcon} alt="Calendar" />
              <span class="MarginLeft-small">Period</span>
            </div>

            <button onClick={() => toggleDialog()}>⨉</button>
          </div>

          <div class="DateRange-dialogContent">
            <div class="DateRange-sideBar">
              <ul class="DateRange-list MarginBottom-small">
                <li class="DateRange-listItem" onClick={() => setToday()}>
                  Today
                </li>

                <li class="DateRange-listItem" onClick={() => setYesterday()}>
                  Yesterday
                </li>

                <li
                  class="DateRange-listItem"
                  onClick={() => setLastSevenDays()}
                >
                  Last 7 days
                </li>

                <li
                  class="DateRange-listItem"
                  onClick={() => setLastThirtyDays()}
                >
                  Last 30 days
                </li>

                <li class="DateRange-listItem" onClick={() => setThisMonth()}>
                  This Month
                </li>

                <li class="DateRange-listItem">Custom</li>
              </ul>

              <button
                class="Button Button--primary Button--small Button--fullWidth"
                onClick={() => setSelectedDate()}
              >
                Apply
              </button>
            </div>

            <div class="DateRange-canvas"></div>
          </div>
        </AdvCard>
      </>
    );
  },
});
