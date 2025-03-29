import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useNavigate} from "react-router-dom"
import collection1 from "../../img/collection-1.png";
import collection2 from "../../img/collection-2.webp";
import collection3 from "../../img/collection-3.webp";
import collection4 from "../../img/collection-4.jpg";
import collection5 from "../../img/collection-5.webp";
import collection6 from "../../img/collection-6.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

function createData(
    rank,
    collectionimg,
    collectionname,
    floorprice,
    volume,
    volpercent
  ) {
    return {
      rank,
      collectionimg,
      collectionname,
      floorprice,
      volume,
      volpercent,
    };
  }
  
  const rowsone = [
    createData(1, collection1, "collection1", 1.6, 240.12, -10.2),
    createData(2, collection2, "collection2", 5.9, 374.34, -12.2),
    createData(3, collection3, "collection3", 16.0, 24.54, -0.2),
    createData(4, collection4, "collection4", 3.7, 67.76, 10.2),
    createData(5, collection5, "collection5", 16.0, 49.88, 10.2),
  ];
  
  function createDatatwo(
    ranktwo,
    collectionimgtwo,
    collectionnametwo,
    floorpricetwo,
    volumetwo,
    volpercenttwo
  ) {
    return {
      ranktwo,
      collectionimgtwo,
      collectionnametwo,
      floorpricetwo,
      volumetwo,
      volpercenttwo,
    };
  }
  
  const rowstwo = [
    createDatatwo(6, collection6, "collection6", 16.0, 490.2, 0.2),
    createDatatwo(7, collection3, "collection3", 16.0, 24.54, -0.2),
    createDatatwo(8, collection4, "collection4", 3.7, 67.76, 10.2),
    createDatatwo(9, collection5, "collection5", 16.0, 49.88, 10.2),
    createDatatwo(10, collection6, "collection6", 16.0, 490.2, 0.2),
  ];

const ExploreTableTrend = () => {

    const navigate = useNavigate(); 

    const [chains, setChains] = React.useState("");

  const handleChainChange = (event) => {
    setChains(event.target.value);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      fontSize: 12,
      padding: 8,
    },
  })); 

  const LightTooltipImage = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      fontSize: 12,
      padding: 2,
    },
  })); 
  
  return (
    <div>
      <Box className="lllllllll">
              <Grid container>
                <Grid tem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <FormControl fullWidth className="all-chain-form-sm-view">
                    <InputLabel id="demo-simple-select-label">
                      All Chains
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={chains}
                      label="Chains"
                      onChange={handleChainChange}
                    >
                      <MenuItem value={10}>BNB Chain</MenuItem>
                      <MenuItem value={20}>Base</MenuItem>
                      <MenuItem value={30}>Ethereum</MenuItem>
                      <MenuItem value={40}>Klaytn</MenuItem>
                      <MenuItem value={50}>Polygon</MenuItem>
                      <MenuItem value={60}>Solana</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid tem xs={6} sm={6} md={6} lg={6} xl={6}>
                  <FormControl fullWidth className="all-chain-form-sm-view">
                    <InputLabel id="demo-simple-select-label">
                      All Chains
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={chains}
                      label="Chains"
                      onChange={handleChainChange}
                    >
                      <MenuItem value={10}>BNB Chain</MenuItem>
                      <MenuItem value={20}>Base</MenuItem>
                      <MenuItem value={30}>Ethereum</MenuItem>
                      <MenuItem value={40}>Klaytn</MenuItem>
                      <MenuItem value={50}>Polygon</MenuItem>
                      <MenuItem value={60}>Solana</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 }} className="Table-overflow desktop">
              <Grid container spacing={10} className="sub-tables">
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Grid container spacing={2} className="firstContain">
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                      <div className="rankingThead display-none">Rank</div>
                      <div className="sm-d-block">#</div>
                    </Grid>
                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                      <div className="rankingThead collect">Collection</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <div className="rankingThead display-none">
                        Floor Price
                      </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <div className="rankingThead">Volume</div>
                    </Grid>
                  </Grid>

                  {rowsone.map((row) => (
                    <Grid onClick={()=>navigate("/collection-detail")} container spacing={2} className="bodyRow">
                      <Grid
                        item
                        xs={1}
                        sm={1}
                        md={1}
                        lg={1}
                        xl={1}
                        className="ranking"
                      >
                        {row.rank}
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        xl={7}
                        className="ranking-outer"
                      >
                        <div className="collections-outer">
                          

                          <LightTooltipImage
                                  title={
                                    <>
                                      <div className="Collection-table-image-hover">
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                      </div>
                                    </>
                                  }
                                  placement="top-start"
                                  arrow
                                >
                                  <div className="collections-img ranking">
                                    <img src={row.collectionimg} />
                                  </div>
                                </LightTooltipImage>
                          <span>{row.collectionname}</span>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={2}
                        className="ranking"
                      >
                        {row.floorprice} ETH
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                        <div className="volume-rate-outer">
                          <div className="volume-rate ranking">
                            {row.volume} ETH
                          </div>
                          <span
                            style={{
                              color: `${row.volpercent}` < 0 ? "red" : "green",
                            }}
                          >
                            {row.volpercent}%
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Grid container spacing={2} className="firstContain">
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                      <div className="rankingThead display-none">Rank</div>
                      <div className="sm-d-block">#</div>
                    </Grid>
                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                      <div className="rankingThead collect">Collection</div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <div className="rankingThead display-none">
                        Floor Price
                      </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <div className="rankingThead">Volume</div>
                    </Grid>
                  </Grid>

                  {rowstwo.map((row) => (
                    <Grid onClick={()=>navigate("/collection-detail")} container spacing={2} className="bodyRow">
                      <Grid
                        item
                        xs={1}
                        sm={1}
                        md={1}
                        lg={1}
                        xl={1}
                        className="ranking"
                      >
                        {row.ranktwo}
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        xl={7}
                        className="ranking-outer"
                      >
                        <div className="collections-outer">

                          <LightTooltipImage
                                  title={
                                    <>
                                      <div className="Collection-table-image-hover">
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                      </div>
                                    </>
                                  }
                                  placement="top-start"
                                  arrow
                                >
                                  <div className="collections-img ranking">
                                    <img src={row.collectionimgtwo} />
                                  </div>
                                </LightTooltipImage>

                          
                          <span>{row.collectionnametwo}</span>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={2}
                        className="ranking"
                      >
                        {row.floorpricetwo} ETH
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                        <div className="volume-rate-outer">
                          <div className="volume-rate ranking">{row.volumetwo} ETH</div>
                          <span
                            style={{
                              color:
                                `${row.volpercenttwo}` < 0 ? "red" : "green",
                            }}
                          >
                            {row.volpercenttwo}%
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{ flexGrow: 1 }}
              className="Table-overflow mobile-response"
            >
              <Grid container spacing={2} className="sub-tables" id="table123">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid container spacing={2} className="firstContain">
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                      <div className="sm-d-block">#</div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div className="rankingThead collect">Collection</div>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <div className="rankingThead">Volume</div>
                    </Grid>
                  </Grid>

                  {rowsone.map((row) => (
                    <Grid onClick={()=>navigate("/collection-detail")} container spacing={1} className="bodyRow">
                      <Grid
                        item
                        xs={1}
                        sm={1}
                        md={1}
                        lg={1}
                        xl={1}
                        className="ranking"
                      >
                        {row.rank}
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        xl={7}
                        className="ranking-outer"
                      >
                        <div className="collections-outer">
                          <div className="collections-img ranking">
                            <img src={row.collectionimg} />
                          </div>
                          <div className="collections-outer-span-mobile">
                            <span>{row.collectionname}</span>
                            <div className="collections-outer-span-mobile-two">
                              <span>
                                <p>floor :</p>
                              </span>
                              <span>{ row.floorprice} ETH</span>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className="volume-rate-outer">
                          <div className="volume-rate ranking">
                            {row.volume} ETH
                          </div>
                          {/* <span
                            style={{
                              color: `${row.volpercent}` < 0 ? "red" : "green",
                            }}
                          >
                            {row.volpercent}%
                          </span> */}
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid container spacing={2} className="firstContain">
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                      <div className="sm-d-block">#</div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div className="rankingThead collect">Collection</div>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <div className="rankingThead">Volume</div>
                    </Grid>
                  </Grid>

                  {rowstwo.map((row) => (
                    <Grid onClick={()=>navigate("/collection-detail")} container spacing={1} className="bodyRow">
                      <Grid
                        item
                        xs={1}
                        sm={1}
                        md={1}
                        lg={1}
                        xl={1}
                        className="ranking"
                      >
                        {row.ranktwo}
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        xl={7}
                        className="ranking-outer"
                      >
                        <div className="collections-outer">
                          <div className="collections-img ranking">
                            <img src={row.collectionimgtwo} />
                          </div>
                          <div className="collections-outer-span-mobile">
                            <span> {row.collectionnametwo}</span>
                            <div className="collections-outer-span-mobile-two">
                              <span>
                                <p>floor :</p>
                              </span>
                              <span>{ row.floorpricetwo} ETH</span>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className="volume-rate-outer">
                          <div className="volume-rate ranking">
                            {row.volumetwo} ETH
                          </div>
                          {/* <span
                            style={{
                              color: `${row.volpercent}` < 0 ? "red" : "green",
                            }}
                          >
                            {row.volpercent}%
                          </span> */}
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>
    </div>
  )
}

export default ExploreTableTrend
