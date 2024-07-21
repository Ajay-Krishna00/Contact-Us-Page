import  { useState } from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Alert, Button, CardMedia, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import "@fontsource/roboto"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "2.8rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "rgb(167, 34, 109)",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0px 5px 2px white;
  color: white;
  fontWeight: 600;
  margin: 10px;
  height: 42px;
  padding: 0 20px;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

function App() {
  
  const [name, setName] = useState("");
  const handleChangeName = (event) => { 
    setName(event.target.value);
  }
  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => { 
    setEmail(event.target.value);
  }
  const [message, setMessage] = useState("");
  const handleChangeMessage = (event) => { 
    setMessage(event.target.value);
  }
const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Form Submitted Successfully!");
    console.log(` Name:${name} \n Email:${email} \n Message:${message}`);
    setAlertVisible(true);
    setName(""); // Clear the input field
    setEmail(""); // Clear the input field
    setMessage(""); // Clear the input field
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          position: "fixed",
          zIndex: "1",
        }}
      >
        {alertVisible && (
          <Alert
            severity="success"
            onClose={() => setAlertVisible(false)}
            sx={{ mt: 2 }}
          >
            Form Submitted Successfully!
          </Alert>
        )}
      </Container>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(45deg, rgba(244,98,110,1) 0%, rgba(214,60,217,1) 53%, rgba(160,0,255,1) 100%)",
        }}
      >
        <ThemeProvider theme={theme}>
          <Card
            sx={{
              display: "flex",
              flexDirection: {sm:"row",xs:"column"},
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              width:{sm:"auto",xs:"84%"},
              borderRadius: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width:{lg: "450px",md:"350px",sm:"250px",xs:"100%"},
              }}
            >
              <CardMedia
                component={"img"}
                alt={"Contact Us"}
                image="src/contactUsImg.jpg"
                sx={{ height: {md:"350px",sm:"250px",xs:"150px"}, width: "auto" }}
              />

              <Container
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingBottom: "10px",
                  marginLeft: { sm:"40px",xs:"0px" },
                }}
              >
                <Typography variant="h5">Get in touch through</Typography>
              </Container>

              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width:{md:"auto",xs:"100%"},
                }}
              >
                <IconButton
                  component="a"
                  href="mailto:enthusiastajay00@gmail.com"
                  target="_blank"                       // Opens the link in a new tab.               
                  rel="noopener noreferrer"             // Prevents the new tab from accessing the window.opener property.Adds security attributes when opening a new tab.
                >
                  <EmailIcon color="secondary" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/ajay-krishna-d"
                  target="_blank"                       // Opens the link in a new tab.
                  rel="noopener noreferrer"             // Prevents the new tab from accessing the window.opener property.Adds security attributes when opening a new tab.
                >
                  <LinkedInIcon color="secondary" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/Ajay-Krishna00"
                  target="_blank"                       // Opens the link in a new tab.
                  rel="noopener noreferrer"             // Prevents the new tab from accessing the window.opener property.Adds security attributes when opening a new tab.
                >
                  <GitHubIcon color="secondary" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/ajay_k.d_?igsh=czY3NHVodWd4ZHEx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon color="secondary" />
                </IconButton>
              </Container>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "350px",
                p: "20px",
                gap: "20px",
              }}
            >
              <Typography variant="h1">Contact Me</Typography>
              <TextField
                variant="outlined"
                label="Name"
                type="text"
                value={name}
                onChange={handleChangeName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                label="Email"
                type="Email"
                value={email}
                onChange={handleChangeEmail}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                multiline
                variant="outlined"
                label="Message"
                type="text"
                value={message}
                onChange={handleChangeMessage}
                rows={4}
              />
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StyledButton onClick={handleSubmit}>SUBMIT</StyledButton>
              </Container>
            </Container>
          </Card>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default App
