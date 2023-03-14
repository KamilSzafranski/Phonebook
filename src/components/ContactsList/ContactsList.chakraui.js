export const spinnerStyle = {
  color: "#2C7A7B",
  w: "250px",
  h: "250px",
  emptyColor: "gray.200",
};

export const listStyle = {
  overflowY: "scroll",
  maxH: "60vh",
  pr: "10px",

  " ::-webkit-scrollbar": {
    width: "5px",
    position: "absolute",
  },

  "::-webkit-scrollbar-track": {
    backgroundColor: " #ffffff",
  },

  "::-webkit-scrollbar-thumb": {
    background: "#20caa8",
    borderRadius: "3px",
  },

  "::-webkit-scrollbar-thumb:hover": {
    background: "#2C7A7B",
  },
};
