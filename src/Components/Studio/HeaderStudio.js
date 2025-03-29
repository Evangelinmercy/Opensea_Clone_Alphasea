import React from 'react'
import { AppBar, Box, Button, Container, Grid, Typography } from "@mui/material";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Studio.css"

const HeaderStudio = () => {
  return (
    <div>
      <Box Container>
        <AppBar sx={{ backgroundColor: "rgba(18,18,18)", p: 1 }}>
          <Grid container className="HeaderStudio-main-header">
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to="/" href="/">
                <div className="logo HeaderStudio">
                  <svg
                    width="532"
                    height="100"
                    viewBox="0 0 532 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M135.428 68H127.19L139.743 31.6364H149.651L162.186 68H153.947L144.839 39.946H144.555L135.428 68ZM134.913 53.7067H154.374V59.7081H134.913V53.7067ZM173.985 31.6364V68H166.421V31.6364H173.985ZM180.044 78.2273V40.7273H187.501V45.3082H187.839C188.17 44.5743 188.649 43.8286 189.277 43.071C189.916 42.3016 190.745 41.6624 191.763 41.1534C192.792 40.6326 194.071 40.3722 195.598 40.3722C197.586 40.3722 199.421 40.893 201.102 41.9347C202.783 42.9645 204.126 44.5211 205.133 46.6044C206.139 48.6759 206.642 51.2741 206.642 54.3991C206.642 57.4413 206.151 60.0099 205.168 62.1051C204.198 64.1884 202.872 65.7687 201.191 66.8459C199.522 67.9112 197.652 68.4439 195.58 68.4439C194.112 68.4439 192.863 68.2012 191.834 67.7159C190.816 67.2306 189.981 66.621 189.33 65.8871C188.679 65.1413 188.182 64.3897 187.839 63.6321H187.608V78.2273H180.044ZM187.448 54.3636C187.448 55.9853 187.673 57.3999 188.123 58.6072C188.573 59.8146 189.224 60.7557 190.076 61.4304C190.928 62.0933 191.964 62.4247 193.183 62.4247C194.414 62.4247 195.456 62.0874 196.308 61.4126C197.16 60.7261 197.805 59.7791 198.243 58.5717C198.693 57.3525 198.918 55.9498 198.918 54.3636C198.918 52.7893 198.699 51.4044 198.261 50.2088C197.823 49.0133 197.178 48.0781 196.326 47.4034C195.474 46.7287 194.426 46.3913 193.183 46.3913C191.952 46.3913 190.91 46.7169 190.058 47.3679C189.218 48.0189 188.573 48.9422 188.123 50.1378C187.673 51.3333 187.448 52.742 187.448 54.3636ZM219.248 52.233V68H211.684V31.6364H219.035V45.5391H219.355C219.97 43.9292 220.965 42.6686 222.338 41.7571C223.711 40.8338 225.433 40.3722 227.505 40.3722C229.399 40.3722 231.05 40.7865 232.459 41.6151C233.879 42.4318 234.98 43.6096 235.761 45.1484C236.554 46.6754 236.945 48.5043 236.933 50.6349V68H229.369V51.9844C229.381 50.3035 228.955 48.9955 228.091 48.0604C227.238 47.1252 226.043 46.6577 224.504 46.6577C223.474 46.6577 222.563 46.8767 221.77 47.3146C220.988 47.7526 220.373 48.3918 219.923 49.2322C219.485 50.0608 219.26 51.0611 219.248 52.233ZM250.663 68.5149C248.923 68.5149 247.372 68.2131 246.011 67.6094C244.649 66.9938 243.572 66.0883 242.779 64.8928C241.998 63.6854 241.607 62.1821 241.607 60.3828C241.607 58.8677 241.885 57.5952 242.442 56.5653C242.998 55.5355 243.756 54.7069 244.714 54.0795C245.673 53.4522 246.762 52.9787 247.982 52.6591C249.213 52.3395 250.503 52.1146 251.852 51.9844C253.438 51.8187 254.717 51.6648 255.688 51.5227C256.658 51.3688 257.362 51.1439 257.8 50.848C258.238 50.5521 258.457 50.1141 258.457 49.5341V49.4276C258.457 48.303 258.102 47.433 257.392 46.8175C256.694 46.2019 255.699 45.8942 254.409 45.8942C253.048 45.8942 251.965 46.196 251.16 46.7997C250.355 47.3916 249.822 48.1373 249.562 49.0369L242.566 48.4688C242.921 46.8116 243.62 45.3793 244.661 44.1719C245.703 42.9527 247.046 42.0175 248.692 41.3665C250.349 40.7036 252.267 40.3722 254.445 40.3722C255.96 40.3722 257.41 40.5497 258.795 40.9048C260.192 41.2599 261.429 41.8104 262.506 42.5561C263.595 43.3018 264.453 44.2607 265.08 45.4325C265.708 46.5926 266.021 47.9834 266.021 49.6051V68H258.848V64.218H258.635C258.197 65.0703 257.611 65.822 256.877 66.473C256.143 67.1122 255.261 67.6153 254.232 67.9822C253.202 68.3374 252.012 68.5149 250.663 68.5149ZM252.829 63.2947C253.942 63.2947 254.924 63.0758 255.776 62.6378C256.629 62.188 257.297 61.5843 257.783 60.8267C258.268 60.0691 258.511 59.2109 258.511 58.2521V55.358C258.274 55.5118 257.948 55.6539 257.534 55.7841C257.132 55.9025 256.676 56.0149 256.167 56.1214C255.658 56.2161 255.149 56.3049 254.64 56.3878C254.131 56.4588 253.669 56.5239 253.255 56.5831C252.367 56.7133 251.592 56.9205 250.929 57.2045C250.266 57.4886 249.751 57.8733 249.384 58.3587C249.017 58.8321 248.834 59.424 248.834 60.1342C248.834 61.1641 249.207 61.9512 249.952 62.4957C250.71 63.0284 251.669 63.2947 252.829 63.2947ZM291.758 42.0945C291.616 40.6622 291.007 39.5495 289.929 38.7564C288.852 37.9633 287.39 37.5668 285.544 37.5668C284.289 37.5668 283.23 37.7443 282.365 38.0994C281.501 38.4427 280.838 38.9221 280.377 39.5376C279.927 40.1532 279.702 40.8516 279.702 41.6328C279.678 42.2839 279.815 42.852 280.11 43.3374C280.418 43.8227 280.838 44.2429 281.371 44.598C281.904 44.9413 282.519 45.2431 283.218 45.5036C283.916 45.7521 284.662 45.9652 285.455 46.1428L288.722 46.924C290.308 47.2791 291.764 47.7526 293.09 48.3445C294.416 48.9363 295.564 49.6643 296.534 50.5284C297.505 51.3925 298.257 52.4105 298.789 53.5824C299.334 54.7543 299.612 56.0978 299.624 57.6129C299.612 59.8383 299.044 61.7678 297.919 63.4013C296.807 65.023 295.197 66.2836 293.09 67.1832C290.995 68.071 288.467 68.5149 285.508 68.5149C282.573 68.5149 280.016 68.0651 277.838 67.1655C275.672 66.2659 273.979 64.9342 272.76 63.1705C271.552 61.3949 270.919 59.1991 270.86 56.5831H278.299C278.382 57.8023 278.731 58.8203 279.347 59.6371C279.974 60.442 280.809 61.0516 281.85 61.4659C282.904 61.8684 284.094 62.0696 285.419 62.0696C286.721 62.0696 287.852 61.8802 288.811 61.5014C289.781 61.1226 290.533 60.5959 291.066 59.9212C291.598 59.2464 291.865 58.4711 291.865 57.5952C291.865 56.7784 291.622 56.0919 291.137 55.5355C290.663 54.9792 289.965 54.5057 289.042 54.1151C288.13 53.7244 287.011 53.3693 285.686 53.0497L281.726 52.0554C278.66 51.3097 276.24 50.1437 274.464 48.5575C272.689 46.9714 271.807 44.8348 271.819 42.1477C271.807 39.946 272.393 38.0225 273.576 36.3771C274.772 34.7318 276.411 33.4474 278.495 32.5241C280.578 31.6009 282.945 31.1392 285.597 31.1392C288.296 31.1392 290.651 31.6009 292.664 32.5241C294.688 33.4474 296.262 34.7318 297.387 36.3771C298.511 38.0225 299.091 39.9283 299.127 42.0945H291.758ZM317.082 68.5327C314.277 68.5327 311.862 67.9645 309.838 66.8281C307.826 65.6799 306.275 64.0582 305.186 61.9631C304.097 59.8561 303.552 57.3643 303.552 54.4879C303.552 51.6825 304.097 49.2204 305.186 47.1016C306.275 44.9827 307.808 43.3314 309.785 42.1477C311.773 40.964 314.105 40.3722 316.78 40.3722C318.58 40.3722 320.255 40.6622 321.805 41.2422C323.368 41.8104 324.729 42.6686 325.889 43.8168C327.061 44.965 327.972 46.4091 328.623 48.1491C329.274 49.8774 329.6 51.9015 329.6 54.2216V56.299H306.571V51.6115H322.48C322.48 50.5225 322.243 49.5578 321.77 48.7173C321.296 47.8769 320.639 47.2199 319.799 46.7464C318.97 46.2611 318.006 46.0185 316.905 46.0185C315.756 46.0185 314.738 46.2848 313.851 46.8175C312.975 47.3383 312.288 48.0426 311.791 48.9304C311.294 49.8063 311.039 50.7829 311.028 51.8601V56.3168C311.028 57.6662 311.276 58.8321 311.773 59.8146C312.282 60.7971 312.998 61.5547 313.922 62.0874C314.845 62.62 315.94 62.8864 317.206 62.8864C318.047 62.8864 318.816 62.768 319.515 62.5312C320.213 62.2945 320.811 61.9394 321.308 61.4659C321.805 60.9924 322.184 60.4124 322.444 59.7259L329.44 60.1875C329.085 61.8684 328.357 63.3362 327.256 64.5909C326.167 65.8338 324.759 66.8045 323.03 67.5028C321.314 68.1894 319.331 68.5327 317.082 68.5327ZM342.313 68.5149C340.573 68.5149 339.022 68.2131 337.661 67.6094C336.3 66.9938 335.223 66.0883 334.43 64.8928C333.648 63.6854 333.258 62.1821 333.258 60.3828C333.258 58.8677 333.536 57.5952 334.092 56.5653C334.648 55.5355 335.406 54.7069 336.365 54.0795C337.324 53.4522 338.413 52.9787 339.632 52.6591C340.863 52.3395 342.153 52.1146 343.503 51.9844C345.089 51.8187 346.367 51.6648 347.338 51.5227C348.309 51.3688 349.013 51.1439 349.451 50.848C349.889 50.5521 350.108 50.1141 350.108 49.5341V49.4276C350.108 48.303 349.753 47.433 349.042 46.8175C348.344 46.2019 347.35 45.8942 346.059 45.8942C344.698 45.8942 343.615 46.196 342.81 46.7997C342.005 47.3916 341.473 48.1373 341.212 49.0369L334.216 48.4688C334.572 46.8116 335.27 45.3793 336.312 44.1719C337.353 42.9527 338.697 42.0175 340.342 41.3665C341.999 40.7036 343.917 40.3722 346.095 40.3722C347.61 40.3722 349.06 40.5497 350.445 40.9048C351.842 41.2599 353.079 41.8104 354.156 42.5561C355.245 43.3018 356.103 44.2607 356.731 45.4325C357.358 46.5926 357.672 47.9834 357.672 49.6051V68H350.498V64.218H350.285C349.847 65.0703 349.261 65.822 348.528 66.473C347.794 67.1122 346.912 67.6153 345.882 67.9822C344.852 68.3374 343.662 68.5149 342.313 68.5149ZM344.479 63.2947C345.592 63.2947 346.574 63.0758 347.427 62.6378C348.279 62.188 348.948 61.5843 349.433 60.8267C349.918 60.0691 350.161 59.2109 350.161 58.2521V55.358C349.924 55.5118 349.599 55.6539 349.184 55.7841C348.782 55.9025 348.326 56.0149 347.817 56.1214C347.308 56.2161 346.799 56.3049 346.29 56.3878C345.781 56.4588 345.32 56.5239 344.905 56.5831C344.018 56.7133 343.242 56.9205 342.579 57.2045C341.916 57.4886 341.402 57.8733 341.035 58.3587C340.668 58.8321 340.484 59.424 340.484 60.1342C340.484 61.1641 340.857 61.9512 341.603 62.4957C342.36 63.0284 343.319 63.2947 344.479 63.2947ZM394.981 42.0945C394.839 40.6622 394.229 39.5495 393.152 38.7564C392.075 37.9633 390.613 37.5668 388.766 37.5668C387.512 37.5668 386.452 37.7443 385.588 38.0994C384.724 38.4427 384.061 38.9221 383.599 39.5376C383.15 40.1532 382.925 40.8516 382.925 41.6328C382.901 42.2839 383.037 42.852 383.333 43.3374C383.641 43.8227 384.061 44.2429 384.594 44.598C385.126 44.9413 385.742 45.2431 386.44 45.5036C387.139 45.7521 387.884 45.9652 388.678 46.1428L391.945 46.924C393.531 47.2791 394.987 47.7526 396.312 48.3445C397.638 48.9363 398.786 49.6643 399.757 50.5284C400.728 51.3925 401.479 52.4105 402.012 53.5824C402.557 54.7543 402.835 56.0978 402.847 57.6129C402.835 59.8383 402.267 61.7678 401.142 63.4013C400.029 65.023 398.42 66.2836 396.312 67.1832C394.217 68.071 391.69 68.5149 388.731 68.5149C385.795 68.5149 383.238 68.0651 381.06 67.1655C378.894 66.2659 377.201 64.9342 375.982 63.1705C374.775 61.3949 374.142 59.1991 374.082 56.5831H381.522C381.605 57.8023 381.954 58.8203 382.57 59.6371C383.197 60.442 384.031 61.0516 385.073 61.4659C386.127 61.8684 387.316 62.0696 388.642 62.0696C389.944 62.0696 391.075 61.8802 392.033 61.5014C393.004 61.1226 393.756 60.5959 394.288 59.9212C394.821 59.2464 395.087 58.4711 395.087 57.5952C395.087 56.7784 394.845 56.0919 394.359 55.5355C393.886 54.9792 393.188 54.5057 392.264 54.1151C391.353 53.7244 390.234 53.3693 388.908 53.0497L384.949 52.0554C381.883 51.3097 379.462 50.1437 377.687 48.5575C375.911 46.9714 375.029 44.8348 375.041 42.1477C375.029 39.946 375.615 38.0225 376.799 36.3771C377.995 34.7318 379.634 33.4474 381.717 32.5241C383.801 31.6009 386.168 31.1392 388.82 31.1392C391.518 31.1392 393.874 31.6009 395.886 32.5241C397.911 33.4474 399.485 34.7318 400.609 36.3771C401.734 38.0225 402.314 39.9283 402.349 42.0945H394.981ZM422.382 40.7273V46.4091H405.958V40.7273H422.382ZM409.687 34.1932H417.251V59.6193C417.251 60.3177 417.357 60.8622 417.57 61.2528C417.784 61.6316 418.079 61.898 418.458 62.0518C418.849 62.2057 419.299 62.2827 419.808 62.2827C420.163 62.2827 420.518 62.2531 420.873 62.1939C421.228 62.1229 421.5 62.0696 421.69 62.0341L422.879 67.6626C422.501 67.781 421.968 67.9171 421.281 68.071C420.595 68.2367 419.76 68.3374 418.778 68.3729C416.955 68.4439 415.357 68.2012 413.984 67.6449C412.623 67.0885 411.563 66.2244 410.806 65.0526C410.048 63.8807 409.675 62.401 409.687 60.6136V34.1932ZM444.799 56.3878V40.7273H452.363V68H445.101V63.0462H444.817C444.201 64.6442 443.177 65.9285 441.745 66.8991C440.324 67.8698 438.59 68.3551 436.542 68.3551C434.72 68.3551 433.116 67.9408 431.731 67.1122C430.346 66.2836 429.263 65.1058 428.481 63.5788C427.712 62.0518 427.321 60.223 427.309 58.0923V40.7273H434.873V56.7429C434.885 58.3527 435.317 59.6252 436.17 60.5604C437.022 61.4955 438.164 61.9631 439.596 61.9631C440.508 61.9631 441.36 61.7559 442.153 61.3416C442.946 60.9155 443.586 60.2881 444.071 59.4595C444.568 58.6309 444.811 57.607 444.799 56.3878ZM468.463 68.4439C466.391 68.4439 464.515 67.9112 462.834 66.8459C461.165 65.7687 459.839 64.1884 458.857 62.1051C457.886 60.0099 457.401 57.4413 457.401 54.3991C457.401 51.2741 457.904 48.6759 458.91 46.6044C459.916 44.5211 461.254 42.9645 462.923 41.9347C464.604 40.893 466.444 40.3722 468.445 40.3722C469.972 40.3722 471.244 40.6326 472.262 41.1534C473.292 41.6624 474.121 42.3016 474.748 43.071C475.387 43.8286 475.873 44.5743 476.204 45.3082H476.435V31.6364H483.981V68H476.524V63.6321H476.204C475.849 64.3897 475.346 65.1413 474.695 65.8871C474.056 66.621 473.221 67.2306 472.191 67.7159C471.173 68.2012 469.931 68.4439 468.463 68.4439ZM470.86 62.4247C472.079 62.4247 473.109 62.0933 473.949 61.4304C474.801 60.7557 475.453 59.8146 475.902 58.6072C476.364 57.3999 476.595 55.9853 476.595 54.3636C476.595 52.742 476.37 51.3333 475.92 50.1378C475.47 48.9422 474.819 48.0189 473.967 47.3679C473.115 46.7169 472.079 46.3913 470.86 46.3913C469.617 46.3913 468.569 46.7287 467.717 47.4034C466.865 48.0781 466.22 49.0133 465.782 50.2088C465.344 51.4044 465.125 52.7893 465.125 54.3636C465.125 55.9498 465.344 57.3525 465.782 58.5717C466.231 59.7791 466.877 60.7261 467.717 61.4126C468.569 62.0874 469.617 62.4247 470.86 62.4247ZM490.2 68V40.7273H497.764V68H490.2ZM494 37.2116C492.875 37.2116 491.911 36.8388 491.106 36.093C490.313 35.3355 489.916 34.4299 489.916 33.3764C489.916 32.3348 490.313 31.4411 491.106 30.6953C491.911 29.9377 492.875 29.5589 494 29.5589C495.124 29.5589 496.083 29.9377 496.876 30.6953C497.681 31.4411 498.084 32.3348 498.084 33.3764C498.084 34.4299 497.681 35.3355 496.876 36.093C496.083 36.8388 495.124 37.2116 494 37.2116ZM516.146 68.5327C513.388 68.5327 511.002 67.9467 508.99 66.7749C506.99 65.5911 505.445 63.9458 504.356 61.8388C503.267 59.7199 502.722 57.2637 502.722 54.4702C502.722 51.6529 503.267 49.1908 504.356 47.0838C505.445 44.965 506.99 43.3196 508.99 42.1477C511.002 40.964 513.388 40.3722 516.146 40.3722C518.904 40.3722 521.283 40.964 523.283 42.1477C525.296 43.3196 526.846 44.965 527.935 47.0838C529.024 49.1908 529.569 51.6529 529.569 54.4702C529.569 57.2637 529.024 59.7199 527.935 61.8388C526.846 63.9458 525.296 65.5911 523.283 66.7749C521.283 67.9467 518.904 68.5327 516.146 68.5327ZM516.181 62.6733C517.436 62.6733 518.483 62.3182 519.324 61.608C520.164 60.8859 520.798 59.9034 521.224 58.6605C521.662 57.4176 521.881 56.0031 521.881 54.4169C521.881 52.8307 521.662 51.4162 521.224 50.1733C520.798 48.9304 520.164 47.9479 519.324 47.2259C518.483 46.5038 517.436 46.1428 516.181 46.1428C514.915 46.1428 513.849 46.5038 512.985 47.2259C512.133 47.9479 511.488 48.9304 511.05 50.1733C510.624 51.4162 510.411 52.8307 510.411 54.4169C510.411 56.0031 510.624 57.4176 511.05 58.6605C511.488 59.9034 512.133 60.8859 512.985 61.608C513.849 62.3182 514.915 62.6733 516.181 62.6733Z"
                      fill="white"
                    />
                    <g clip-path="url(#clip0_32_1083)">
                      <path
                        d="M50.4 0.499858C22.8 0.299858 0.29998 22.7999 0.49998 50.3999C0.69998 77.2999 22.7 99.1999 49.6 99.4999C77.3 99.6999 99.8 77.1999 99.5 49.5999C99.3 22.6999 77.3 0.699858 50.4 0.499858Z"
                        fill="white"
                      />
                      <path
                        d="M35.6001 25.8999C38.7001 29.7999 40.5001 34.6999 40.5001 40.0999C40.5001 44.6999 39.1001 48.9999 36.8001 52.5999H20.2001L35.6001 25.8999Z"
                        fill="black"
                      />
                      <path
                        d="M86.3001 58.4998C86.3001 58.6998 86.2001 58.8998 86.0001 58.9998C84.9001 59.4998 81.2001 61.1998 79.6001 63.3998C75.6001 68.8998 72.6001 77.6998 65.8001 77.6998H37.3001C27.2001 77.6998 18.8001 69.6998 18.9001 59.0998C18.9001 58.7998 19.1001 58.5998 19.4001 58.5998H32.8001C33.3001 58.5998 33.6001 58.9998 33.6001 59.3998V61.9998C33.6001 63.3998 34.7001 64.4998 36.1001 64.4998H46.3001V58.5998H39.3001C43.3001 53.4998 45.7001 47.0998 45.7001 40.0998C45.7001 32.2998 42.7001 25.1998 37.8001 19.8998C40.8001 20.1998 43.6001 20.7998 46.2001 21.5998V19.8998C46.2001 18.1998 47.6001 16.7998 49.3001 16.7998C51.0001 16.7998 52.4001 18.1998 52.4001 19.8998V23.8998C61.9001 28.2998 68.2001 35.6998 68.2001 44.0998C68.2001 48.9998 66.1001 53.5998 62.4001 57.3998C61.7001 58.0998 60.7001 58.4998 59.7001 58.4998H52.5001V64.3998H61.5001C63.4001 64.3998 66.9001 60.6998 68.6001 58.4998C68.6001 58.4998 68.7001 58.3998 68.9001 58.2998C69.1001 58.1998 85.5001 54.4998 85.5001 54.4998C85.8001 54.3998 86.2001 54.6998 86.2001 54.9998L86.3001 58.4998Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_32_1083">
                        <rect width="100" height="100" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="HeaderStudio-main-box">
                <div class="outline" aria-expanded="false">
                  <div className="eth-and-weth">
                    <Button>
                      <Typography variant="h6" component="h2">
                        <WalletOutlinedIcon /> 0ETH
                      </Typography>
                      <Typography variant="h6" component="h2">
                        |
                      </Typography>
                      <Typography variant="h6" component="h2">
                        0WETH
                      </Typography>
                    </Button>
                  </div>
                </div>

                <div className="HeaderStudio-main">
                  <div className="HeaderStudio-button-blue"></div>
                </div>
                <div className="HeaderStudio-button">
                  <Button variant="contained">Create</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </AppBar>
      </Box>
    </div>
  );
}

export default HeaderStudio