"use client";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "styles/contact.css";
import { Box, CssBaseline, TextField } from "@mui/material";
import EmailForm from "@/components/EmailForm";

export default function contact() {
  const onPhone = () => {
    window.open("tel:+97470031251");
  };
  const onEmail = () => {
    window.open();
  };
  const onLink = () => {
    window.open(
      "https://www.linkedin.com/in/abdulrahman-maher-elkabany-514109205/"
    );
  };

  return (
    <div className="cont_container">
      <section className="contactContainer">
        <h1 className="contactMeText">Contact Me</h1>
        <div className="subcontactContainer">
          <section className="optionsContainer">
            <Stack direction="row" spacing={1}>
              <IconButton onClick={onEmail} aria-label="email">
                <EmailIcon sx={{ fontSize: "6vw", color: "#FFF" }} />
              </IconButton>
              <IconButton onClick={onPhone} aria-label="phone">
                <PhoneIcon sx={{ fontSize: "6vw", color: "#FFF" }} />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={onLink} aria-label="linedin">
                <LinkedInIcon
                  sx={{
                    fontSize: "6vw",
                    color: "#0e76a8",
                    // backgroundColor: "white",
                    fill: "white",
                  }}
                />
              </IconButton>
            </Stack>
          </section>
          <section className="formContainer">
            <CssBaseline />
            <EmailForm />
          </section>
        </div>
      </section>
    </div>
  );
}
