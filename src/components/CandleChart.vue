<template>
  <h2>CandleChart</h2>
  <trading-vue v-if="ohlcv.length" :data="this.$data"></trading-vue>
</template>

<script lang="ts">
import TradingVue from "trading-vue-js";

type Data = {
  ohlcv: Record<string, string | number>[];
};

const tradingDataConvert = (
  data: Record<string, string | number>[]
): number[][] => {
  return data.map((d: Record<string, string | number>): number[] => [
    Number(d["period"]),
    Number(d["open"]),
    Number(d["high"]),
    Number(d["low"]),
    Number(d["close"]),
    Number(d["volume"]),
  ]);
};

export default {
  components: { TradingVue },
  mounted(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    fetch(`https://api.coincap.io/v2/candles?exchange=${this.$route.params.id}&interval=h8&baseId=ethereum&quoteId=bitcoin`
    )
      .then((response) => response.json())
      .then((json) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.ohlcv = tradingDataConvert(json.data);
      });
  },
  data(): Data {
    return {
      ohlcv: [],
    };
  },
};
</script>
