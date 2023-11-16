import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/Avatar.png'
import Tilt from 'react-parallax-tilt'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Button from '@mui/material/Button'
import { parseData } from '../../BL/parseData'

function Home2() {
  const [inputValue, setInputValue] = useState('')
  const [submitted, setSubmitted] = useState(false);

  const [outputValue, setOutputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const onClick = (text) => {
    setSubmitted(true);
    parseData(text)
  }



  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }} data-aos="fade-right">
              <span className="primary-header"> WRITE YOUR </span> POST
            </h1>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="New Post"
                  multiline
                  rows={15}
                  maxRows={50}
                  style={{ width: '70vw' }}
                  onChange={handleChange}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onClick(inputValue)}
              >
                Adjust Post
              </Button>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              SHARE ON<span className="primary-header"> SOCIAL MEDIA </span>
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rahuljha4171@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Rahuljha4171/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dead.programmer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
