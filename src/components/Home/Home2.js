import React, { useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
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
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import './home2.css'

import tippy from 'tippy.js';

function Home2() {
  const [originalText, setOriginalText] = useState('')
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedText, setHighlightedText] = useState('')

  const handleChange = (event) => {
    setOriginalText(event.target.value)
  }

  const onClick = async (text) => {
    setSubmitted(true);
    setIsLoading(true);
    var radioButtons = document.getElementsByName("audience");

    // Initialize a variable to store the selected value
    var selectedValue;
    
    // Loop through the radio buttons to find the selected one
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;
            break;
        }
    }

    const rules = await parseText(text, selectedValue)

  

    function highlightSnippets(text, rules) {
      rules.forEach(rule => {
          let snipIndex = text.replace('  ', ' ').lastIndexOf(rule.snippet.replace('  ', ' '));

          var snippetId = "snippet" + rule.id;

          if(snipIndex !== -1) {
            text = text.substring(0, snipIndex) +
             `<Grid container justifyContent="center">
             <Tooltip title_disabled="${rule.response}">
             <span class="${rule.grade} strike" contenteditable spellcheck='false' id=${snippetId}>` + 
             text.substring(snipIndex, snipIndex + rule.snippet.length) +
             `</span></Tooltip></Grid>` +
            text.substring(snipIndex + 1 + rule.snippet.length)
          }

          setTimeout(function(){
            tippy('#' + snippetId, {
              content: rule.response,
            })
          }, 100);
      });
  
      return text;
  }
  

    let highlightedText = highlightSnippets(originalText, rules);
    const mock = `<Grid container justifyContent="center">
    <Tooltip title="Consider using other methods" placement="bottom" style={{ backgroundColor: '#fff'}}>
    <span class=bad>what about the jews</span><Tooltip></Grid>`;
    setHighlightedText(highlightedText)
    setIsLoading(false)
} 

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Tooltip title={"sadsadsadsa dksa dlksalksajd lkjsa djsalk jdlksa jdlkjsa lkdjsa lkdjsalk jdlksa dlkjsalkds"}>
      </Tooltip>
          <Col md={12} className="home-about-description" style={{
    alignItems: 'center'}}>
            <h1 style={{ fontSize: '2.6em' }} data-aos="fade-right">
              <span className="primary-header"> WRITE YOUR </span> POST
            </h1>
            <div style={{align: 'left'}}>

  </div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              height={"60vh"}
             
            >
              <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
              <p className='audienceInput'><input type="radio" id="american_liberals" name="audience" value="american_liberals" />
            <label for="liberals">🗽 American Liberals </label></p>

            <p className='audienceInput'><input type="radio" id="american_conservatives" name="audience" value="american_conservatives" />
            <label for="right_wing">🦅 American Conservatives </label></p>

            <p className='audienceInput'><input type="radio" id="muslims" name="audience" value="muslims" />
            <label for="muslims">🕌 Muslims </label></p>

            <p className='audienceInput'><input type="radio" id="hitech" name="audience" value="hitech" />
            <label for="hitech">💻 Hi-tech</label></p>

            <p className='audienceInput'><input type="radio" id="muslim_women" name="audience" value="muslim_women" />
            <label for="muslim_women">🧕 Muslim Women</label></p>
              </div>
              <div id="container2">
              {
                 isLoading ? <CircularLoader load={isLoading} /> :
                 !submitted ? <div>
                 <TextField
                   id="outlined-multiline-static"
                   label="New Post"
                   multiline
                   rows={10}
                   maxRows={50}
                   style={{ width: '70vw'}}
                   InputProps={{
                    style: {
                      fontSize: 23,
                      fontFamily: 'sans-serif'
                    },
                  }}
                   onChange={handleChange}
                 />
               </div> : <Typography variant='h5' id="highLightedText" style={{height: '395px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} dangerouslySetInnerHTML={{ __html: highlightedText }} >
                </Typography>
              }
              </div>
              <Button
                variant="contained"
                color="primary"
                style={{marginTop: "20px"}}
                onClick={() => !submitted ? onClick(originalText) : setSubmitted(false)}
              >
                {!submitted ? "Enhance Post" : "Write A New Post" }
              </Button>
            </Box>
          </Col>
         
        </Row>
        <Row>
        </Row>
        <Row style={{marginTop: '30px'}}>
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
