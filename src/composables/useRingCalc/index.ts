import { Lens, Filter, Ring } from "../../types";
import { ref, computed } from "vue";

export const useRingCalc = () => {
  const lenses = ref<Lens[]>([]);

  const filters = ref<Filter[]>([]);

  const ringsToBuyMore = computed<Ring[]>(() => {
    const lensVals = lenses.value.map((o) => o.diameter);
    const filtersVals = filters.value.map((o) => o.diameter);
    const r: [number, number][] = [];
    lensVals.forEach((l) => {
      filtersVals.forEach((f) => {
        if (f > l) {
          r.push([l, f]);
        }
      });
    });
    return r.map(([diameterFrom, diameterTo]) => ({
      diameterFrom,
      diameterTo,
    }));
  });

  return {
    lenses,
    filters,
    ringsToBuyMore,
  };
};
