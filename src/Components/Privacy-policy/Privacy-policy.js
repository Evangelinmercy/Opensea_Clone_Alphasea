import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Privacy-policy.css'
import togglebtn from '../../img/togglebtn.png'
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles({
    footercls: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
        padding: '0px !important',
        '@media (max-width: 991.98px)' : {
            padding: '30px 0 !important',
          }
    },
    headercls: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
    },

    bodyclass: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
    },
  });

const Terms = () => {
     
 const classes = useStyles();

  return (
    <div className='privacy-policy-page'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.headercls}>
        <Header />
    </Item>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.bodyclass}>
    <div className='privacy-policy-body'>
        <Typography variant='h1'>Privacy Policy</Typography>
            <p>Last Updated: April 4, 2023</p>
            <p>Ozone Networks, Inc. d/b/a OpenSea ("OpenSea," "we", "us", or "our") is committed to protecting your privacy. We have prepared this Privacy Policy to describe to you our practices regarding the information we collect, use, and share in connection with the OpenSea and OpenSea Pro websites, mobile apps, and other services we provide to you (collectively, the "Service").</p>
            <p>Types of Information We Collect. We collect information about our users, which may be identifiable, pseudonymous, or anonymous (including aggregated and de-identified data), as described below.</p>
            <div>
                <ol>
                    <li>
                    <strong>Information You Provide Us.</strong>

                 
                    <p><strong>Account Information.</strong>When you use our Service, you can add information to your account. We collect information and other data you add to your account, such as email address, username, linked social media accounts, favorited items and watchlisted collections, and other information you provide. Your Account Information (other than your email address) will be publicly visible. Remember public content can exist elsewhere on the internet even after you remove it from your account on OpenSea.</p>
                    
                    <p><strong>Preferences. </strong>Our Service lets you store preferences like how your content is displayed, notification settings, and favorites. We may associate these choices with your account, browser, and/or mobile device.</p>
                    
                    <p><strong>Feedback. </strong>If you provide us with feedback or contact us, we may receive your name and contact information (such as an email address), as well as any other content included in or associated with the message you send.</p>
                    
                    <p><strong>Other Information.</strong>We also collect information and other data at other points in our Service where you voluntarily provide it or where we state that your information is being collected.
                    Additionally, like much of web3, your blockchain wallet address functions as your identity on OpenSea. Accordingly, you will need a blockchain wallet address and a third-party wallet to access certain aspects of the Service. We do not consider a blockchain wallet address, standing alone, to be information that identifies you. However, a blockchain wallet address may become associated with you or information you provide when you use our Service.</p>
                    
                    <li>
                        <p>Information Collected Automatically. As you navigate through and interact with our Service, we may use automatic data collection technologies to collect certain information, including:</p>

                        <p><strong>Interactions with our Service.</strong>To provide our Service, analyze trends, enforce our Terms of Service, and make the Service more useful to you, we collect information (typically Anonymous Data) from you when you interact with our Service, including, but not limited to, your browser type or fingerprint, operating system, IP address and associated geolocation, device ID, blockchain wallet address, wallet type, actions and clickstream data, referring/exit pages, and date/time stamps. We may also store this data in log files.</p>

                        <p><strong>Cookies or Other Tracking Technologies.</strong>Like many online services, we use cookies to collect information. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them) to analyze how users interact with our Service, make improvements to our product quality, and provide users with a more personalized experience. In addition, we use "Pixel Tags" (also referred to as clear Gifs, Web beacons, or Web bugs). Pixel Tags allow us to analyze how users find our Service, make the Service more useful to you, and tailor your experience with us to meet your particular interests and needs.</p>

                        <p><strong>Do Not Track.</strong>As there is no common understanding about what a "Do Not Track" signal is supposed to mean, we don’t respond to those signals in any particular way. See further information below regarding how you may be able to withdraw your consent for the use of certain tracking technologies like cookies and pixel tags. You may also contact us here.</p>

                        <p>We engage with third-party services ("Third Party Services"), including Google and Amplitude, to help collect some of the information referred to above. These Third Party Services, acting on our behalf, may collect information about your use of our Service through their own cookies, Pixel Tags, or other technologies ("Analytics Information"). The Third Party Services’ ability to use and share Analytics Information is restricted by such Third Party Services’ terms of use and privacy policy.</p>
                    </li>

                    <li>
                        <p>Information Collected from Third-Party Companies. We may receive information about you or related to you or your wallet address from service providers and other sources/companies that offer their products and/or services to us or to you, for use in conjunction with our Service, or whose products and/or services may be linked from our Service. We may add this to the data we have already collected from or about you through our Service. This information may include, for example:<br></br>
                        third-party wallet providers that provide us with your blockchain wallet address and certain other information you choose to share with those wallet providers;<br></br>
                        data analytics providers or vendors who provide us information related to certain blockchain wallet addresses;<br></br>
                        vendors who provide communication and identity verification services to us and which you choose to use; and <br></br>
                        other vendors who provide us information necessary to run our business or enforce our Terms of Service.</p>
                    </li>

                    <li>
                        <p>Public Information. We collect data from activity and information that is publicly visible and/or accessible on blockchains or other public sources. This may include, for example, blockchain wallet addresses and information regarding purchases, sales, or transfers of NFTs, which may then be associated with other data you have provided to us.</p>
                    </li>
                    
                    <li>
                        <p>Use of Your Information. <br></br>
                      We process information about and/or related to you to run our business, provide the Service, personalize your experience on the Service, and improve the Service. Specifically, we use your information to:<br></br>
                        provide, operate and maintain the Service;<br></br>
                        improve and analyze the Service;<br></br>
                       analyze, improve, and personalize your use and experience on the Service, including by making recommendations to you;<br></br>
                       communicate with you;<br></br>
                       investigate, address, and prevent conduct that may violate our Terms of Service and/or that is otherwise harmful or unlawful;<br></br>
                        send you newsletters, promotional materials, and other notices related to our Service or third parties’ goods and services;<br></br>
                       comply with applicable laws, cooperate with investigations by law enforcement or other authorities of suspected violations of law, and/or to protect our and our Affiliates’ legal rights; and<br></br>
                        act in any other way which we have communicated to you and to which you have consented or we may describe when you provide your information.
                        </p>
                    </li>

                    <li>
                        <p>We may create anonymized records from identifiable information. We use this data for the same purposes as outlined above, including to improve our Service. We reserve the right to use and/or disclose anonymized information for any purpose.</p>
                    </li>

                    <li>
                        <p>Disclosure of Your Information. We disclose your information and information about you as described below: <br></br>
                        Third Party Service Providers. We may share your information and information about you with third party service providers to: provide technical infrastructure services; conduct quality assurance testing; analyze how our Service is used; prevent, detect, and respond to unauthorized activities or potential violations of our Terms of Service or policies; provide technical and customer support; and/or to provide other support to you, us, and/or to the Service.
                        </p>
                    </li>
                    <br></br>
                    <li>Affiliates. We may share some or all of your information and information about you with any subsidiaries, joint ventures, or other companies or products under our common control ("Affiliates"), in which case we will require our Affiliates to honor this Privacy Policy.</li>
                    <br></br>
                    <li>Information Related to Your Public Activity. We may display or share information relating to your public activity on blockchains, OpenSea, and/or OpenSea Pro. For example, we use technology like APIs to make certain information like your blockchain activity available to websites, apps, and others for their use.</li>
                    <br></br>
                    <li>
                        Corporate Restructuring. We may share some or all of your information and information about you in connection with or during negotiation of any merger, financing, acquisition, or dissolution transaction or proceeding involving a sale, transfer, or divestiture of all or a portion of our business or assets. In the event of an insolvency, bankruptcy, or receivership, your information and information about you may also be transferred as a business asset. If another company acquires our company, business, or assets, that company will possess the information collected by us and will assume the rights and obligations regarding your information and information about you as described in this Privacy Policy.</li>

                        <br></br>

                        <li>Legal Rights. Regardless of any choices you make regarding your information (as described below), OpenSea may disclose your information and information about you if it believes in good faith that such disclosure is necessary: (a) in connection with any legal investigation; (b) to comply with relevant laws or to respond to subpoenas, warrants, or other legal process served on OpenSea; (c) to protect or defend the rights or property of OpenSea or users of the Service; and/or (d) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy, or our Terms of Service.</li>
                        <li>Other Disclosures. We may also disclose your information and information about you: to fulfill the purpose for which you provide it, including to provide you with our Service and new features; for any other purpose disclosed by us when you provide it; or with your consent.</li>
                        <br></br>

                        <li>
                        Third-Party Websites. Our Service may contain links to third-party websites. When you click on a link to any other website or location, you will leave our Service and go to another site, and another entity may collect information from you. We have no control over and cannot be responsible for these third-party websites or their content. Please be aware that this Privacy Policy does not apply to these third-party websites or their content, or to any collection of your information or information about you after you click on links to such third-party websites. We encourage you to read the privacy policies of every website you visit. Any links to third-party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content, or websites.
                        </li>
                        <br></br>

                        <li>Third-Party Wallets. To use certain aspects of our Service, you must use a third-party wallet which allows you to engage in transactions on public blockchains. Your interactions with any third-party wallet provider are governed by the applicable terms of service and privacy policy of that third party.</li>
                        <br></br>
                        <li>Your Choices Regarding Information. You have choices regarding the use of information on our Service:</li>
                        <li>Email Communications. We may periodically send you newsletters and/or emails that directly promote the use of our Service or third parties’ goods and services. When you receive email communications from us, you may indicate a preference to stop receiving these communications from us by following the unsubscribe instructions provided in the email you receive or through the Notifications preferences in your Settings page. Despite these preferences, we may send you occasional transactional service-related informational communications.</li>
                        <br></br>

                        <li>Cookies. If you decide at any time that you no longer wish to accept cookies from our Service for any of the purposes described above, you can change your browser settings to stop accepting cookies or to prompt you before accepting a cookie from the websites you visit. Consult your browser’s technical information to learn more. If you do not accept cookies, however, you may not be able to use all portions of the Service or all functionality of the Service.</li>
                        <br></br>

                        <li>Data Access and Control. You can view, access, edit, or delete your information and information about you for certain aspects of the Service via your Settings page. Depending on applicable law where you reside, you may be able to assert certain rights related to your information and information about you. If such rights are not provided under law for your operating entity or jurisdiction, OpenSea has full discretion in fulfilling your request.</li>
                        <li>If you are a user in the European Economic Area ("EEA"), United Kingdom ("UK") or Switzerland, you have certain rights under applicable law. These include the right to (i) request access and obtain a copy of your personal information; (ii) request rectification or erasure of your personal information; (iii) object to or restrict the processing of your personal information; and (iv) request portability of your personal information. Additionally, if we have collected and processed your personal information with your consent, you have the right to withdraw your consent at any time.</li>
                        <br></br>
                        <li>If you are a California resident, you have certain rights under the California Privacy Rights Act ("CPRA"). These include the right to (i) request access to, details regarding, and a copy of the personal information we have collected about you and/or shared with third parties; (ii) request deletion of the personal information that we have collected about you; and (iii) the right to opt-out of sale of your personal information. As the terms are defined under the CPRA, we do not "sell" your "personal information."</li>
                        <br></br>

                        <li>If you wish to exercise your rights under an applicable data protection or privacy law, please contact us by using the “Submit a request” link <Link>here</Link> or at the address provided in Section 15 below, specify your request, and reference the applicable law. We may ask you to verify your identity, or ask for more information about your request. We will consider and act upon any above request in accordance with applicable law. We will not discriminate against you for exercising any of these rights.</li>
                        <br></br>
                        <li>If you believe that we have infringed your rights, we encourage you to first contact us by using the “Submit a request” link <Link>here</Link> so that we can try to resolve the issue or dispute informally.</li>
                        <br></br>
                        <li>If you believe that we have infringed your rights, we encourage you to first contact us by using the “Submit a request” link <Link>here</Link> so that we can try to resolve the issue or dispute informally.</li>
                        <br></br>
                        <li>Data Retention. We may continue to retain your information or information about you even after you request deletion of your data if such retention is reasonably necessary to comply with our legal obligations, to resolve disputes, prevent fraud and abuse, enforce our Terms or other agreements, and/or protect our legal rights and other interests.</li>
                        <br></br>
                        <li>Security. We care about the security of your information and use physical, administrative, and technological safeguards to preserve the integrity and security of information collected through our Service. However, no security system is impenetrable and we cannot guarantee the security of our systems, or those of our vendors. In the event that any information under our custody and control is compromised as a result of a breach of our security, we will take steps to investigate and remediate the situation and, in accordance with applicable laws and regulations, may notify those individuals whose information may have been compromised.</li>
                        <br></br>
                        <li>You are responsible for the security of your digital wallet, and we urge you to take steps to ensure it is and remains secure. If you discover an issue related to your wallet, please contact your wallet provider.</li>
                        <br></br>
                        <li>Minors. We do not intentionally gather information from visitors who are under the age of 13. Our Terms of Service require all users to be at least 18 years old. Minors who are at least 13 years old but are under 18 years old may use a parent or guardian’s account, but only with the supervision of the account holder. If a child under 13 submits identifiable information to us and we learn that the identifiable information is the information of a child under 13, we will attempt to delete the information as soon as possible. If you believe that we might have any identifiable information from a child under 13, please contact us by using the “Submit a request” link here or at the address indicated in Section 15 below.</li>
                        <br></br>
                        <li>Users Outside of the United States. If you are a non-U.S. user of the Service, by visiting the Service and providing us with information directly or indirectly, you understand and acknowledge that your information and information about you may be processed in the country in which it was collected and in other countries, including the United States, where laws regarding processing of your information or information about you may be less stringent than the laws in your country.</li>
                        <br></br>
                        <li>
                        For users in <i>EEA, UK and Switzerland</i> <br></br>
                        Legal Bases for Processing Personal Data. When you access or use the Service, we collect, use, share, and otherwise process your personal data for the purposes described in this Privacy Policy. <br></br> We rely on a number of legal bases to use your information in these ways. <br></br>
                        We process your personal data with your consent, for example, to:communicate with you; send you marketing emails and/or notifications; and for any other purpose that we communicate to you and to which you have consented. <br></br>
                        We process your personal data in order to fulfill our contract with you and to provide you with our Service, for example, to: provide, operate and maintain the Service; and investigate, address, and prevent conduct that may violate our Terms of Service. <br></br>
                        We process your personal data pursuant to legitimate interests, for example, to: improve and analyze the Service; and personalize your experience on the Service. <br></br>
                        We process your personal data in order to comply with legal obligations, in the public interest, or in your vital interests, for example, to:<br></br>detect, prevent, and address activities that we consider could be fraudulent, violations of our Terms of Service or policies, and/or otherwise harmful or unlawful.
                        </li>
                        <br></br>
                        <li>We will use appropriate safeguards for transferring your personal data out of the EEA, UK and Switzerland where required and only transfer such personal data under a legally valid transfer mechanism.</li>
                        <br></br>
                        <li>Changes to This Privacy Policy. This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy at <Link>https://opensea.io/privacy</Link>. The date the Privacy Policy was last revised is identified at the beginning of this Privacy Policy. You are responsible for periodically visiting our Service and this Privacy Policy to check for any changes.</li>

                        <li>California Privacy Rights Disclosure. <br></br>
                        The categories of personal information we collect about users, as described above in Section 1, include: (1) identifiers, (2) commercial information, (3) internet or online identifiers, (4) geolocation data, and (5) information derived from other personal information about you. <br></br>
                        The categories of sources from which the personal information is collected are described above in Section 1. <br></br>
                        The business or commercial purpose for collecting personal information are described above in Sections 2 and 3. <br></br>
                        The categories of personal information we share with third parties, as described above in Section 3, include: (1) identifiers, (2) commercial information, (3) internet or online identifiers, (4) geolocation data, and (5) information derived from other personal information about you.</li>
                        <br></br>
                        <li>Questions; Contacting Us; Reporting Violations. If you have any questions or concerns or complaints about our Privacy Policy or our data collection or processing practices, or if you want to report any security violations to us, please contact us by using the “Submit a request” link <Link>here</Link> or at the following address: 228 Park Avenue South, #22014, New York, NY 10003.</li>

                    </li>

                  
                    <br></br>
                </ol>
            </div>
    </div>
    </Item>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.footercls}>
      <Footer />
    </Item>
    </Grid>
    </Grid>
    </Box>
    </div>
  )
}

export default Terms
