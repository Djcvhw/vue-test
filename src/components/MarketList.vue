<template>
  <h2>Markets</h2>
  <table class="va-table va-table--clickable">
    <thead>
      <tr>
        <th v-for="(column, index) in tableColumns" :key="index">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in list"
        :key="row.exchangeId"
        @click="selectItem(row.exchangeId)"
      >
        <td v-for="item in Object.keys(row)" :key="item">{{ row[item] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
type Market = Record<string, string | boolean | number>;
type Data = {
  list: Market[];
  tableColumns: string[];
};
export default {
  data(): Data {
    return {
      list: [],
      tableColumns: []
    };
  },
  mounted(): void {
    fetch("https://api.coincap.io/v2/markets")
      .then((response) => response.json())
      .then((json) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.list = json.data;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.tableColumns = Object.keys(json.data[0]);
      });
  },
  methods: {
    selectItem(id: string): void {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      this.$router.push({ name: "Market", params: { id } });
    },
  },
};
</script>
