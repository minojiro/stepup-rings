import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ItemFieldList from "./index.vue";

describe("ItemFieldList", () => {
  it("mount", () => {
    const wrapper = mount(ItemFieldList, {
      props: {
        listTitle: "listTitle",
        items: [],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
