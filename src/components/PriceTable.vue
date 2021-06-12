<template>
  <h2>PriceTable</h2>
  <table class="va-table table">
    <thead>
      <tr>
        <th>Currency</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="key in Object.keys(prices)" :key="key">
        <td>{{ key }}</td>
        <td>{{ prices[key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
type Data = {
  prices: Record<string, number>;
  ws: WebSocket | null;
};

export default {
  mounted(): void {
    this.ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${this.$route.params.id}`);
    this.ws.onmessage = (event) => {
      console.log(event.data);
      this.prices = event.data;
    };
  },
  unmounted(): void {
    this.ws && this.ws.close();
  },
  data(): Data {
    return {
      ws: null,
      prices: {},
    };
  },
};
</script>
