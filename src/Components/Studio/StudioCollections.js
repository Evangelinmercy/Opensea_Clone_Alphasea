import React from 'react'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DropResources from "../../img/drop-resources.png";
import EastIcon from "@mui/icons-material/East";
import HeaderStudio from "./HeaderStudio"


const StudioCollections = () => {
  return (
    <div>
      <HeaderStudio />
      <Container>
        <Box Container pt={6}>
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12} pt={7}>
              <div className="StudioCollections-main">
                <div className="StudioCollections-main-box-1">
                  <Typography variant="h2" component="h2">
                    Collections
                  </Typography>
                </div>
                <div className="StudioCollections-main-box-card box12">
                  <div className="StudioCollections-main-box-card-one">
                    <div className="StudioCollections-main-box-card-icon">
                      <DesignServicesIcon />
                    </div>
                    <div className="StudioCollections-main-box-card-text">
                      <Typography variant="h5" component="h5">
                        You haven’t created any collections yet.
                      </Typography>
                    </div>
                  </div>
                  <div className="StudioCollections-main-box-card-button">
                    <Button variant="contained">Create</Button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={12} sm={12} md={12} lg={12} xl={12} pt={7}>
              <div className="StudioCollections-main">
                <div className="StudioCollections-main-box-1">
                  <Typography variant="h2" component="h2">
                    Resources
                  </Typography>
                </div>
                <div className="StudioCollections-main-box-card">
                  <div className="StudioCollections-main-box-card-one Resources">
                    <div className="StudioCollections-main-box-card-image">
                      <img src={DropResources} alt="collection1" />
                    </div>
                    <div className="StudioCollections-main-box-card-text desktop">
                      <Typography variant="h5" component="h5">
                        Drops on OpenSea
                      </Typography>
                      <Typography variant="p" component="p">
                        Learn how you can drop NFT collections on OpenSea.
                      </Typography>
                    </div>
                  </div>
                  <div className="StudioCollections-main-box-card-button ">
                    <div className="StudioCollections-main-box-card-text mobile-response  ">
                      <Typography variant="h5" component="h5">
                        Drops on OpenSea
                      </Typography>
                      <Typography variant="p" component="p">
                        Learn how you can drop NFT collections on OpenSea.
                      </Typography>
                    </div>
                    <EastIcon />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default StudioCollections