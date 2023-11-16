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
import { parseText } from  '../../OpenAI/openai'
import CircularLoader from '../loaders/CircularLoader'

function Home2() {
  const [originalText, setOriginalText] = useState('')
  const [submitted, setSubmitted] = useState(false);
  const [highLightedText, setHighlightedText] = useState(<></>)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    setOriginalText(event.target.value)
  }

  const onClick = async (text) => {
    setSubmitted(true);
    setIsLoading(true)
    const rules = await parseText(text)

    function highlightSnippets(text, rules) {
      let highlighted = ''
      rules.forEach(rule => {
          var regex = new RegExp(rule.snippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          highlighted = text.replace(regex, `<div class="${rule.grade}">${rule.snippet}</div>`);
      });
  
      return highlighted;
  }

    let highlightedText = highlightSnippets(originalText, rules);
    
    // Wrap the modified HTML in a container div
    var containerDiv = document.getElementById('highLightedText')
    containerDiv.innerHTML = highlightedText;

    setIsLoading(false)
} 

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description" style={{
    alignItems: 'center'}}>
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
              height={"60vh"}
            >
              {
                 isLoading ? <CircularLoader load={isLoading} /> :
                 !submitted ? <div>
                 <TextField
                   id="outlined-multiline-static"
                   label="New Post"
                   multiline
                   rows={15}
                   maxRows={50}
                   style={{ width: '70vw' }}
                   onChange={handleChange}
                 />
               </div> : <div id="highLightedText" style={{height: '395px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              
                </div>
              }
              <Button
                variant="contained"
                color="primary"
                onClick={() => !submitted ? onClick(originalText) : setSubmitted(false)}
              >
                {!submitted ? "Enhance Post" : "Write A New Post" }
              </Button>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              SHARE ON<span className="primary-header"> SOCIAL MEDIA </span>
            </h1>
            <p data-aos="fade-left">Get in touch with your audience</p>
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
