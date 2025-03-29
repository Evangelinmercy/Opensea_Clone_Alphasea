import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Link } from "react-router-dom";
import "./Learn.css";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import Transparent1 from "../../img/Learn/transparent-1.png";
import Image1 from "../../img/Learn/image-1.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import collection1 from "../../img/Learn/post-1.png";
import collection2 from "../../img/Learn/post-2.png";
import collection3 from "../../img/Learn/post-3.png";
import collection4 from "../../img/Learn/post-4.png";
import collection5 from "../../img/Learn/post-5.png";
import collection6 from "../../img/Learn/post-6.png";


import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import NftImage from "../../img/Learn/nft-post.png"

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


//Owl Carousel Settings
const options = {
  margin: 15,
  items: 3,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
  loop: true,
  smartSpeed: 5000,
  autoHeightClass: "owl-height",
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



const WhatAreNfts = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   const [openAdvanceSettings, setOpenAdvanceSettings] = useState(false);
   const handleOpenAdvanceSettings = () =>
     setOpenAdvanceSettings(!openAdvanceSettings);
  return (
    <div className="Learn-article-bg">
      <Container>
        <Box container>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="Your-cart-item-six mobile-response-what-are-nft">
                <div
                  className="Your-cart-item-six-box"
                  onClick={handleOpenAdvanceSettings}
                >
                  <Typography variant="h6" component="h6">
                    Send to a different wallet
                  </Typography>
                  <div
                    className={
                      openAdvanceSettings
                        ? "transitn-effect rotate-icon-transition"
                        : "transitn-effect"
                    }
                  >
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
                {openAdvanceSettings && (
                  <>
                    <div className="collection-btn Your-cart-item-six-btn">
                      <div className="Learn-main-box-one">
                        <div className="box-main">
                          <Typography variant="p" component="p">
                            <a href="#top-1">Fungible vs. non-fungible</a>
                          </Typography>
                          <Typography variant="p" component="p">
                            <a href="#top-2">How do NFTs work?</a>
                          </Typography>
                          <Typography variant="p" component="p">
                            <a href="#top-3">The impact of NFT technology</a>
                          </Typography>
                          <Typography variant="p" component="p">
                            <a href="#top-4">What are NFTs used for?</a>
                          </Typography>
                          <Typography variant="p" component="p">
                            <a href="#top-5">WFuture applications</a>
                          </Typography>
                          <Typography variant="p" component="p">
                            <a href="#top-6">How NFTs are bought and sold</a>
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="Learn-main-heading">
                <Typography variant="p" component="p">
                  <Link>Learn</Link>
                </Typography>
                <KeyboardArrowRightOutlinedIcon />
                <Typography variant="p" component="p">
                  <Link>NFT 101</Link>
                </Typography>
                <KeyboardArrowRightOutlinedIcon />
                <Typography variant="p" component="p">
                  <Link>What is an NFT?</Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="Learn-main-box-one desktop-what-are-nft">
                <div className="box-main">
                  <Typography variant="p" component="p">
                    <a href="#top-1">Fungible vs. non-fungible</a>
                  </Typography>
                  <Typography variant="p" component="p">
                    <a href="#top-2">How do NFTs work?</a>
                  </Typography>
                  <Typography variant="p" component="p">
                    <a href="#top-3">The impact of NFT technology</a>
                  </Typography>
                  <Typography variant="p" component="p">
                    <a href="#top-4">What are NFTs used for?</a>
                  </Typography>
                  <Typography variant="p" component="p">
                    <a href="#top-5">WFuture applications</a>
                  </Typography>
                  <Typography variant="p" component="p">
                    <a href="#top-6">How NFTs are bought and sold</a>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <div className="Learn-main-box-two">
                <div className="Published-main-box">
                  <div className="Published-one">
                    <Typography variant="p" component="p">
                      Published September 8, 2023
                    </Typography>
                  </div>
                  <div className="Published-two">
                    <Button onClick={handleClick}>
                      <div className="Published-two-button">
                        <IosShareOutlinedIcon />
                        <Typography variant="p" component="p">
                          <Link> Share</Link>
                        </Typography>
                      </div>
                    </Button>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          width: "20%",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 15,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem
                        onClick={handleClose}
                        className="Published-two-button-list"
                      >
                        <div className="Copy-URL-main">
                          <div className="Copy-URL-main-icon">
                            <LinkIcon />
                          </div>
                          <div className="Copy-URL-main-text">
                            <Typography variant="p" component="p">
                              Copy URL
                            </Typography>
                          </div>
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        className="Published-two-button-list"
                      >
                        <div className="Copy-URL-main">
                          <div className="Copy-URL-main-icon">
                            <FacebookOutlinedIcon />
                          </div>
                          <div className="Copy-URL-main-text">
                            <Typography variant="p" component="p">
                              Facebook
                            </Typography>
                          </div>
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        className="Published-two-button-list"
                      >
                        <div className="Copy-URL-main">
                          <div className="Copy-URL-main-icon">
                            <TwitterIcon />
                          </div>
                          <div className="Copy-URL-main-text">
                            <Typography variant="p" component="p">
                              Twitter
                            </Typography>
                          </div>
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        className="Published-two-button-list"
                      >
                        <div className="Copy-URL-main">
                          <div className="Copy-URL-main-icon">
                            <LinkedInIcon />
                          </div>
                          <div className="Copy-URL-main-text">
                            <Typography variant="p" component="p">
                              LinkedIn
                            </Typography>
                          </div>
                        </div>
                      </MenuItem>{" "}
                    </Menu>
                  </div>
                </div>
                <div className="Learn-main-box-two-heading">
                  <Typography variant="h1" component="h1">
                    What is an NFT?
                  </Typography>
                  <div className="Learn-main-box-two-image">
                    <img src={Transparent1} alt="Ethereum" />
                  </div>
                </div>
              </div>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mx={4}>
                <div className="Learn-main-box-three">
                  <Typography variant="h6" component="h6">
                    What is an NFT?
                  </Typography>
                  <Typography variant="p" component="p">
                    An NFT (non-fungible token) is a unique digital item stored
                    on a blockchain. NFTs can represent almost anything, and
                    serve as a digital record of ownership.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mx={4}>
                <section className="section-1" id="top-1">
                  <div className="Learn-main-box-content">
                    <Typography variant="h2" component="h2">
                      Fungible vs. non-fungible
                    </Typography>
                    <Typography variant="p" component="p">
                      Before we dive into NFTs, it’s important to understand the
                      “non-fungible” part of “non-fungible token.” When an item
                      is fungible, it means it’s interchangeable with another of
                      the same item. A classic example is a $1 dollar bill: you
                      could swap dollars with someone and you’d both still have
                      $1.
                    </Typography>
                    <Typography variant="p" component="p">
                      Non-fungible, on the other hand, means the item is totally
                      unique, and therefore has its own unique value. For
                      example, two cars of the same make and model might have
                      different values based on how many miles are on the
                      odometer, their accident records, or if it was previously
                      owned by a celebrity.
                    </Typography>
                  </div>
                </section>

                <section className="section-2" id="top-2">
                  <div className="Learn-main-box-content">
                    <Typography variant="h2" component="h2">
                      How do NFTs work?
                    </Typography>
                    <Typography variant="p" component="p">
                      NFTs operate on blockchain technology. The blockchain is
                      basically a large, digital, public record. The most
                      popular blockchains are distributed across many nodes
                      (read: people’s computers), which is why you’ll hear them
                      described as “decentralized.”
                    </Typography>
                    <Typography variant="p" component="p">
                      So instead of a central company-owned server, the
                      blockchain is distributed across a peer-to-peer network.
                      Not only does this ensure that the blockchain remains
                      immutable, it also allows the node operators to earn
                      money, instead of a single company. Because the blockchain
                      records and preserves history, it is uniquely positioned
                      to transform provable authenticity and digital ownership
                    </Typography>
                    <Typography variant="p" component="p">
                      When someone creates, transfers, buys, sells, or otherwise
                      does something with an NFT, that all gets recorded on the
                      blockchain. This is what enables authentication.
                    </Typography>
                    <Typography variant="p" component="p">
                      This record serves as a permanent statement of
                      authenticity that can be viewed or accessed by anyone.
                      Today, when you buy a piece of art or a collector's item,
                      it typically comes with a paper certificate of
                      authenticity, which you must then keep track of forever.
                      It is easily forgotten, lost or destroyed, creating a very
                      fragile system for authenticity. Blockchain’s offer a
                      simple and more secure solution to this long standing
                      issue of proving authenticity.
                    </Typography>
                    <Typography variant="p" component="p">
                      This record serves as a permanent statement of
                      authenticity that can be viewed or accessed by anyone.
                      Today, when you buy a piece of art or a collector's item,
                      it typically comes with a paper certificate of
                      authenticity, which you must then keep track of forever.
                      It is easily forgotten, lost or destroyed, creating a very
                      fragile system for authenticity. Blockchain’s offer a
                      simple and more secure solution to this long standing
                      issue of proving authenticity.
                    </Typography>
                    <Typography variant="p" component="p">
                      Let’s say you want to buy a piece of artwork from Tyler
                      Hobbs. With NFTs, you can see the entire history of that
                      piece, all the past owners, every sale, all the way back
                      to Hobbs’ original creation of the piece. Without NFTs,
                      you wouldn’t know if you were buying the real piece or
                      just a really good fake.
                    </Typography>
                  </div>
                </section>

                <section className="section-3" id="top-3">
                  <div className="Learn-main-box-content">
                    <Typography variant="h2" component="h2">
                      The impact of NFT technology
                    </Typography>
                    <Typography variant="p" component="p">
                      Blockchain technology is revolutionary for digital items.
                      With NFTs, digital items can be provably scarce, openly
                      transferable, and have authenticated ownership. But you
                      might be thinking…so what?
                    </Typography>
                    <Typography variant="p" component="p">
                      For creators, these new attributes are incredibly
                      powerful. Instead of distributing their artwork, music, or
                      other creations on platforms that are traditionally hard
                      to monetize, they’re able to sell unique and authenticated
                      items on a blockchain-based marketplace. In addition to
                      the initial sales, NFT creators may receive set creator
                      earnings on secondary sales. For example, a developer
                      could make an in-game skin that can be used across a
                      variety of games and has established authenticity and
                      ownership, and that developer may earn money other times
                      that skin is bought or sold.
                    </Typography>
                    <Typography variant="p" component="p">
                      This technology is revolutionary for collectors, too.
                      Imagine you’re about to buy a concert ticket online— with
                      NFTs, you can trust its authenticity, because of the
                      undisputed blockchain history, instead of relying on the
                      reseller’s word.
                    </Typography>
                  </div>
                </section>

                <section className="section-4" id="top-4">
                  <div className="Learn-main-box-content">
                    <Typography variant="h2" component="h2">
                      What are NFTs used for?
                    </Typography>
                    <Typography variant="p" component="p">
                      An NFT can represent anything, but let’s explore some of
                      the ways NFTs are being used today, and potential
                      implementations for the future.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Art NFTs
                    </Typography>
                    <Typography variant="p" component="p">
                      An art NFT is a type of NFT that represents a piece of
                      digital art, such as a drawing, painting, or piece of
                      digital artwork. Each art NFT is unique and traceable to
                      the original creator of the NFT, and that connection to
                      the creator may be valuable as well. Art NFTs are a new
                      form of digital art that can be collected and sold,
                      similar to physical artwork. Art NFTs can also have
                      additional utility (for example, owning the NFT may also
                      give you commercial rights to use the underlying artwork).
                    </Typography>
                    <Typography variant="p" component="p">
                      Artists are creating incredible and novel pieces with
                      NFTs. Damien Hirst used NFTs in his collection “The
                      Currency”, in which he created digital versions of 10,000
                      unique physical paintings. Collectors had one year to
                      decide if they wanted the digital or the physical version
                      of the painting— whichever version they did not choose
                      would be destroyed.You can find art NFTs in OpenSea’s Art
                      NFT section on OpenSea.io.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Profile picture NFTs (PFPs)
                    </Typography>
                    <Typography variant="p" component="p">
                      A profile picture, or PFP, NFT is any NFT that's primary
                      purpose is use as a social media profile picture, or
                      avatar. These NFTs are digital items that are
                      authenticated on a blockchain network, making them
                      verifiably unique. Some PFP NFTs also grant access to
                      designated online communities.
                    </Typography>
                    <Typography variant="p" component="p">
                      Profile picture NFTs come in various forms, ranging from
                      static images to animated or interactive designs. They may
                      be based on characters, take the form of animals, look
                      like humans, or be abstract.
                    </Typography>
                    <Typography variant="p" component="p">
                      These are probably the projects you’ve heard the most
                      about: Bored Ape Yacht Club (BAYC), Doodles, World of
                      Women (WoW), and more. For many people on the internet,
                      these PFPs actually become their online identity. Not only
                      do they identify with the group, they strongly identify
                      with their avatar. PFP projects are also centered around
                      holder benefits (like BAYC’s famous yacht party) and
                      community (like WoW, which donates a portion of their
                      creator earnings to women-centric charities).
                    </Typography>
                    <Typography variant="h4" component="h4">
                      Generative art PFPs
                    </Typography>
                    <Typography variant="p" component="p">
                      In many cases, creators use generative art technology to
                      create a library of characteristics (or character
                      features) that can be remixed into endless unique NFTs
                      within a collection.
                    </Typography>
                    <Typography variant="p" component="p">
                      Generative art refers to art that’s created using an
                      algorithm or set of rules. It can be created using a wide
                      range of techniques and technologies, including code and
                      artificial intelligence. The creator creates a set of
                      rules or instructions that define the parameters for
                      generating the artwork. These parameters can include
                      things like color, shape, size, and movement, among
                      others. Once the rules have been defined, the algorithm
                      takes over, producing a series of images or animations
                      based on the parameters set by the creator. Generative art
                      allows creators to make large collections (for example, a
                      10,000 NFT collection) that all have unique traits and
                      levels of rarity while retaining a specific art style and
                      look.
                    </Typography>
                    <Typography variant="p" component="p">
                      PFP NFT collections can also be created in other ways, for
                      example, as individually-drawn art, 3D digital art,
                      photographs, or myriad other methods.
                    </Typography>
                    <Typography variant="p" component="p">
                      You can find PFP NFTs in OpenSea’s PFP NFT section on
                      OpenSea.io.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Music NFTs
                    </Typography>
                    <Typography variant="p" component="p">
                      A music NFT is any NFT that represents ownership of music
                      or an experience tied to music, like a live concert event
                      or a virtual fan meet-and-greet. Music NFTs are created by
                      minting a unique token on a blockchain, which can then be
                      collected by music fans.
                    </Typography>
                    <Typography variant="p" component="p">
                      Music NFTs can be created by new artists and musicians
                      with large fanbases. These NFTs can include anything from
                      a recording to a composition to ticketing for a music
                      experience. The content of each music NFT varies based on
                      the creator and the work they decide to create.
                    </Typography>
                    <Typography variant="p" component="p">
                      Any artist can create a single song or audio file as an
                      NFT. For example, omgkirby partnered with Channel Tres to
                      create a collection of 5,550 unique songs, each with its
                      own BPM and key. Each song comes with vocals and
                      production by Channel Tres.
                      <div className="Learn-main-box-image">
                        <img src={Image1} alt="Ethereum" />
                        <a href="#">Bored Ape Yacht Club #9016</a>
                      </div>
                      You can find music NFTs in OpenSea’s Music NFT section on
                      OpenSea.io.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Trading Card NFTs and Digital Collectibles
                    </Typography>
                    <Typography variant="p" component="p">
                      NFTs bring some extra oomph to your traditional
                      collectibles. Instead of a physical basketball trading
                      card that sits in a binder under your bed, you can collect
                      dynamic NFTs from the NBA’s collection “The Association,”
                      where each card changes based on that player and team’s
                      performance.
                    </Typography>
                    <Typography variant="p" component="p">
                      You can find digital collectibles NFTs in OpenSea’s
                      Collectibe NFT section on OpenSea.io, and trading cards in
                      OpenSea’s Gaming NFT section.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Domain name NFTs
                    </Typography>
                    <Typography variant="p" component="p">
                      Think of a domain name NFT like an easy-to-remember
                      shortcut to your wallet. Like other types of NFTs, a
                      domain name NFT is stored on the blockchain. In web2,
                      websites are accessed through DNS (Domain Name System)
                      servers. DNS servers translate website addresses into IP
                      addresses. Similarly, in web3, wallets can be accessed
                      through domain names. These domain names translate into
                      wallet addresses.
                    </Typography>
                    <Typography variant="p" component="p">
                      With growing concern about the ownership of personal data
                      and a desire to avoid third parties like domain
                      registrars, domain name NFTs have become a potential
                      answer to the question of how to retain more control of
                      your data. Domain name NFTs allow users to own and control
                      the data that lives on their domain in contrast to a
                      hosted web2 domain name.
                    </Typography>
                    <Typography variant="p" component="p">
                      NFT domains can have extensions like .eth, .polygon, .nft,
                      .crypto, .bitcoin, .x, and .blockchain.
                    </Typography>
                    <Typography variant="p" component="p">
                      Naming standards like Ethereum Naming Service (ENS) and
                      Bonfida (the equivalent naming service for Solana) have
                      emerged to streamline naming for wallets, websites, and
                      other blockchain applications. These help make using the
                      blockchain more user-friendly, with human-readable names
                      and built-in verification.
                    </Typography>
                    <Typography variant="h4" component="h4">
                      Ethereum Name Service
                    </Typography>
                    <Typography variant="p" component="p">
                      Ethereum Name Service (ENS) is a “distributed, open, and
                      extensible naming system based on the Ethereum
                      blockchain.” It’s the most widely integrated domain name
                      service with 2.8 million names, 529 integrations, and 649k
                      owners at the time of writing. Domain names on ENS have
                      “.eth” extensions, but as of 2021, ENS allowed sites with
                      other top domain names like .com and .org to integrate
                      directly. Now, if you own a domain that ends in .com, you
                      can connect it to your ENS domain that ends in .eth.
                    </Typography>
                    <Typography variant="p" component="p">
                      ENS was initially proposed by Nick Johnson in April of
                      2016 as a protocol that could provide “flexible resolution
                      of short, human-readable names to service and resource
                      identifiers.” Johnson’s Ethereum Improvement Proposal
                      explains that “the mapping between names and resources may
                      change over time, so a user may change wallets, a website
                      may change hosts, or a swarm document may be updated to a
                      new version, without the domain name changing.”
                    </Typography>
                    <Typography variant="p" component="p">
                      The purpose of ENS is similar to DNS, but because it’s
                      built on the Ethereum blockchain, it has a different
                      architecture. According to ENS, “ENS complements and
                      extends the usefulness of DNS with decentralized,
                      trustworthy name resolution for web3 resources such as
                      blockchain addresses and distributed content.”
                    </Typography>
                    <Typography variant="p" component="p">
                      Unlike other domain name NFTs, ENS requires at least a
                      yearly renewal after purchasing a domain name NFT. Prices
                      range depending on the length and uniqueness of the domain
                      name.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Membership NFTs
                    </Typography>
                    <Typography variant="p" component="p">
                      Access to a physical or digital space is the key utility
                      value proposition for a membership NFT. Some membership
                      NFTs serve as access keys to in-person experiences (like a
                      golf community or networking board), while others operate
                      on platforms like Discord. For example, owning a DayAway
                      Founders Key grants exclusive access and benefits to
                      luxury experiences curated by some of the world’s top
                      brands. Owners are able to access curated in-real-life
                      experiences all over the world.
                    </Typography>
                    <Typography variant="p" component="p">
                      Other NFTs (like NFTs in the gaming or music categories)
                      can also have a membership or community-based component,
                      but aren’t categorized as membership NFTs. The
                      differentiator is that a membership NFT’s main purpose is
                      to belong in the community itself rather than being a side
                      benefit of a larger NFT experience. For example, a
                      VeeFriends PFP NFT is typically used as a profile picture
                      NFT, but as an added benefit it grants access for a set
                      period of time to VeeCon (a VeeFriends in-person
                      conference event).
                    </Typography>
                    <Typography variant="p" component="p">
                      Membership NFTs offer a connection point to passions,
                      hobbies, interest groups, or unique real-life experiences.
                      Brands and events like Coachella have turned to NFTs to
                      implement exclusive tickets and passes. Coachella
                      introduced their NFT marketplace and collections in 2022,
                      including lifetime passes.
                    </Typography>
                    <Typography variant="p" component="p">
                      BFF Friendship Bracelets offers members access to a
                      supportive community for women and nonbinary individuals
                      who want to learn more about the web3 world. While the
                      community’s perks are still evolving, the initial
                      membership offers access to the virtual network, future
                      events, and the possibility of virtual calls with BFF’s
                      founders. Some of BFF’s founding members include Mila
                      Kunis, Tyra Banks, and Gwenyth Paltrow.
                      <div className="Learn-main-box-image">
                        <img src={Image1} alt="Ethereum" />
                        <a href="#">Bored Ape Yacht Club #9016</a>
                      </div>
                      You can find Membership NFTs in OpenSea’s Memberships NFT
                      section on OpenSea.io.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Gaming NFTs
                    </Typography>
                    <Typography variant="p" component="p">
                      A gaming NFT is an NFT associated with any digital item
                      from the realm of online gaming and the metaverse: in-game
                      items, characters, skins, customizations, maps, modes,
                      tickets, collectibles–any digital creation that one would
                      use in a gaming environment. It is a unique,
                      blockchain-based item representing a specific item or
                      element within a game.
                    </Typography>
                    <Typography variant="p" component="p">
                      For example, if you unlocked a tool while playing an
                      NFT-supported game, you could mint that in-game item and
                      take ownership of it. This ownership is verifiable, so
                      your tool can typically be sold, collected, and used just
                      like a real-world item.
                    </Typography>
                    <Typography variant="p" component="p">
                      Today, purchases or acquisitions made within a game go
                      away the instant the game does. Your “ownership” is
                      contingent on the game developers maintaining the game.
                      Ostensibly, they could choose to take an item away or
                      decommission items you own, causing you to lose them.
                      Additionally, gamers are unable to resell items outside of
                      the closed ecosystem of a given game. With gaming NFTs,
                      digital items can be given provable ownership. Digital
                      items and memorabilia can also have provable scarcity,
                      which gives them a similar supply and demand dynamic to
                      their real-world counterparts.
                    </Typography>
                    <Typography variant="p" component="p">
                      Another benefit of gaming NFTs is the potential of a new
                      era of “interoperability,” or how things from one game or
                      gaming universe can be used in another. Today, a game and
                      all its items are siloed, which means they exist only
                      within that game. You can’t use a weapon from Halo in the
                      Call of Duty universe or play FIFA as Mario. But if more
                      games leverage blockchain technology as an interoperable
                      ledger for proof of ownership and standardize their
                      systems for how to render and display items, NFTs could
                      eventually allow in-game items from one game to be
                      operable in more games.
                    </Typography>
                    <Typography variant="p" component="p">
                      Some of this work is dependent on blockchain technology,
                      while some of it is dependent on how the games of the
                      future are built. Organizations like Metaverse Standards
                      are working to provide cooperation between organizations
                      and companies to foster the development of an open and
                      inclusive metaverse.
                    </Typography>
                    <Typography variant="p" component="p">
                      The sheer quantity of digital items created by both game
                      developers and the billions of fans that play their games
                      dwarfs many other areas of digital items, making gaming
                      NFTs a growing application of blockchain technology.
                    </Typography>
                    <Typography variant="p" component="p">
                      Gaming NFTs are revolutionary because of their utility,
                      ownership, and interoperability. This category is still
                      relatively nascent however many gamers are excited by the
                      possibilities of in-game items being usable across
                      different games and not under the control of a single game
                      studio. Aurory Project is a gaming studio that leverages
                      the Solana blockchain to streamline in-game item
                      ownership.
                    </Typography>
                    <Typography variant="h4" component="h4">
                      The metaverse
                    </Typography>
                    <Typography variant="p" component="p">
                      The metaverse refers to a virtual-and-augmented reality in
                      which users can interact with the digital space, but the
                      definition of “metaverse” is still evolving. It isn’t so
                      much a place, as it is a way of connecting and
                      interacting; it can be home to countless worlds or arenas,
                      each with its own lands, characters, and possibilities.
                    </Typography>
                    <Typography variant="p" component="p">
                      In a future theoretical open metaverse, gaming NFTs could
                      be used to represent a wide range of virtual items,
                      including virtual real estate, clothing, accessories, and
                      other customization options for avatars or in-game
                      characters. These NFTs could potentially be sold on
                      marketplaces like OpenSea, allowing users to buy and sell
                      virtual items that can be used within the metaverse.
                    </Typography>
                    <Typography variant="p" component="p">
                      One of the benefits of blockchains is that they are
                      decentralized systems, meaning, they are not controlled by
                      a single entity. This can help to promote fairness and
                      transparency in the distribution and ownership of NFTs.
                      Decentralization offers a layer of protection and
                      transparency through trustless and permissionless
                      transactions.
                    </Typography>
                    <Typography variant="p" component="p">
                      Interoperability refers to the ability of different
                      systems or components to work together and communicate
                      with each other. Blockchains enable the transfer of NFTs
                      between various virtual worlds or platforms that support
                      them, enabling greater accessibility, flexibility, and
                      utility.
                    </Typography>
                    <Typography variant="p" component="p">
                      While true interoperability is still slightly out of
                      reach, ideally, NFTs will be able to be used across
                      different platforms and virtual worlds within the
                      metaverse in the future, allowing users to bring their
                      digital items with them as they navigate between various
                      experiences. This interoperability could bring new kinds
                      of collaboration and better integrate content from
                      developers and platforms.
                    </Typography>
                    <Typography variant="p" component="p">
                      NFTs also enable users to express themselves creatively by
                      showcasing their unique items, such as avatars, skins,
                      clothing, or art, within the metaverse. This lets users
                      create distinct digital identities, which can enhance
                      social interactions and user engagement in virtual spaces.
                    </Typography>
                    <Typography variant="p" component="p">
                      And finally, NFTs provide creators and collectors a means
                      to monetize their creations within the metaverse by
                      allowing users to buy and sell items.
                    </Typography>
                    <Typography variant="p" component="p">
                      Now, blockchain-based metaverse projects like Otherside,
                      Decentraland, and The Sandbox have emerged, where users
                      can build digital experiences and open economies. In
                      addition to allowing developers to build their own
                      metaverses, NFTs can augment the success of platforms like
                      Roblox by enabling users to actually own their digital
                      items. As these virtual worlds grow and expand users can
                      maintain their sovereignty and ownership, not the
                      platform.
                      <div className="Learn-main-box-image">
                        <img src={Image1} alt="Ethereum" />
                        <a href="#">Otherdeed for Otherside #416</a>
                      </div>
                      You can find gaming NFTs in OpenSea’s Gaming NFT section
                      on OpenSea.io.
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Photography NFTs
                    </Typography>
                    <Typography variant="p" component="p">
                      A photography NFT is a unique digital asset that
                      represents a specific photograph or artwork. It is stored
                      and recorded on a blockchain, a decentralized, immutable
                      digital ledger technology.{" "}
                    </Typography>
                    <Typography variant="p" component="p">
                      Photography NFTs are stored and transferred digitally,
                      allowing them to be easily shared and displayed online.
                      The ownership and authenticity of a photography NFT is
                      verified and recorded on the blockchain, allowing it to be
                      easily transferred between users.
                    </Typography>
                    <Typography variant="p" component="p">
                      NFTs offer a way for photographers and artists to sell and
                      distribute their work in a digital format, while also
                      providing collectors with a unique and verifiable digital
                      item.
                    </Typography>
                    <Typography variant="p" component="p">
                      Justin Aversano made headlines with his Twin Flames
                      collection, a collection of 100 twin portraits. Aversano
                      drew inspiration from his relationship with his fraternal
                      twin for this collection. The “Twin Flames” collection
                      became known as the first major NFT photography collection
                      of its kind and catapulted Aversano into one of the
                      world's highest-selling photographers.{" "}
                      <div className="Learn-main-box-image">
                        <img src={Image1} alt="Ethereum" />
                        <a href="#">Twin Flames #30 Kiarah and Kayah Agudo</a>
                      </div>
                      You can find photography NFTs in OpenSea’s Photography NFT
                      section on OpenSea.io.
                    </Typography>
                  </div>
                </section>

                <section className="section-5" id="top-5">
                  <div className="Learn-main-box-content">
                    <Typography variant="h2" component="h2">
                      Future applications
                    </Typography>
                    <Typography variant="p" component="p">
                      New applications for the blockchain are constantly
                      emerging. New use cases include identity verification,
                      intellectual property, and storage solutions, like
                      Courtyard, which holds physical inventory and enables you
                      to safely hold, sell, or claim your item you’re ready to
                      redeem. The possibilities for future applications are
                      endless!
                    </Typography>
                  </div>
                </section>

                <section className="section-6" id="top-6">
                  <div className="Learn-main-box-content">
                    <Typography variant="h2" component="h2">
                      How NFTs are bought and sold
                    </Typography>
                    <Typography variant="p" component="p">
                      With the growing popularity of NFTs, many marketplaces
                      have cropped up to fill the increasing desire to buy and
                      sell these items. Every marketplace is different— some
                      specialize in only one blockchain, some are exclusive and
                      curated, and some focus on certain kinds of NFTs. OpenSea
                      is the largest NFT marketplace, with the best selection—
                      it supports multiple blockchains and hosts millions of
                      NFTs.
                    </Typography>
                  </div>
                </section>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mx={4}>
                <section className="Q&A">
                  <div className="Qa-main-box">
                    <Typography variant="h2" component="h2">
                      🧠 Q&A
                    </Typography>
                    <div className="Qa-main-box-one">
                      <Typography variant="h6" component="h6">
                        Are NFTs bad for the environment?
                      </Typography>
                      <Typography variant="p" component="p">
                        Much of the dialogue about the energy-intensiveness of
                        blockchains centers around the sheer computing power
                        needed to facilitate mining and block validation.
                        However, not every blockchain requires that much energy.
                        For example, one transaction on Solana uses less energy
                        than a couple Google searches. In September 2022,
                        Ethereum migrated to a proof of stake mechanism, which
                        reduced power consumption by ~99% compared to its
                        previous proof of work.
                      </Typography>
                    </div>
                  </div>
                </section>
              </Grid>
            </Grid>
          </Grid>

          <Grid container mt={5}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="Related-articles-main-box">
                <Typography variant="h2" component="h2">
                  Related articles
                </Typography>
                <Typography variant="p" component="p">
                  Learn more about OpenSea, web3 concepts, and how NFTs work.
                </Typography>
              </div>
              <div className="Learn-slide">
                <div className="explore-cllection-slide">
                  <OwlCarousel className="owl-theme owl-carousel" {...options}>
                    <div className="item">
                      <Link
                        to="/collection-detail"
                        className="collection-cover-link"
                      >
                        <div className="cover-photo-for-collection">
                          <img src={collection1} alt="collection1" />
                        </div>
                      </Link>
                      <div className="explore-cllection-slide-text">
                        <h4>What are photography NFTs?</h4>
                      </div>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection2} alt="collection2" />
                        </div>
                      </Link>
                      <div className="explore-cllection-slide-text">
                        <h4>What is an NFT?</h4>
                      </div>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection3} alt="collection3" />
                        </div>
                      </Link>
                      <div className="explore-cllection-slide-text">
                        <h4>What are gaming NFTs?</h4>
                      </div>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection4} alt="collection4" />
                        </div>
                      </Link>
                      <div className="explore-cllection-slide-text">
                        <h4>How to create an NFT</h4>
                      </div>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection5} alt="collection6" />
                        </div>
                      </Link>
                      <div className="explore-cllection-slide-text">
                        <h4>What are music NFTs?</h4>
                      </div>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection6} alt="collection6" />
                        </div>
                      </Link>
                      <div className="explore-cllection-slide-text">
                        <h4>How to make the most of your OpenSea collection</h4>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <div className="newsletter-main-container">
        <Box container mx={5}>
          <Grid container className="newsletter-main">
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="newsletter-box-main">
                <div className="newsletter-box-main-heading">
                  <Typography variant="p" component="p">
                    OpenSea Currents
                  </Typography>
                  <Typography variant="h2" component="h2">
                    Sign up for our newsletter
                  </Typography>
                  <Typography variant="p" component="p">
                    Join our newsletter to get web3 news, updates, interviews,
                    and deep dives all in one place.
                  </Typography>
                </div>
                <div className="newsletter-box-main-form">
                  <form noValidate autoComplete="off">
                    <Grid container>
                      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <FormControl spacing={2} className="email-input-main">
                          <OutlinedInput
                            placeholder="You email address"
                            className="email-input"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Button variant="contained" className="footer-button">
                          sign up
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
              <div className="newsletter-box-main-image">
                <img src={NftImage} alt="Ethereum" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default WhatAreNfts;
