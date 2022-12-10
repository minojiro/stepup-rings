import { describe, it, expect } from "vitest";
import { useRingCalc } from "./";

describe("useRingCalc", () => {
  describe("rings value", () => {
    const getRingSetByDiameterValues = (
      lensDiameterValues: number[],
      filterDiameterValues: number[]
    ) => {
      const { lenses, filters, ringsToBuyMore } = useRingCalc();

      lenses.value = lensDiameterValues.map((diameter) => ({
        name: "",
        diameter,
      }));

      filters.value = filterDiameterValues.map((diameter) => ({
        name: "",
        diameter,
      }));

      return new Set(
        ringsToBuyMore.value.map(
          (ring) => `${ring.diameterFrom}:${ring.diameterTo}`
        )
      );
    };

    it("pattern1", () => {
      const ringSet = getRingSetByDiameterValues([1], [2]);
      expect(ringSet.size).toBe(1);
      expect(ringSet).toContain("1:2");
    });

    it("pattern2", () => {
      const ringSet = getRingSetByDiameterValues([2], [1]);
      expect(ringSet.size).toBe(0);
    });

    it("pattern3", () => {
      const ringSet = getRingSetByDiameterValues([1, 2], [3]);
      expect(ringSet.size).toBe(2);
      expect(ringSet).toContain("1:3");
      expect(ringSet).toContain("2:3");
    });

    it.todo("pattern3: ([1, 2], [3, 4])");

    it.todo("pattern4: ([1, 2], [3, 4, 5])");
  });
});
