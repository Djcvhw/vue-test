<template>
  <div class="tabs">
    <div>
      <va-button-group outline>
        <va-button @click="switchTab(0)">Candle</va-button>
        <va-button @click="switchTab(1)">Price</va-button>
      </va-button-group>
    </div>
    <candle-chart v-if="tab === 0" />
    <price-table v-else-if="tab === 1" />
  </div>
</template>

<script lang="ts">
import CandleChart from "./CandleChart.vue";
import PriceTable from "./PriceTable.vue";
type Data = {
  tab: number;
};
export default {
  data(): Data {
    return {
      tab: 0,
    };
  },
  methods: {
    switchTab(selected: number): void {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      this.tab = selected;
    },
  },
  components: {
    CandleChart,
    PriceTable,
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
