import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Resend } from "resend";

const resend = new Resend("re_3tPwgJpU_NNRUUPq9QwCHfxkCbEtD5Fbk");

const myEmail = "abd123abdo.com@gmail.com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    senderEmail: "",
    recipientEmail: myEmail,
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your email sending logic
    console.log(formData);
    resend.emails
      .send({
        from: formData.recipientEmail,
        to: formData.senderEmail,
        subject: formData.subject,
        html: formData.message,
      })
      .then((data, error) => {
        alert("Email sent successfully!");
        setFormData({
          senderEmail: "",
          recipientEmail: myEmail,
          subject: "",
          message: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper
          sx={{
            padding: 3,
            borderRadius: 1,
            backgroundColor: "#424242", // Dark background for contrast
          }}
          // elevation={3}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
            Send Email
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiInputBase-root": {
                  color: "#ffffff",
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              label="Your Email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiInputBase-root": {
                  color: "#ffffff",
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiInputBase-root": {
                  color: "#ffffff",
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffffff",
                  },
                },
              }}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Send Email
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default EmailForm;
