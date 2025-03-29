import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Company.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CareersImage from "../../img/About/illustration-hand.svg"
import CareersY from "../../img/About/Y-image.png"

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import SophiaHuard from "../../img/About/sophia-image.webp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import CareersIcon1 from "../../img/About/icon-family.svg"
import Quote from "../../img/About/quote.svg";
import Katie from "../../img/About/katie-haun.webp";
import CompenyIcon from "../../img/About/feeffe.svg"

//Owl Carousel Settings
const options = {
  margin: 50,
  items: 5,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
  loop: true,
  smartSpeed: 100,
  autoHeightClass: "owl-height",
  slideBy: 3,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text?.slice(0, 110) :text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <>
            ...See more <KeyboardArrowDownIcon />
          </>
        ) : (
          <>
            show less <KeyboardArrowUpIcon />
          </>
        )}
      </span>
    </p>
  );
}; 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, .05)"
  //     : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(3),
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingTop:20,
  paddingRight: 40,
  paddingLeft: 40,
  paddingBottom:20,
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Careers = () => {

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
   
    return (
      <div>
        <Header />
        <div className="careers">
          <Container>
            <Box Container>
              <section className="section-careers-one">
                <Grid container className="careers-mobile-responsive">
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="careers-main-section-one">
                      <Typography variant="h1" component="h1">
                        Let’s build the future of digital economies together
                      </Typography>
                      <Typography variant="p" component="p">
                        Not only are we passionate about our work, we enjoy the
                        people we surround ourselves with. At OpenSea, we build
                        trust, embrace feedback, grow rapidly, and love our
                        work.
                      </Typography>
                      <Button variant="contained">
                        View our open positions
                      </Button>
                    </div>
                    <div className="careers-main-section-one-text-box">
                      <div className="careers-main-section-one-card">
                        <img src={CareersY} alt="collection3" />
                        <Typography variant="p" component="p">
                          #3 Top Company
                        </Typography>
                      </div>
                      <div className="careers-main-section-one-card">
                        <img src={CareersY} alt="collection3" />
                        <Typography variant="p" component="p">
                          America’s Best Startup Employers
                        </Typography>
                      </div>
                      <div className="careers-main-section-one-card">
                        <img src={CareersY} alt="collection3" />
                        <Typography variant="p" component="p">
                          Best Place to Work 2023
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="careers-main-section-one-image">
                      <img src={CareersImage} alt="collection3" />
                    </div>
                  </Grid>
                </Grid>
              </section>

              <section className="section-careers-two">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="careers-main-section-two">
                      <div className="explore-cllection-slide">
                        <OwlCarousel
                          className="owl-theme owl-carousel"
                          {...options}
                        >
                          <div className="item">
                            <div className="careers-cover-main-card">
                              <div className="careers-cover-main-card-text">
                                <ReadMore>
                                  I'm constantly amazed by the trust and mutual
                                  respect that exist at OpenSea. I’m so grateful
                                  to have incredible colleagues who want me to
                                  succeed and are willing to go the extra mile
                                  to help the people around them grow. We strive
                                  for excellence, and we help each other reach
                                  it.
                                </ReadMore>
                              </div>

                              <div className="careers-cover-photo">
                                <img src={SophiaHuard} alt="collection1" />
                              </div>
                              <div className="careers-cover-main-card-text-one">
                                <Typography variant="h6" component="h6">
                                  Sophia Huard
                                </Typography>
                              </div>
                              <div className="careers-cover-main-card-text-two">
                                <Typography variant="p" component="p">
                                  Product Operations Lead
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="item">
                            <div className="careers-cover-main-card">
                              <div className="careers-cover-main-card-text">
                                <ReadMore>
                                  GeeksforGeeks: A Computer Science portal for
                                  geeks. It contains well written, well thought
                                  and well explained computer science,
                                  programming articles and quizzes. It provides
                                  a variety of services for you to learn, so
                                  thrive and also have fun! Free Tutorials,
                                  Millions of Articles, Live, Online and
                                  Classroom Courses ,Frequent Coding
                                  Competitions, Webinars by Industry Experts,
                                  Internship opportunities, and Job
                                  Opportunities. Knowledge is power!
                                </ReadMore>
                              </div>

                              <div className="careers-cover-photo">
                                <img src={SophiaHuard} alt="collection1" />
                              </div>
                              <div className="careers-cover-main-card-text-one">
                                <Typography variant="h6" component="h6">
                                  Sophia Huard
                                </Typography>
                              </div>
                              <div className="careers-cover-main-card-text-two">
                                <Typography variant="p" component="p">
                                  Product Operations Lead
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="item">
                            <div className="careers-cover-main-card">
                              <div className="careers-cover-main-card-text">
                                <ReadMore>
                                  I'm constantly amazed by the trust and mutual
                                  respect that exist at OpenSea. I’m so grateful
                                  to have incredible colleagues who want me to
                                  succeed and are willing to go the extra mile
                                  to help the people around them grow. We strive
                                  for excellence, and we help each other reach
                                  it.
                                </ReadMore>
                              </div>

                              <div className="careers-cover-photo">
                                <img src={SophiaHuard} alt="collection1" />
                              </div>
                              <div className="careers-cover-main-card-text-one">
                                <Typography variant="h6" component="h6">
                                  Sophia Huard
                                </Typography>
                              </div>
                              <div className="careers-cover-main-card-text-two">
                                <Typography variant="p" component="p">
                                  Product Operations Lead
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="item">
                            <div className="careers-cover-main-card">
                              <div className="careers-cover-main-card-text">
                                <ReadMore>
                                  I'm constantly amazed by the trust and mutual
                                  respect that exist at OpenSea. I’m so grateful
                                  to have incredible colleagues who want me to
                                  succeed and are willing to go the extra mile
                                  to help the people around them grow. We strive
                                  for excellence, and we help each other reach
                                  it.
                                </ReadMore>
                              </div>

                              <div className="careers-cover-photo">
                                <img src={SophiaHuard} alt="collection1" />
                              </div>
                              <div className="careers-cover-main-card-text-one">
                                <Typography variant="h6" component="h6">
                                  Sophia Huard
                                </Typography>
                              </div>
                              <div className="careers-cover-main-card-text-two">
                                <Typography variant="p" component="p">
                                  Product Operations Lead
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="item">
                            <div className="careers-cover-main-card">
                              <div className="careers-cover-main-card-text">
                                <ReadMore>
                                  I'm constantly amazed by the trust and mutual
                                  respect that exist at OpenSea. I’m so grateful
                                  to have incredible colleagues who want me to
                                  succeed and are willing to go the extra mile
                                  to help the people around them grow. We strive
                                  for excellence, and we help each other reach
                                  it.
                                </ReadMore>
                              </div>

                              <div className="careers-cover-photo">
                                <img src={SophiaHuard} alt="collection1" />
                              </div>
                              <div className="careers-cover-main-card-text-one">
                                <Typography variant="h6" component="h6">
                                  Sophia Huard
                                </Typography>
                              </div>
                              <div className="careers-cover-main-card-text-two">
                                <Typography variant="p" component="p">
                                  Product Operations Lead
                                </Typography>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="careers-cover-main-card">
                              <div className="careers-cover-main-card-text">
                                <ReadMore>
                                  I'm constantly amazed by the trust and mutual
                                  respect that exist at OpenSea. I’m so grateful
                                  to have incredible colleagues who want me to
                                  succeed and are willing to go the extra mile
                                  to help the people around them grow. We strive
                                  for excellence, and we help each other reach
                                  it.
                                </ReadMore>
                              </div>

                              <div className="careers-cover-photo">
                                <img src={SophiaHuard} alt="collection1" />
                              </div>
                              <div className="careers-cover-main-card-text-one">
                                <Typography variant="h6" component="h6">
                                  Sophia Huard
                                </Typography>
                              </div>
                              <div className="careers-cover-main-card-text-two">
                                <Typography variant="p" component="p">
                                  Product Operations Lead
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </section>

              <section className="section-careers-three">
                <Grid container className="section-careers-three-desktop">
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="careers-main-section-three-heading">
                      <Typography variant="h3" component="h3">
                        Our Values
                      </Typography>
                      <Typography variant="p" component="p">
                        Our values are at the core of our efforts to build the
                        best platform for our users
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={8} lg={7} xl={7}>
                    <div className="careers-main-section-three">
                      <div>
                        <Accordion onChange={handleChange("panel1")}>
                          <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                          >
                            <div className="careers-icon">
                              <Typography>Trust comes first</Typography>{" "}
                              <MuiAccordionSummary
                                expandIcon={
                                  <ArrowForwardIosSharpIcon
                                    sx={{ fontSize: "0.9rem" }}
                                  />
                                }
                              />
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Trust is a fundamental pillar of how we show up
                              for the broader web3 community and for our teams.
                              The trust of our user experience comes first, and
                              we don’t sacrifice the stability, reliability and
                              trustworthiness of our platform, even if it means
                              delaying the launch of a feature. Internally, we
                              don’t sacrifice the trust of our teammates. We
                              lean into communicating honestly and
                              transparently, while practicing deep empathy. We
                              share context with each other, and pull for it
                              too. Trust is what makes us a great team.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion onChange={handleChange("panel2")}>
                          <AccordionSummary
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                          >
                            <div className="careers-icon">
                              <Typography>Dive deep</Typography>{" "}
                              <MuiAccordionSummary
                                expandIcon={
                                  <ArrowForwardIosSharpIcon
                                    sx={{ fontSize: "0.9rem" }}
                                  />
                                }
                              />
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              We are intellectually humble in the face of
                              uncertainty, and approach big questions with deep
                              curiosity. We dive deep to understand a problem
                              and get to the root cause of things,
                              unapologetically asking, “why?” to unpack deeper
                              layers of context. We actively pressure test ideas
                              and seek disconfirming evidence from others before
                              making decisions. When we make bets, we’re the
                              first to call out our shortcomings and
                              course-correct by looking at the data.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion onChange={handleChange("panel3")}>
                          <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                          >
                            <div className="careers-icon">
                              <Typography>
                                Build an ocean, not an aquarium
                              </Typography>{" "}
                              <MuiAccordionSummary
                                expandIcon={
                                  <ArrowForwardIosSharpIcon
                                    sx={{ fontSize: "0.9rem" }}
                                  />
                                }
                              />
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Web3 is a new technological paradigm. It’s
                              fundamental that we collaborate with the web3
                              ecosystem and build for the long-term because we
                              have a responsibility to build with and for the
                              entire NFT space. We do not make unilateral
                              decisions that impact the diversity or direction
                              of the ecosystem without stress-testing our
                              assumptions with the broader community. We’re not
                              here to build our own aquarium, but rather to
                              create an ocean together with the vibrant web3
                              community.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion onChange={handleChange("panel4")}>
                          <AccordionSummary
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                          >
                            <div className="careers-icon">
                              <Typography>Take the helm</Typography>{" "}
                              <MuiAccordionSummary
                                expandIcon={
                                  <ArrowForwardIosSharpIcon
                                    sx={{ fontSize: "0.9rem" }}
                                  />
                                }
                              />
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Everyone at OpenSea is an owner, which includes
                              owning the outcome. We act on behalf of the entire
                              company and beyond just our own teams. We step up
                              and lean into the work beyond our scope, choosing
                              not to say, “that’s not my job.” We are
                              responsible and hold ourselves and others
                              accountable. We also consult with the right people
                              to optimize our decisions, bringing our crewmates
                              along with us. We overcome mountains together to
                              get things done.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion onChange={handleChange("panel5")}>
                          <AccordionSummary
                            aria-controls="panel5d-content"
                            id="panel5d-header"
                          >
                            <div className="careers-icon">
                              <Typography>Iron sharpens iron</Typography>{" "}
                              <MuiAccordionSummary
                                expandIcon={
                                  <ArrowForwardIosSharpIcon
                                    sx={{ fontSize: "0.9rem" }}
                                  />
                                }
                              />
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              We are building a championship team. We demand
                              greatness from each other, and we continually
                              raise the bar. We give high-quality constructive
                              feedback to help each other grow. When we make a
                              mistake, we own it, fix it, and learn from it. We
                              embrace diverse perspectives, identities, and
                              experiences so that we can deliver impactful
                              outcomes. To do all of the above, we strive to
                              create an environment of trust and mutual respect.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion onChange={handleChange("panel6")}>
                          <AccordionSummary
                            aria-controls="panel6d-content"
                            id="panel6d-header"
                          >
                            <div className="careers-icon">
                              <Typography>
                                High quality, high velocity
                              </Typography>{" "}
                              <MuiAccordionSummary
                                expandIcon={
                                  <ArrowForwardIosSharpIcon
                                    sx={{ fontSize: "0.9rem" }}
                                  />
                                }
                              />
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              This is an aspirational value about striking the
                              right balance between quality and speed, which may
                              often feel like two contradicting choices. High
                              Quality, High Velocity doesn’t mean pixel-perfect
                              quality at super speed. That’s a recipe for
                              burnout. Rather, it’s assessing when we want to go
                              slow to speed up, ship fast while avoiding
                              icebergs or meet somewhere in the middle. This can
                              feel like a complex value because it’s easier to
                              choose just quality or just speed. Figuring out
                              how to balance both is the hardest part, but it’s
                              also where we deliver the best solutions.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </section>

              <section className="section-careers-four">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="careers-main-section-four-heading">
                      <Typography variant="h3" component="h3">
                        Our Values
                      </Typography>
                      <Typography variant="p" component="p">
                        Our values are at the core of our efforts to build the
                        best platform for our users
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="careers-main-section-four-main-box">
                      <div className="careers-main-section-four-main-card">
                        <img src={CareersIcon1} alt="collection3" />
                        <Typography variant="h6" component="h6">
                          Paid family leave
                        </Typography>
                        <Typography variant="p" component="p">
                          Whether you’re bonding with a new child or taking care
                          of a family member, we understand you need this time
                          off.
                        </Typography>
                      </div>

                      <div className="careers-main-section-four-main-card">
                        <img src={CareersIcon1} alt="collection3" />
                        <Typography variant="h6" component="h6">
                          Health insurance
                        </Typography>
                        <Typography variant="p" component="p">
                          Your wellness is important. We've got you covered.
                          Take care of yourself to come to work happy and
                          healthy.
                        </Typography>
                      </div>

                      <div className="careers-main-section-four-main-card">
                        <img src={CareersIcon1} alt="collection3" />
                        <Typography variant="h6" component="h6">
                          Flexible vacation policy
                        </Typography>
                        <Typography variant="p" component="p">
                          Sometimes we all need a break. Take one, take many.
                          Just come back recharged and inspired.
                        </Typography>
                      </div>

                      <div className="careers-main-section-four-main-card">
                        <img src={CareersIcon1} alt="collection3" />
                        <Typography variant="h6" component="h6">
                          Flexible hours
                        </Typography>
                        <Typography variant="p" component="p">
                          We know you have personal priorities to take care of.
                          Take care of them and work on your own hours; we’re
                          flexible.
                        </Typography>
                      </div>

                      <div className="careers-main-section-four-main-card">
                        <img src={CareersIcon1} alt="collection3" />
                        <Typography variant="h6" component="h6">
                          Workshops & conferences
                        </Typography>
                        <Typography variant="p" component="p">
                          Attend relevant workshops and conferences to grow and
                          develop. It’s our priority.
                        </Typography>
                      </div>

                      <div className="careers-main-section-four-main-card">
                        <img src={CareersIcon1} alt="collection3" />
                        <Typography variant="h6" component="h6">
                          Travel & company retreats
                        </Typography>
                        <Typography variant="p" component="p">
                          As a distributed team, we take the time to meet up for
                          company retreats.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </section>
            </Box>
          </Container>
          <section className="line">
            <div className="line-bottom"></div>
          </section>

          <section className="section-heading">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="About-main-section-heading careers-main-section-heading">
                  <Typography variant="h3" component="h3">
                    Interested in joining us?
                  </Typography>
                  <Typography variant="p" component="p">
                    Hop aboard and view our open positions
                  </Typography>
                  <Button variant="contained">See open roles</Button>
                </div>
              </Grid>
            </Grid>
          </section>

          <section className="line">
            <div className="line-bottom"></div>
          </section>
          <Container>
            <Box container>
              <section className="section-careers-five">
                <Grid container className="section-careers-five-mobile-responsive">
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="careers-main-section-five-main-box1">
                      <img src={Quote} alt="Quote" />
                      <Typography variant="h5" component="h5">
                        OpenSea is one of the most exciting, important companies
                        in the world right now because it's the portal to the
                        new digital economy. If you're interested in shaping a
                        new business model for creators, this is the team to
                        join.
                      </Typography>
                      <Typography variant="h6" component="h6">
                        Katie Haun
                      </Typography>
                      <Typography variant="p" component="p">
                        CEO and Founder, Haun Ventures
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="careers-main-section-five-main-box2">
                      <img src={Katie} alt="Quote" />
                    </div>
                  </Grid>
                </Grid>
              </section>
            </Box>
          </Container>
          <section className="section-careers-six">
            <Container>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="careers-main-section-six-main-box1">
                    <img src={CompenyIcon} alt="Quote" />
                    <img src={CompenyIcon} alt="Quote" />
                    <img src={CompenyIcon} alt="Quote" />
                    <img src={CompenyIcon} alt="Quote" />{" "}
                    <img src={CompenyIcon} alt="Quote" />
                    <img src={CompenyIcon} alt="Quote" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </section>
        </div>
        <Footer />
      </div>
    );
};

export default Careers;
