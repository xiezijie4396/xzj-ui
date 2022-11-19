export const TYPE_COLOR = {
  default: {
    normal: "black",
    plain: "black",
  },
  primary: {
    normal: "white",
    plain: "blue",
  },
  success: {
    normal: "white",
    plain: "green",
  },
  info: {
    normal: "white",
    plain: "gray",
  },
  warning: {
    normal: "white",
    plain: "yellow",
  },
  danger: {
    normal: "white",
    plain: "red",
  },
  text: "blue",
};

// 获取类型
export const getType = (type: string) => {
  type = type.toLowerCase();
  return type in TYPE_COLOR ? type : "default";
};

// 计算样式
export const calStyle = (type: string, props) => {
  let styleArr: string[] = [];
  if (type === "text") {
    if (props.disabled) {
      styleArr.push("text-gray-400");
    } else {
      styleArr.push("text-blue-400", "hover:text-blue-300");
    }
  } else {
    if (type === "default") {
      if (!props.plain) {
        styleArr.push(
          "border-gray-300",
          "hover:bg-blue-400",
          "hover:bg-opacity-20"
        );
      }
      styleArr.push(
        "border-gray-300",
        "text-blue",
        "hover:text-blue-400",
        "hover:border-blue-400"
      );
    } else {
      const { normal: nColor, plain: pColor } = TYPE_COLOR[type];
      if (!props.plain) {
        styleArr.push(
          `text-${nColor}`,
          `border-${pColor}-400`,
          `bg-${pColor}-400`,
          `hover:bg-opacity-80`
        );
      } else {
        styleArr.push(
          `text-${pColor}-400`,
          `border-${pColor}-400`,
          `bg-${pColor}-400`,
          `bg-opacity-20`,
          `hover:bg-opacity-100`,
          `hover:text-${nColor}`
        );
      }
    }
    styleArr = handleBorder(styleArr);
    styleArr = handleRounded(styleArr, props);
  }
  styleArr = handleDisabled(styleArr, props);
  styleArr = handleSize(styleArr, props);
  styleArr = handleLoading(styleArr, props);
  return styleArr;
};

// 处理按钮大小
const handleSize = (styleArr, props) => {
  if (props.size === "large") {
    styleArr.push("p-3", "text-lg");
  } else if (props.size === "mini") {
    styleArr.push("p-1", "text-sm");
  } else {
    styleArr.push("p-2", "text-base");
  }
  return styleArr;
};

// 处理边框
const handleBorder = (styleArr) => {
  styleArr.push("border", "border-solid");
  return styleArr;
};

// 处理圆角
const handleRounded = (styleArr, props) => {
  if (props.circle) {
    styleArr.push("rounded-full", "w-10", "h-10");
    return styleArr;
  }
  if (!props.round) {
    styleArr.push("rounded");
  } else {
    styleArr.push("rounded-2xl");
  }
  return styleArr;
};

// 处理禁用
const handleDisabled = (styleArr, props) => {
  if (props.disabled) {
    styleArr.push("opacity-80", "cursor-not-allowed");
    return styleArr.filter((item) => !item.startsWith("hover"));
  }
  styleArr.push("cursor-pointer");
  return styleArr;
};

// 处理loading
const handleLoading = (styleArr, props) => {
  if (props.loading) {
    styleArr = styleArr.filter((item) => !item.startsWith("cursor"));
    styleArr = styleArr.filter((item) => !item.startsWith("hover"));
    styleArr.push("opacity-80");
  }
  return styleArr;
};

// 处理图标
export const handleIcon = (type: string, props, slots) => {
  const key = props.plain ? "plain" : "normal";
  return {
    size: 16,
    color: TYPE_COLOR[type][key],
    component: props.loading ? "loading" : props.icon,
    className: slots.default ? "mr-1" : "",
  };
};
