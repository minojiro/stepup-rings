import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ItemField from "./index.vue";

describe("ItemField", () => {
  it("mount", () => {
    const wrapper = mount(ItemField, {
      props: { item: { name: "", diameter: 0 } },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
