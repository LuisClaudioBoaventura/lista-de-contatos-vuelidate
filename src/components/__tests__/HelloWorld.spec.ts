import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MsgBemVindo from "../MsgBemVindo.vue";

describe("MsgBemVindo", () => {
  it("renders properly", () => {
    const wrapper = mount(MsgBemVindo, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
