import { computed, defineComponent, reactive, watch } from "vue";
import { ChartConfiguration } from "chart.js";

import { CHART_CONFIGURATION } from "./shared/constants/dashboard.constant";

import ChevronDownIcon from "@/app/shared/assets/icons/chevron-down.png";
import ChevronUpIcon from "@/app/shared/assets/icons/chevron-up.png";
import HelpIcon from "@/app/shared/assets/icons/help.png";
import ArrowDownIcon from "@/app/shared/assets/icons/arrow-down.svg";
import CalendarIcon from "@/app/shared/assets/icons/calendar.png";
import TrolleyImage from "@/app/shared/assets/images/trolley.svg";
import { AdvCard } from "@/app/shared/components/card";
import { AdvChart } from "@/app/shared/components/chart";
import { AdvMedia } from "@/app/shared/components/media";
import {
  AVERAGE_PURCHASE_VALUE,
  BEST_SELLING_SKU,
  TOP_COMPETITOR_SKU,
} from "@/app/shared/constants/data.constant";
import { rupiahCurrency } from "@/app/shared/utils/currency";

export default defineComponent({
  name: "DashboardPage",

  components: {
    AdvCard,
    AdvChart,
    AdvMedia,
  },

  setup() {
    const salesTurnover = 3600000;

    const state = reactive<{
      chartConfiguration: ChartConfiguration;
      lastMonth: string;
    }>({
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      chartConfiguration: getChartDatasets(),
      lastMonth: "6",
    });

    const salesTurnoverRupiah = computed(() => {
      return rupiahCurrency(salesTurnover);
    });

    watch(
      () => state.lastMonth,
      (lastMonth: string) => {
        console.log(lastMonth);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        state.chartConfiguration = getChartDatasets(lastMonth);
      },
    );

    function getChartDatasets(lastMonth = "6"): ChartConfiguration {
      const transformLastMonth = parseInt(lastMonth);

      return {
        ...CHART_CONFIGURATION,
        data: {
          ...CHART_CONFIGURATION.data,
          datasets: AVERAGE_PURCHASE_VALUE[transformLastMonth],
        },
      };
    }

    return {
      ArrowDownIcon,
      BEST_SELLING_SKU,
      CalendarIcon,
      ChevronDownIcon,
      ChevronUpIcon,
      HelpIcon,
      salesTurnoverRupiah,
      state,
      TOP_COMPETITOR_SKU,
      TrolleyImage,
    };
  },
});
