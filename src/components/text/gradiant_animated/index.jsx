import { useMemo } from "react";
import styles from "./style.module.css";

export const GradiantAnimatedText1 = ({ text, className, type = "p" }) => {
  const NodeType = useMemo(() => {
    if (type === "p") {
      return "p";
    } else return "h1";
  }, [type]);
  return <NodeType className={`${styles.text} ${className}`}>{text}</NodeType>;
};

export const GradiantAnimatedText = ({ text, className, type = "p" }) => {
  const NodeType = useMemo(() => {
    if (type === "p") {
      return "p";
    } else return "h1";
  }, [type]);
  return <NodeType className={`${styles.textWrapper} ${className}`}>{text}</NodeType>;
};
