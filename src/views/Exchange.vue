<template>
  <div class="item-properties">
    <va-list>
      <va-list-item v-for="key in Object.keys(item)" :key="key">
        <va-list-item-section>
          <va-list-item-label>
            {{ item[key] }}
          </va-list-item-label>
          <va-list-item-label caption>
            {{ key }}
          </va-list-item-label>
        </va-list-item-section>
      </va-list-item>
    </va-list>
  </div>
  <tabs />
</template>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";

type Data = {
  item: Record<string, string | boolean | number>;
  tableColumns: string[];
};
export default {
  data(): Data {
    return {
      item: {},
      tableColumns: [],
    };
  },
  mounted(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    fetch(`https://api.coincap.io/v2/exchanges/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.item = json.data;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.tableColumns = Object.keys(json.data);
      });
  },
  components: { Tabs },
};
</script>

<style lang="scss" scoped>
.item-properties {
  width: 370px;
  text-align: left;
  margin: 0 auto;
}
</style>
