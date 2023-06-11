import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Footer, Text, Button, ResponsiveContext } from "grommet";
import "./footer.css";

import logo from "../images/icon/focus-2-line.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FooterComponent() {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: "Terms" },
    { label: "Privacy" },
    { label: "Security" },
    { label: "Feedback" },
  ];

  return (
    <div className="boox">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid className="blue-bg pad" item xs={12} sm={4}>
            <Item className="blue-bg">
              <div className="link-column  tine className='blue-bg'">
                <h2>The main</h2>
                <ul className="menu  cont vertical">
                  <li className="blue-bg">
                    <a className="blue-bg" href="#">
                      About us
                    </a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">For Partners</a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">News</a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">For Investors</a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">Live Transactions</a>
                  </li>
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid className="blue-bg pad" item xs={12} sm={4}>
            <Item className="blue-bg">
              <div className="link-column  tine className='blue-bg'">
                <h2>Information</h2>
                <ul className="menu  cont vertical">
                  <li className="blue-bg">
                    <a className="blue-bg" href="#">
                      Video reviews
                    </a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">FAQ</a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">Rules</a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">Market Charts</a>
                  </li>
                  <li className="blue-bg">
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </Item>
          </Grid>
          <Grid className="blue-bg pad" item xs={12} sm={4}>
            <Item className="blue-bg">
              <div className="link-column  tine className='blue-bg'">
                <h2> Contacts</h2>
                <ul className="menu  cont vertical">
                  <li className="blue-bg">
                    <a className="blue-bg" href="#"></a>
                  </li>
                  <li className="blue-bg">
                    <a href="#"></a>
                  </li>
                  <li className="blue-bg">
                    <a href="#"></a>
                  </li>
                  <li className="blue-bg">
                    <a href="#"></a>
                  </li>
                  <li className="blue-bg">
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </Item>
          </Grid>
        </Grid>

        <Footer
          className="foot"
          background="background-front"
          direction={["xsmall", "small"].includes(size) ? "column" : "row"}
          align={!["xsmall", "small"].includes(size) ? "center" : undefined}
          pad={{ horizontal: "medium", vertical: "small" }}
          fill="horizontal"
        >
          <Box
            direction={["xsmall", "small"].includes(size) ? "column" : "row"}
            align={!["xsmall", "small"].includes(size) ? "center" : undefined}
            gap="xsmall"
            wrap="true"
          >
            <Text size="small">
              &copy; {year} Iniodu Udosoh for Emmapounds UK
            </Text>
          </Box>
          <Box
            direction={["xsmall", "small"].includes(size) ? "column" : "row"}
            align={!["xsmall", "small"].includes(size) ? "center" : undefined}
            gap="xsmall"
            wrap="true"
          >
            {footerLinks.map((link) => (
              <Button className="lastbutton" key={link.label} label={link.label} />
            ))}
          </Box>
        </Footer>
      </Box>
    </div>
  );
}
