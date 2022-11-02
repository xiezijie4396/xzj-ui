import Button from "../index";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Icon from "../../Icon";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });
});

describe("Button: size", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().join(",").includes("text-base")).toBe(true);
  });
  test("large", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        size: "large",
      },
    });
    expect(wrapper.classes().join(",").includes("text-lg")).toBe(true);
  });
});

describe("Button: type", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().join(",").includes("text-blue")).toBe(true);
  });
  test("primary", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        type: "primary",
      },
    });
    expect(wrapper.classes().join(",").includes("bg-blue-400")).toBe(true);
  });
});

describe("Button: plain", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().join(",").includes("border-gray-300")).toBe(true);
  });
  test("true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        plain: true,
      },
    });
    expect(wrapper.classes().join(",").includes("hover:text-blue-400")).toBe(
      true
    );
  });
});

describe("Button: round", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().join(",").includes("rounded")).toBe(true);
  });
  test("true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        round: true,
      },
    });
    expect(wrapper.classes().join(",").includes("rounded-2xl")).toBe(true);
  });
});

describe("Button: circle", () => {
  test("true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        circle: true,
      },
    });
    expect(wrapper.classes().join(",").includes("rounded-ful")).toBe(true);
  });
});

// loading
describe("Button: loading", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().some((item) => item.startsWith("cursor"))).toBe(
      true
    );
  });
  test("true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        loading: true,
      },
    });
    expect(wrapper.findComponent(Icon).attributes().type === "loading").toBe(
      true
    );
  });
});

describe("Button: disabled", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().join(",").includes("cursor-pointer")).toBe(true);
  });
  test("true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        disabled: true,
      },
    });
    expect(wrapper.classes().join(",").includes("cursor-not-allowed")).toBe(
      true
    );
  });
});

describe("Button: icon", () => {
  test("true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        icon: "AcademicCapIcon",
      },
    });
    expect(
      wrapper.findComponent(Icon).attributes().type === "AcademicCapIcon"
    ).toBe(true);
  });
});
