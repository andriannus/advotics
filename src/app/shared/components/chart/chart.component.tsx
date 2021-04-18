import {
  defineComponent,
  onBeforeMount,
  onMounted,
  PropType,
  ref,
  watch,
} from "vue";
import { Chart, ChartConfiguration, registerables } from "chart.js";

export default defineComponent({
  name: "ChartComponent",

  props: {
    configuration: {
      type: Object as PropType<ChartConfiguration>,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    const chart = ref<Chart>({} as Chart);

    onBeforeMount(() => {
      Chart.register(...registerables);
    });

    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      renderChart();
    });

    watch(
      () => props.configuration.data.datasets,
      () => {
        chart.value.destroy();
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        renderChart();
      },
    );

    function renderChart(): void {
      const element = document.getElementById(props.id) as HTMLCanvasElement;
      chart.value = new Chart(element, props.configuration);
    }

    return (): JSX.Element => <canvas id={props.id}></canvas>;
  },
});
