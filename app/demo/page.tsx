import stylex from "@stylexjs/stylex";
import React from "react";

const DemoPage = () => {
  return <div {...stylex.props(styles.wrapper)}>DemoPage</div>;
};

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "calc(100vh - 60px)",
    padding: "10px",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
  },
  desc: {
    fontSize: 20,
    color: "#666",
  },
  link: {
    fontSize: 16,
    color: "#1b95e0",
    textDecoration: "none",
  },
});

export default DemoPage;
