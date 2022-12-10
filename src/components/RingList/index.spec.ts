import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RingList from "./index.vue";

describe("RingList", () => {
  it("mount", () => {
    const wrapper = mount(RingList, {
      props: {
        rings: [],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
