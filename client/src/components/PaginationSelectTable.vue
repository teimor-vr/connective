<template>
  <v-card class="pt-4">
    <v-text-field
      v-model="searchFilter"
      append-icon="mdi-magnify"
      :label="$t('userActions.search')"
      single-line
      hide-details
      class="search-bar px-10 mt-5 mb-8 mx-auto"
      @click:append="onSearch"
      @keyup.enter="onSearch"
    />
    <v-data-table
      multi-sort
      @update:options="paginate"
      :headers="tableHeaders"
      :items="items"
      :loading="loading"
      :loadingText="loadingText"
      :server-items-length="totalServerItems"
    >
      <template v-slot:item.plus="{ item }">
        <v-icon
          size="20"
          class="mr-2"
          @click="toggleRowSelect(item)"
          color="green darken-2"
        >
          {{ isSelected(item) ? "mdi-check" : "mdi-plus" }}
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from "vuex"
import isEqual from "lodash/isEqual"
export default {
  model: { prop: "selectedRows" },
  props: {
    headers: {
      // v-data-table headers. e.g., [ { text: 'Calories', value: 'calories' }, ... ]
      type: Array,
      required: true,
    },
    items: {
      // v-data-table items (i.e., table rows)
      type: Array,
      required: true,
    },
    selectedRows: {
      type: Array,
      required: true,
    },
    totalServerItems: {
      // received from server via count field
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loadingText: this.$t("general.loading"),
      searchFilter: "",
      options: {},
    }
  },

  computed: {
    tableHeaders() {
      return [{ text: "", value: "plus", sortable: false }, ...this.headers]
    },
  },

  methods: {
    ...mapActions("pagination", ["updatePagination"]),
    toggleRowSelect(item) {
      // add or remove from selected rows and emit correlating events
      if (!this.isSelected(item)) {
        this.$emit("input", [...this.selectedRows, item])
        this.$emit("select", item)
        return
      }
      this.$emit(
        "input",
        this.selectedRows.filter(row => !isEqual(row, item))
      )
      this.$emit("diselect", item)
    },
    paginate(options) {
      this.updatePagination(options)
      this.$emit("paginate")
    },
    onSearch() {
      this.options.page = 1
      this.updatePagination({ searchFilter: this.searchFilter })
      this.$emit("paginate")
    },
    isSelected(row) {
      // includes won't work due to re-fetch issues
      return this.selectedRows.filter(selected => isEqual(selected, row))
        .length
    },
  },
}
</script>
<style lang="scss" scoped>
.search-bar {
  max-width: 450px !important;
}
</style>
