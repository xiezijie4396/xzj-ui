import Icon from "../index";

import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Icon: type", () => {
  test("default", () => {
    const wrapper = mount(Icon, {
      props: {
        type: "",
      },
    });
    expect(wrapper.find("svg").exists()).toBe(true);
  });
  test("AcademicCapIcon", () => {
    const wrapper = mount(Icon, {
      props: {
        type: "AcademicCapIcon",
      },
    });
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});

describe("Icon: color", () => {
  test("default", () => {
    const wrapper = mount(Icon, {
      props: {
        type: "AcademicCapIcon",
      },
    });
    expect(
      wrapper.find("svg").attributes("style").includes("color: #000")
    ).toBe(true);
  });
  test("red", () => {
    const wrapper = mount(Icon, {
      props: {
        type: "AcademicCapIcon",
        color: "red",
      },
    });
    expect(wrapper.find("svg").attributes("style").includes("color: red")).toBe(
      true
    );
  });
});

describe("Icon: size", () => {
  test("default", () => {
    const wrapper = mount(Icon, {
      props: {
        type: "AcademicCapIcon",
      },
    });
    expect(
      wrapper
        .find("svg")
        .attributes("style")
        .includes("width: 16px; height: 16px")
    ).toBe(true);
  });
  test("18", () => {
    const wrapper = mount(Icon, {
      props: {
        type: "AcademicCapIcon",
        size: 18,
      },
    });
    expect(
      wrapper
        .find("svg")
        .attributes("style")
        .includes("width: 18px; height: 18px")
    ).toBe(true);
  });
});
