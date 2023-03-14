import { useSelector } from "react-redux";
import { selectFilters } from "redux/selector";

export const menuBoxStyle = {
  as: "section",
  p: "10px 12%",
  bg: "gray.700",
  color: "white",
  mb: "50px",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "2xl",
  fontWeight: "700",
};

export const logoStyle = {
  transition: "color 300ms ease",
  ":hover ": {
    color: "teal.400",
  },
};

export const iconStyle = {
  transition: "color 300ms ease",
  ":hover": {
    color: "teal.400",
  },
};

export const loggedOutIconStyle = {
  color: "gray.400",
  cursor: "not-allowed",
};

export const flexStyle = {
  p: "0",
  m: "0",
  as: "menu",
  gap: "35px",
  fontSize: "md",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const tooltipStyle = {
  label: "Contacts list is avaible to login users!",
  bg: "teal",
  mt: "10px",
};
