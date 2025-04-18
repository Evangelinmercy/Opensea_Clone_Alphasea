import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Terms-condition.css'
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
    <div className='Terms-condition-page'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.headercls}>
        <Header />
    </Item>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.bodyclass}>
    <div className='Terms-condition-body'>
        <Typography variant='h1'>Terms Of Service</Typography>
            <p><strong>Last Updated: April 4, 2023</strong></p>
            <div>
                <ol>
                    <li>
                    <strong>Introduction</strong>

                    <p>Welcome to OpenSea, owned and operated by Ozone Networks, Inc. d/b/a OpenSea (“OpenSea,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the OpenSea website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.

                    For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>
                    <p><strong>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.
                        BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</strong></p>
                    <p>OpenSea is not a wallet provider, exchange, broker, dealer, financial institution, payments processor, money services business, or creditor. OpenSea provides a peer-to-peer web3 service that helps users discover and directly interact with each other and NFTs available on public blockchains. We do not have custody or control over the NFTs or blockchains you are interacting with and we do not execute or effectuate purchases, transfers, or sales of NFTs. To use our Service, you must use a third-party wallet which allows you to engage in transactions on blockchains.
                    OpenSea is not party to any agreement between any users. You bear full responsibility for verifying the identity, legitimacy, and authenticity of NFTs that you purchase from third-party sellers using the Service and we make no claims, guarantees, or recommendations about the identity, legitimacy, functionality, or authenticity of users or NFTs (and any content associated with such NFTs) visible on the Service.</p>
                    <p>Because we have a growing number of services, we sometimes need to provide additional terms for specific services (and such services are deemed part of the “Service” hereunder and shall also be subject to these Terms). Those additional terms and conditions, which are available with the relevant service, then become part of your agreement with us if you use those services. In the event of a conflict between these Terms and any additional applicable terms we may provide for a specific service, such additional terms shall control for that specific service.
                    OpenSea reserves the right to change or modify these Terms at any time and in our sole discretion. If we make material changes to these Terms, we will use reasonable efforts to provide notice of such changes, such as by providing notice through the Service or updating the “Last Updated” date at the beginning of these Terms. By continuing to access or use the Service, you confirm your acceptance of the revised Terms and all of the terms incorporated therein by reference effective as of the date these Terms are updated. It is your sole responsibility to review the Terms from time to time to view such changes and to ensure that you understand the terms and conditions that apply when you access or use the Service.</p>
                    </li>

                    <li>
                        <p><strong>Accessing the Service</strong></p>
                        <p>Like much of web3, your blockchain address functions as your identity on OpenSea. Accordingly, you will need a blockchain address and a third-party wallet to access the Service. Your account on the Service (“Account”) will be associated with your blockchain address; however, if you want to add some flair to your OpenSea persona, you can add additional information, such as a profile picture, to your Account.</p>
                        <p>Your Account on OpenSea will be associated with your linked blockchain address and display the NFTs for that blockchain address (and, if applicable, any content associated with such NFTs). By using your wallet in connection with the Service, you agree that you are using that wallet under the terms and conditions of the applicable provider of the wallet. Wallets are not operated by, maintained by, or affiliated with OpenSea, and OpenSea does not have custody or control over the contents of your wallet and has no ability to retrieve or transfer its contents. OpenSea accepts no responsibility for, or liability to you, in connection with your use of a wallet and makes no representations or warranties regarding how the Service will operate with any specific wallet. You are solely responsible for keeping your wallet secure and you should never share your wallet credentials or seed phrase with anyone. If you discover an issue related to your wallet, please contact your wallet provider. Likewise, you are solely responsible for your Account and any associated wallet and we are not liable for any acts or omissions by you in connection with your Account or as a result of your Account or wallet being compromised. You agree to immediately notify us if you discover or otherwise suspect any security issues related to the Service or your Account (you can contact us <Link>here</Link>).</p>
                        
                        <p>You also represent and warrant that you will comply with all applicable laws (e.g., local, state, federal and other laws)in connection with using the Service. In order to comply with our legal obligations and keep our users and platform safe, we may need to restrict, suspend, or terminate your access to the Service. You acknowledge that OpenSea is under no obligation to disclose the details of its decision to take such action with you.</p>

                        <p>Without limiting the foregoing, by using the Service, you represent and warrant that: (a) you are not located in, ordinarily resident in, or organized under the laws of any jurisdiction that is subject to a comprehensive U.S. Government embargo ("Embargoed Jurisdiction"); (b) you are not subject to any sanctions administered by an agency of the U.S. Government, any other government, or the United Nations (collectively, “Sanctions”); (c) you are not owned or controlled, directly or indirectly, by any person that is subject to Sanctions, or that is located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction; (d) none of your officers, managers, directors, shareholders or authorized representatives is subject to Sanctions, or is located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction, or is owned or controlled, directly or indirectly, by any person that is subject to Sanctions or that is located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction; (e) you have not transacted and will not transact with any person or entity falling into any of (a)-(d); (f) you have not transacted and will not transact for the benefit of any person or entity falling into any of (a)-(d). You further covenant that the foregoing shall be true during the entire period of this agreement. If you access or use the Service outside the United States, you are solely responsible for ensuring that your access and use of the Service in such country, territory or jurisdiction does not violate any applicable laws.</p>

                        <p>OpenSea may require you to provide additional information and documents in certain circumstances, such as at the request of any government authority, as any applicable law or regulation dictates, to provide you with a requested service, or to investigate a potential violation of these Terms. In such cases, OpenSea, in its sole discretion, may disable your Account and block your ability to access the Service until such additional information and documents are processed by OpenSea. If you do not provide complete and accurate information in response to such a request, OpenSea may refuse to restore your access to the Service.</p> 

                        <p>Your access and use of the Service may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance, or repair of the Service, geographic restrictions, potential violation of these Terms, or other actions that OpenSea, in its sole discretion, may elect to take. You understand that OpenSea, in its sole discretion, may disable your Account and/or reassign your username or associated url. </p>

                        <p>We require all users to be at least 18 years old. If you are at least 13 years old but under 18 years old, you may only use OpenSea through a parent or guardian’s Account and with their approval and oversight. That account holder is responsible for your actions using the Account. It is prohibited to use our Service if you are under 13 years old.</p>                   
                        </li>

                        <li>
                            <p><strong>Ownership</strong></p>
                            
                            <p>The Service, including its “look and feel” (e.g., text, graphics, images, logos, page headers, button icons, urls, and scripts), proprietary content, information and other materials, and all content and other materials contained therein, including, without limitation, the OpenSea logo and all designs, text, graphics, pictures, data, software, sound files, other files, and the selection and arrangement thereof are the proprietary property of OpenSea or our affiliates, licensors, or users, as applicable, and you agree not to take any action(s) inconsistent with such ownership interests. We and our affiliates, licensors, and users, as applicable, reserve all rights in connection with the Service and its content, including, without limitation, the exclusive right to create derivative works.</p>

                            <p>OpenSea’s name, logo, trademarks, and any OpenSea product or service names, designs, logos, and slogans are the intellectual property of OpenSea or our affiliates or licensors and may not be copied, imitated or used, in whole or in part, without our prior written permission in each instance. You may not use any metatags or other “hidden text” utilizing “OpenSea” or any other name, trademark or product or service name of OpenSea or our affiliates or licensors without our prior written permission. In addition, the “look and feel” of the Service constitutes the service mark, trademark or trade dress of OpenSea and may not be copied, imitated or used, in whole or in part, without our prior written permission.</p>

                            <p>All other third-party trademarks, registered trademarks, and product names mentioned on the Service or contained in the content linked to or associated with any NFTs displayed on the Service are the property of their respective owners and may not be copied, imitated or used, in whole or in part, without the permission of the applicable intellectual property rights holder. Reference to any products, services, processes or other information by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship, or recommendation by OpenSea.</p>

                            <p>We welcome feedback, comments, and suggestions for improvements to the Service (“Feedback”). You acknowledge and expressly agree that any contribution of Feedback does not and will not give or grant you any right, title, or interest in the Service or in any such Feedback. You agree that OpenSea may use and disclose Feedback in any manner and for any purpose whatsoever without further notice or compensation to you and without retention by you of any proprietary or other right or claim. You hereby assign to OpenSea any and all right, title, and interest (including, but not limited to, any patent, copyright, trade secret, trademark, show-how, know-how, moral rights and any and all other intellectual property right) that you may have in and to any and all Feedback.</p>

                            <p>OpenSea does not have ownership, custody, or control of NFTs or the smart contracts deployed by third parties. Creators of these NFTs or smart contracts are solely responsible for their operation and functionality.</p>
                        </li>

                        <li>
                            <p><strong>License to Access and Use Our Service and Content</strong></p>

                            <p>You are hereby granted a limited, nonexclusive, nontransferable, nonsublicensable, and personal license to access and use the Service provided, however, that such license is subject to your compliance with these Terms. If any software, content, or other materials owned by, controlled by, or licensed to us are distributed or made available to you as part of your use of the Service, we hereby grant you a non-commercial, personal, non-assignable, non-sublicensable, non-transferrable, and non-exclusive right and license to access and display such software, content, and materials provided to you as part of the Service (and right to download a single copy of the App onto your applicable equipment or device), in each case for the sole purpose of enabling you to use the Service as permitted by these Terms, provided that your license in any content linked to or associated with any NFTs is solely as set forth by the applicable seller or creator of such NFT.</p>
                        </li>

                        <li>
                            <p><strong>Third-Party Content, Agreements, and Services</strong></p>

                            <p>As a peer-to-peer web3 service, OpenSea helps you explore NFTs created by third parties and interact with different blockchains. OpenSea does not make any representations or warranties about this third-party content visible through our Service, including any content associated with NFTs displayed on the Service, and you bear responsibility for verifying the legitimacy, authenticity, and legality of NFTs that you purchase from third-party sellers. We also cannot guarantee that any NFTs visible on OpenSea will always remain visible and/or available to be bought, sold, or transferred. Users are solely responsible for any content related to their NFTs.</p>

                            <p>These Terms solely govern the use of our Service. NFTs are available on public blockchains, are purchased, sold, or transferred between a buyer, seller and/or creator directly, and may be purchased, sold, or transferred by buyers, sellers, and/or creators without the use of our Service and therefore without agreeing to our Terms. There may be terms and conditions that apply to the NFTs' themselves set directly between buyers, sellers, and/or creators with respect to the NFT including with respect to the use of the NFT content and rights and obligations associated with a given NFT ("NFT Terms"). For example, when you click to get more details about any of the NFTs or NFT collections visible on OpenSea or view the NFT metadata, you may notice a third-party link to NFT Terms governing the use of the NFT that you will be required to comply with. OpenSea does not set the NFT Terms and is not party to any such NFT Terms, which are solely between the buyer, seller, and/or creator. The buyer, seller, and/or creator are entirely responsible for communicating, promulgating, agreeing to, and enforcing NFT Terms. You are responsible for reviewing such NFT Terms.</p>

                            <p>Sellers are solely responsible for determining and establishing the price of an NFT, inclusive of any applicable tax. Additionally, to the extent applicable, they are solely responsible for any mint count and minting mechanics for NFTs they sell.</p>

                            <p>For its Service, OpenSea may receive certain fees. OpenSea does not set, collect, or determine other applicable costs, fees, and expenses associated with buying and selling an NFT, including but not limited to any creator earnings, gas, or transaction fees. These costs, fees, and expenses are paid directly to the seller, creator, payment processor, blockchain validator, or other third party, as applicable. Because these costs, fees, and expenses are not collected by OpenSea, it cannot refund them.</p>

                            <p>The Service may also contain links or functionality to access or use third-party websites (“Third-Party Websites”) and applications (“Third-Party Applications”), or otherwise display, include, or make available content, data, information, services, applications, or materials from third parties (“Third-Party Materials”). When you click on a link to, or access and use, a Third-Party Website or Third-Party Application, though we may not warn you that you have left our Service, you are subject to the terms and conditions (including privacy policies) of another website or destination. Such Third-Party Websites, Third-Party Applications, and Third-Party Materials are not under the control of OpenSea, and may be “open” applications for which no recourse is possible.</p>

                            <p>OpenSea is not responsible or liable for any Third-Party Websites, Third-Party Applications, and Third-Party Materials. OpenSea provides links to these Third-Party Websites and Third-Party Applications only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites or Third-Party Applications, or their products or services or associated Third-Party Materials. You use all links in Third-Party Websites, Third-Party Applications, and Third-Party Materials at your own risk.</p>
                        </li>

                        <li>
                            <p><strong>User Conduct</strong></p>

                            <p>Openness is one of our most prized values, and we’re committed to providing people from all walks of life and varying experience levels with web3 with a colorful lens into different blockchains. However, to protect our community and comply with our legal obligations, we reserve the right to take action, with or without advance notice, if we believe in our sole discretion that you have violated these Terms or that you may use our Service for unlawful activity. This may include: removing or limiting the ability to view or interact with certain NFTs; disabling or restricting the ability to use the Service (or certain aspects of the Service); and/or other actions.</p>
                            <p>You agree that you will not violate any law, contract, intellectual property or other third-party right, and that you are solely responsible for your conduct and content, in connection with using the Service. You also agree that you will not:</p>

                            <ul className='terms-unoredered-list'>
                                <li>Use or attempt to use another user’s Account without authorization from such user;</li>
                                <li>Pose as another person or entity, or use a wallet to engage in a transaction on OpenSea that is owned or controlled, in whole or in part, by any other person;</li>
                                <li>Claim an OpenSea username for the purpose of reselling it, confusing others, deriving others’ goodwill, or otherwise engage in name squatting;</li>
                                <li>Access the Service from a different blockchain address if we’ve blocked any of your other blockchain addresses from accessing the Service, unless you have our written permission first;</li>
                                <li>Distribute spam, including through sending unwanted NFTs to other users;</li>
                                <li>Use the Service – including through disseminating any software or interacting with any API – that could damage, disable, overburden, or impair the functioning of the Service in any manner;</li>
                                <li>Bypass or ignore instructions that control access to the Service, including attempting to circumvent any rate limiting systems, directing traffic through multiple IP addresses, or otherwise obfuscating the source of traffic you send to OpenSea;</li>
                                <li>Use our Service, including our APIs, in any way that conflicts with our developer policies;</li>
                                <li>Use our Service for commercial purposes inconsistent with these Terms or any other instructions;</li>
                                <li>Use any data mining, robot, spider, crawler, scraper, script, browser extension, offline reader, or other automated means or interface not authorized by us to access the Service, extract data, or otherwise interfere with or modify the rendering of Service pages or functionality;</li>
                                <li>Reverse engineer, duplicate, decompile, disassemble, or decode any aspect of the Service, or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any service, area, or code of the Service;</li>
                                <li>Sell or resell the Service or attempt to circumvent any OpenSea fee systems;</li>
                                <li>Engage in behaviors that have the intention or the effect of artificially causing an item or collection to appear in a certain area on OpenSea’s site or at the top of search results, or artificially increasing view counts, favorites, or other metrics that OpenSea might use to surface or sort items, collections, or search results;</li>
                                <li>Use the Service or data collected from our Service for any advertising or direct marketing activity (including without limitation, email marketing, SMS marketing, and telemarketing);</li>
                                <li>Use the Service, directly or indirectly, for or in connection with money laundering, terrorist financing, or other illicit financial activity, or in any way in connection with the violation of any law or regulation that applies to you or to OpenSea;</li>
                                <li>Use the Service, directly or indirectly, for, on behalf of, for the benefit of, or in connection with (a) any natural or legal person that is the subject of Sanctions; (b) any natural or legal person located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction; or (c) any legal person owned or controlled, directly or indirectly, by any natural or legal person located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction.</li>
                                <li>Use the Service to carry out any financial activities subject to registration or licensing, including but not limited to creating, offering, selling, or buying securities, commodities, options, or debt instruments;</li>
                                <li>Use the Service to create, sell, or buy NFTs or other items that give owners rights to participate in an ICO or any securities offering, or that are redeemable for securities, commodities, or other financial instruments;</li>
                                <li>Use the Service to engage in price manipulation, fraud, or other deceptive, misleading, or manipulative activity;</li>
                                <li>Use the Service to buy, sell, or transfer stolen items, fraudulently obtained items, items taken without authorization, and/or any other illegally obtained items;</li>
                                <li>Infringe or violate the intellectual property rights or any other rights of others;</li>
                                <li>Create, display, purchase, or sell illegal content, such as content that may involve child sexual exploitation;</li>
                                <li>Create or display NFTs or other items that promote suicide or self-harm, incite hate or violence against others, or dox another individual;</li>
                                <li>Use the Service for any illegal or unauthorized purpose, including creating or displaying illegal content, such as content that may involve child sexual exploitation, or encouraging or promoting any activity that violates the Terms of Service;</li>
                                <li>Use the Service with the proceeds of unlawful activity or with a wallet used to engage in unlawful activity;</li>
                                <li>Use the Service in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying the Service.</li>
                            </ul>

                            <p>We allow users to post "not safe for work" ("NSFW") content, but that content and other associated material is subject to being marked NSFW and may be handled differently than non-NSFW content in navigation menus and search results.</p>

                            <p>Finally, by using the Service, you understand the importance of DYOR – doing your own research. You bear full responsibility for verifying the authenticity, legitimacy, identity, and other details about any NFT, collection, or account that you view or otherwise interact with in conjunction with our Service. We make no claims, guarantees or recommendations about the identity, legitimacy, or authenticity of any NFT, collection, or account on the Service.</p>
                        </li>

                        <li>
                            <p><strong>Intellectual Property Rights</strong></p>
                            <p>You are solely responsible for your use of the Service and for any information you provide, including compliance with applicable laws, rules, and regulations, as well as these Terms, including the User Conduct requirements outlined above.</p>
                            <p>By using the Service in conjunction with creating, submitting, posting, promoting, or displaying content, or by complying with OpenSea’s metadata standards in your metadata API responses, you grant us a worldwide, non-exclusive, sublicensable, royalty-free license to use, copy, modify, and display any content, including but not limited to text, materials, images, files, communications, comments, feedback, suggestions, ideas, concepts, questions, data, or otherwise, that you submit or post on or through the Service for our current and future business purposes, including to provide, promote, and improve the Service. This includes any digital file, art, or other material linked to or associated with any NFTs that are displayed on the Service.</p>

                            <p>OpenSea does not claim that submitting, posting, or displaying this content on or through the Service gives OpenSea any ownership of the content. We're not saying we own it. We're just saying we might use it and show it off a bit.</p>

                            <p>You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any content that you create, submit, post, promote, or display on or through the Service.</p>

                            <p>ou are solely responsible for the content and metadata associated with NFTs and digital items you create. You represent and warrant that such content does not contain material subject to copyright, trademark, publicity rights, or other intellectual property rights, unless you have necessary permission or are otherwise legally entitled to post the material and to grant OpenSea the license described above, and that the content does not violate any laws.</p>

                            <p>OpenSea will take down works in response to Digital Millennium Copyright Act (“DMCA”) takedown notices and/or other intellectual property infringement claims and will terminate a user's access to the Service if the user is determined to be a repeat infringer. If you believe that your content has been copied in a way that constitutes copyright or trademark infringement, or violates your publicity or other intellectual property rights, please fill out our form <Link>here</Link> or you may submit written notice to our designated copyright agent at:</p>

                            <div className='address-info'>
                                <p>
                                Ozone Networks, Inc.<br></br>
                                Attn: Legal Department<br></br>
                                228 Park Ave South # 22014<br></br>
                                New York, NY 10003<br></br>
                                Email: copyright@opensea.io<br></br>
                                Phone: (347) 641-9373
                                </p>
                            </div>

                            <p>For us to process your infringement claim regarding content on the Service, you must be the rightsholder or someone authorized to act on behalf of the rightsholder. We encourage you to use <Link>our form</Link> to help ensure the requisite information is included in your notice. If you choose to write to us by email or physical mail instead, your notice must include:</p>

                            <ul className='terms-unoredered-list'>
                                <li>dentification of the copyrighted work(s), trademark, publicity rights, or other intellectual property rights that you claim is being infringed;</li>
                                <li>Identification of the allegedly infringing material that is requested to be removed, including a description of the specific location (i.e., urls) on the Service of the material claimed to be infringing, so that we may locate the material;</li>
                                <li>Your contact information – at a minimum, your full legal name (not pseudonym) and email address;</li>
                                <li>A declaration that contains all of the following:</li>
                                
                                <ul className='terms-unoredered-list'>
                                    <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the intellectual property rights owner, its agent, or the law;</li>
                                    <li>A statement that the information in the notice is accurate; and</li>
                                    <li>A statement under penalty of perjury that you are authorized to act on behalf of the intellectual property owner of the intellectual property that is allegedly being infringed.</li>
                                </ul>

                                <li>Your physical or electronic signature (of your full legal name).</li>
                            </ul>

                            <p>Please note that we will forward your notice of intellectual property infringement, including your contact information, to the party who will have their content removed so they understand why it is no longer available on OpenSea and can also contact you to resolve any dispute.</p>

                        </li>

                        <li>
                            <p><strong>Communication Preferences</strong></p>

                            <p>By creating an Account, you consent to receive electronic communications from OpenSea (e.g., via email, push notification, text messages, or other types of messages). These communications may include notices about your Account (e.g., transactional information) and are part of your relationship with us. We may also send you promotional communications via email we think will be of interest to you. You understand that you are not required to provide this consent as a condition of using the Service and you may opt out of these communications through the Service or through your mobile device’s operating system (with the possible exception of important service announcements and administrative messages) by following the unsubscribe instructions provided or through your Account settings.</p>
                        </li>

                        <li>
                            <p><strong>App Terms</strong></p>

                            <p>You are responsible for providing the mobile device, wireless service plan, software, Internet connections, and/or other equipment or services that you need to download, install, and use the App. We do not guarantee that the App can be accessed and used on any particular device or with any particular service plan. We do not guarantee that the App or Service will be available in any particular geographic location.</p>

                            <p>The following terms and conditions apply to you only if you are using the App from the Apple App Store: To the extent the other terms and conditions of these Terms are less restrictive than, or otherwise conflict with, the terms and conditions of this paragraph, the more restrictive or conflicting terms and conditions in this paragraph apply, but solely with respect to your use of the App from the Apple App Store. You acknowledge and agree that these Terms are solely between you and OpenSea, not Apple, and that Apple has no responsibility for the App or content thereof. Your use of the App must comply with the App Store’s applicable terms of use. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, for the App to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be solely governed by these Terms. You acknowledge that Apple is not responsible for addressing any claims of yours or any third party relating to the App or your possession and/or use of the App, including, but not limited to: (a) product liability claims, (b) any claim that the App fails to conform to any applicable legal or regulatory requirement, and (c) claims arising under consumer protection or similar legislation. You acknowledge that, in the event of any third-party claim that the App or your possession and use of that App infringes that third party’s intellectual property rights, OpenSea, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by these Terms. You must comply with applicable third-party terms of agreement when using the App. You acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of these Terms as they relate to your use of the App, and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof.    </p>
                        </li>

                        <li>
                            <p><strong>Indemnification</strong></p>

                            <p>By agreeing to these Terms and accessing the Service, you agree, to the fullest extent permitted by applicable law, to indemnify, defend, and hold harmless OpenSea, and our respective past, present, and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors, and assigns (individually and collectively, the “OpenSea Parties”), from and against all actual or alleged claims, damages, awards, judgments, losses, liabilities, obligations, taxes, penalties, interest, fees, expenses (including, without limitation, attorneys’ fees and expenses), and costs (including, without limitation, court costs, costs of settlement, and costs of pursuing indemnification and insurance), of every kind and nature whatsoever, whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or unsuspected, in law or equity, whether in tort, contract, or otherwise (collectively, “Claims”), including, but not limited to, damages to property or personal injury, that are caused by, arise out of or are related to (a) your use or misuse of the Service, content, NFTs, or content linked to or associated with any NFTs (b) any Feedback you provide, (c) your violation or breach of any term of these Terms or applicable law, and (d) your violation of the rights of or obligations to a third party, including another user or third party, and (e) your negligence or wilful misconduct. You agree to promptly notify OpenSea of any Claims and cooperate with the OpenSea Parties in defending such Claims. You further agree that the OpenSea Parties shall have control of the defense or settlement of any Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY OTHER INDEMNITIES SET FORTH IN A WRITTEN AGREEMENT BETWEEN YOU AND OPENSEA.</p>
                        </li>

                        <li>
                            <p><strong>Disclaimers</strong></p>

                            <p>YOUR ACCESS TO AND USE OF THE SERVICE IS AT YOUR OWN RISK. YOU UNDERSTAND AND AGREE THAT THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND OPENSEA EXPRESSLY DISCLAIMS WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. OPENSEA (AND ITS SUPPLIERS) MAKE NO WARRANTY OR REPRESENTATION AND DISCLAIM ALL RESPONSIBILITY FOR WHETHER THE SERVICE: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE. OPENSEA DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. OPENSEA WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE SERVICE. WHILE OPENSEA ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE SERVICE SAFE, OPENSEA CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, CONTENT LINKED TO OR ASSOCIATED WITH ANY NFTS, OR ANY NFTS YOU INTERACT WITH USING OUR SERVICE OR OUR SERVICE PROVIDERS’ SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. NO ADVICE OR INFORMATION, WHETHER ORAL OR OBTAINED FROM THE OPENSEA PARTIES OR THROUGH THE SERVICE, WILL CREATE ANY WARRANTY OR REPRESENTATION NOT EXPRESSLY MADE HEREIN. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD OPENSEA RESPONSIBLE FOR ANY BREACH OF SECURITY.</p>
                            <p>WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKE NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE OF OR LOSS OF USE OF NFTS, CONTENT, AND/OR CONTENT LINKED TO OR ASSOCIATED WITH NFTS, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES, OR CLAIMS ARISING FROM: (A) USER ERROR, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES; (B) SERVER FAILURE OR DATA LOSS; (C) UNAUTHORIZED ACCESS OR USE; (D) ANY UNAUTHORIZED THIRD-PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE SERVICE OR NFTS.</p>

                            <p>NFTS EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE ASSOCIATED BLOCKCHAIN (E.G., ETHEREUM NETWORK). ANY TRANSFERS OR SALES OCCUR ON THE ASSOCIATED BLOCKCHAIN (E.G., ETHEREUM). OPENSEA AND/OR ANY OTHER OPENSEA PARTY CANNOT EFFECT OR OTHERWISE CONTROL THE TRANSFER OF TITLE OR RIGHT IN ANY NFTS OR UNDERLYING OR ASSOCIATED CONTENT OR ITEMS.</p>

                            <p>NO OPENSEA PARTY IS RESPONSIBLE OR LIABLE FOR ANY SUSTAINED LOSSES OR INJURY DUE TO VULNERABILITY OR ANY KIND OF FAILURE, ABNORMAL BEHAVIOR OF SOFTWARE (E.G., WALLET, SMART CONTRACT), BLOCKCHAINS OR ANY OTHER FEATURES OF THE NFTS. NO OPENSEA PARTY IS RESPONSIBLE FOR LOSSES OR INJURY DUE TO LATE REPORTS BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE NFTS, INCLUDING FORKS, TECHNICAL NODE ISSUES OR ANY OTHER ISSUES HAVING LOSSES OR INJURY AS A RESULT.</p>

                            <p>Some jurisdictions do not allow the exclusion of implied warranties in contracts with consumers, so the above exclusion may not apply to you.</p>
                        </li>

                        <li>
                            <p><strong>Assumption of Risk</strong></p>

                            <p>You accept and acknowledge:</p>

                            <ul className='terms-unoredered-list'>
                                <li>The value of an NFT is subjective. Prices of NFTs are subject to volatility and fluctuations in the price of cryptocurrency can also materially and adversely affect NFT prices. You acknowledge that you fully understand this subjectivity and volatility and that you may lose money.</li>

                                <li>You understand that you are responsible for any fees related to use of the Service, including for actions you take on the blockchain, regardless of whether a successful transaction occurs, and that such fees are final and irreversible.</li>

                                <li>A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the development of those ecosystems and related applications, and could therefore also negatively impact the potential utility of NFTs.</li>

                                <li>The regulatory regime governing blockchain technologies, non-fungible tokens, cryptocurrency, and other crypto-based items is uncertain, and new regulations or policies may materially adversely affect the development of the Service and the utility of NFTs.</li>

                                <li>You are solely responsible for determining what, if any, taxes apply to your transactions and to withhold, collect, report, and remit the correct amounts of taxes to the appropriate tax authorities. OpenSea is not responsible for determining, withholding, collecting, reporting, or remitting any taxes that apply to your NFTs or the sale/purchase of your NFTs.</li>

                                <li>There are risks associated with purchasing items associated with content created by third parties through peer-to-peer transactions, including but not limited to, the risk of purchasing counterfeit items, mislabeled items, items that are vulnerable to metadata decay, items on smart contracts with bugs, and items that may become untransferable. You represent and warrant that you have done sufficient research before making any decisions to sell, obtain, transfer, or otherwise interact with any NFTs or accounts/collections.</li>

                                <li>We do not have ownership or control of the smart contracts deployed by third parties, and are not responsible and make no guarantees regarding their operation and functionality.</li>

                                <li>We do not control the public blockchains that you are interacting with and we do not control certain smart contracts and protocols that may be integral to your ability to complete transactions on these public blockchains. Additionally, blockchain transactions are irreversible and OpenSea has no ability to reverse any transactions on the blockchain.</li>

                                <li>There are risks associated with using Internet and blockchain based products, including, but not limited to, the risk associated with hardware, software, and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to your third-party wallet or Account. You accept and acknowledge that OpenSea will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Service or any Blockchain network, however caused.</li>

                                <li>The Service relies on third-party platforms and/or vendors. If we are unable to maintain a good relationship with such platform providers and/or vendors; if the terms and conditions or pricing of such platform providers and/or vendors change; if we violate or cannot comply with the terms and conditions of such platforms and/or vendors; or if any of such platforms and/or vendors loses market share or falls out of favor or is unavailable for a prolonged period of time, access to and use of the Service will suffer.</li>

                                <li>OpenSea reserves the right to hide collections, contracts, and items affected by any of these issues or by other issues. Items you purchase may become inaccessible on OpenSea. Under no circumstances shall the inability to view items on OpenSea or an inability to use the Service in conjunction with the purchase, sale, or transfer of items available on any blockchains serve as grounds for a claim against OpenSea.</li>

                                <li>If you have a dispute with one or more users, YOU RELEASE US FROM CLAIMS, DEMANDS, AND DAMAGES OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES. IN ENTERING INTO THIS RELEASE YOU EXPRESSLY WAIVE ANY PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE LIMIT THE COVERAGE OF THIS RELEASE TO INCLUDE THOSE CLAIMS WHICH YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME OF AGREEING TO THIS RELEASE.</li>
                            </ul>  

                        </li>

                        <li>
                            <p><strong>Limitation of Liability</strong></p>

                            <p>TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AGREE THAT IN NO EVENT WILL OPENSEA OR ITS SERVICE PROVIDERS BE LIABLE TO YOU OR ANY THIRD PARTY (A) FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM THESE TERMS OR THE SERVICE, PRODUCTS OR THIRD-PARTY SITES AND PRODUCTS, OR FOR ANY DAMAGES RELATED TO LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND WHETHER CAUSED BY STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF OPENSEA OR ITS SERVICE PROVIDERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; OR (B) FOR ANY OTHER CLAIM, DEMAND, OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF THE DELIVERY, USE, OR PERFORMANCE OF THE SERVICE. ACCESS TO, AND USE OF, THE SERVICE, PRODUCTS OR THIRD-PARTY SITES, AND PRODUCTS ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM.</p>

                            <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF OPENSEA ARISING OUT OF OR IN ANY WAY RELATED TO THESE TERMS, THE ACCESS TO AND USE OF THE SERVICE, CONTENT, NFTS, OR ANY OPENSEA PRODUCTS OR SERVICES EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT RECEIVED BY OPENSEA FOR ITS SERVICE TO YOU DIRECTLY RELATING TO THE ITEMS THAT ARE THE SUBJECT OF THE CLAIM. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>

                            <p>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you. Some jurisdictions also limit disclaimers or limitations of liability for personal injury from consumer products, so this limitation may not apply to personal injury claims.</p>
                        </li>

                        <li>
                            <p><strong>Privacy Policy</strong></p>

                            <p>Please refer to our <Link>Privacy Policy</Link> for information about how we collect, use, and share information from and/or about you ("Your Information"). By submitting Your Information through our Service, you agree to the terms of our <Link>Privacy Policy</Link> and you expressly consent to the collection, use, and disclosure of Your Information in accordance with the <Link>Privacy Policy</Link>.</p>
                        </li>

                        <li>
                            <p><strong>Modifications to the Service</strong></p>

                            <p>We reserve the right in our sole discretion to modify, suspend, or discontinue, temporarily or permanently, the Service (or any features or parts thereof) at any time and without liability as a result.</p>
                        </li>

                        <li>
                            <p><strong>Dispute Resolution; Arbitration</strong></p>

                            <ul className='terms-unoredered-list'>
                                <li><strong>Dispute Resolution.</strong>Please read the following arbitration agreement in this Section (“Arbitration Agreement”) carefully. It requires you to arbitrate disputes with OpenSea and limits the manner in which you can seek relief from us. This section does not govern disputes between users or between users and third parties. OpenSea does not provide dispute resolution services for such disagreements and the parties must resolve those disputes directly.</li>

                                <li><strong>Applicability of Arbitration Agreement. </strong>You agree that any dispute, controversy, or claim relating in any way to your access or use of the Service, to any products sold or distributed through the Service, or to any aspect of your relationship with OpenSea, will be resolved by binding arbitration, rather than in court, including threshold questions of the arbitrability of such dispute, controversy, or claim except that (1) you or OpenSea may assert claims in small claims court, but only if the claims qualify, the claims remain only in such court, and the claims remain on an individual, non-representative, and non-class basis; and (2) you or OpenSea may seek injunctive or equitable relief in a court of proper jurisdiction if the claim relates to intellectual property infringement or other misuse of intellectual property rights.</li>

                                <li><strong>Dispute resolution process.</strong>You and OpenSea both agree to engage in good-faith efforts to resolve disputes prior to either party initiating an arbitration, small claims court proceeding, or equitable relief for intellectual property infringement. You must initiate this dispute resolution process by sending a letter describing the nature of your claim and desired resolution to: OpenSea, Attn: Legal Department, 228 Park Avenue South, #22014, New York, NY 10003. Both parties agree to meet and confer personally, by telephone, or by videoconference (hereinafter “Conference”) to discuss the dispute and attempt in good faith to reach a mutually beneficial outcome that avoids the expenses of arbitration or, where applicable, litigation. If you are represented by counsel, your counsel may participate in the Conference as well, but you agree to fully participate in the Conference. Likewise, if OpenSea is represented by counsel, its counsel may participate in the Conference as well, but OpenSea agrees to have a company representative fully participate in the Conference. The statute of limitations and any filing fee deadlines shall be tolled while the parties engage in the informal dispute resolution process and Conference required by this paragraph. If the parties do not reach agreement to resolve the dispute within thirty (30) days after initiation of this dispute resolution process, either party may commence arbitration, file an action in small claims court, or file a claim for injunctive or equitable relief in a court of proper jurisdiction for matters relating to intellectual property infringement, if the claims qualify.</li>

                                <li><strong>Arbitration Rules and Forum. </strong>
                                The Federal Arbitration Act governs the interpretation and enforcement of this Arbitration Agreement. To begin an arbitration proceeding after participating in the dispute resolution process, you must send a letter requesting arbitration and describing your claim to our registered agent at OpenSea, Attn: Legal Department, 228 Park Avenue South, #22014, New York, NY 10003. The arbitration will be conducted by JAMS, an established alternative dispute resolution provider. Disputes involving claims and counterclaims under $250,000, not inclusive of attorneys’ fees, interest, claimed punitive or other damages, or any claim in excess of the bona fide verifiable value of actual lost property shall be subject to JAMS’s most current version of the Streamlined Arbitration Rules and the JAMS Consumer Minimum Standards then in effect; all other claims shall be subject to JAMS’s most current version of the Comprehensive Arbitration Rules and Procedures and the JAMS Consumer Minimum Standards then in effect. JAMS’s rules are available at jamsadr.com or by calling JAMS at 800-352- 5267. If JAMS is not available to arbitrate, the parties will select an alternative arbitral forum. If the arbitrator finds that you cannot afford to pay JAMS filing, administrative, hearing, and/or other fees and cannot obtain a waiver from JAMS, OpenSea will pay them for you if you complied with the dispute resolution process set forth above. In addition, OpenSea will reimburse all such JAMS filing, administrative, hearing, and/or other fees for claims totaling less than $10,000 unless (a) a resolution of your claim results in a smaller monetary judgment than OpenSea may have offered you to settle the claim, at any point, or (b) the arbitrator determines the claims are frivolous or you did not comply with the dispute resolution process set forth above, except that if you have initiated the arbitration claim, you will still be required to pay the lesser of $250 or the maximum amount permitted under the JAMS Rules for arbitration claims initiated by you. You are still responsible for all additional costs that you incur in the arbitration, including without limitation, fees for attorneys or expert witnesses. You may choose to have the arbitration conducted by telephone or videoconference, based on written submissions, in person in your hometown area (if you live in the United States), or at another mutually agreed upon location that is reasonably convenient to you. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.
                                </li>

                                <li><strong>Authority of Arbitrator.</strong>
                                The arbitrator shall have exclusive authority to (a) determine the scope and enforceability of this Arbitration Agreement and (b) resolve any dispute related to the interpretation, applicability, enforceability, or formation of this Arbitration Agreement including, but not limited to, any claim that all or any part of this Arbitration Agreement is void or voidable. The arbitration will decide the rights and liabilities, if any, of you and OpenSea. The arbitration proceeding will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages and to grant any non-monetary remedy or relief available to an individual under applicable law, the arbitral forum’s rules, and these Terms. The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and us.
                                </li>

                                <li><strong>Waiver of Jury Trial.</strong>YOU AND OPENSEA HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and OpenSea are instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement, except as specified in the second bullet of this Section 16, above (“Applicability of Arbitration Agreement”). An arbitrator can award on an individual basis the same damages and relief as a court and must follow these Terms as a court would. However, there is no judge or jury in arbitration, and court review of an arbitration award is subject to very limited review.</li>

                                <li><strong>Waiver of Class Actions and Class Arbitrations.</strong>ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A REPRESENTATIVE (INCLUDING, WITHOUT LIMITATION, PAGA) OR COLLECTIVE CLASS BASIS. ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND CLAIMS OF MORE THAN ONE USER, PERSON, OR ENTITY CANNOT BE ARBITRATED OR CONSOLIDATED WITH THOSE OF ANY OTHER USER, PERSON, OR ENTITY. Accordingly, under the arbitration procedures outlined in this section, an arbitrator shall not combine or consolidate more than one party’s claims without the written consent of all affected parties to an arbitration proceeding. Without limiting the generality of the foregoing, you and OpenSea agree that no dispute shall proceed by way of class arbitration without the written consent of all affected parties. If a decision is issued stating that applicable law precludes enforcement of any part of this subsection’s limitations as to a given claim for relief, then that claim must be severed from the arbitration and brought in the state or federal courts located in New York County in the State of New York. All other claims shall be arbitrated.</li>

                                <li><strong>Severability.</strong>Except as provided in this Section, if any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Arbitration Agreement shall continue in full force and effect.</li>

                                <li><strong>Survival of Agreement.</strong>This Arbitration Agreement will survive the termination of your relationship with OpenSea.</li>

                                <li><strong>Modification.</strong>Notwithstanding any provision in these Terms to the contrary, we agree that if OpenSea makes any future material change to this Arbitration Agreement, you may reject that change within thirty (30) days of such change becoming effective by writing to OpenSea at the following address: OpenSea, Attn: Legal Department, 228 Park Avenue South, #22014, New York, NY 10003.</li>
                            </ul>
                            <br></br>
                        </li>

                        <li>
                            <p><strong>Governing Law and Venue</strong></p>

                            <p>These Terms and your access to and use of the Service shall be governed by and construed and enforced in accordance with the laws of the State of New York (without regard to conflict of law rules or principles of the State of New York, or any other jurisdiction that would cause the application of the laws of any other jurisdiction). Any dispute between the parties that is not subject to arbitration as set forth in Section 16 or cannot be heard in small claims court, shall be resolved in the state or federal courts of New York County in the State of New York, and the United States, respectively, sitting in the State of New York.</p>
                        </li>

                        <li>
                            <p><strong>Termination</strong></p>
                            <p>If you breach any of the provisions of these Terms, all licenses granted by OpenSea will terminate automatically. Additionally, notwithstanding anything contained in these Terms, we reserve the right, with or without notice and in our sole discretion, to suspend, restrict, disable, terminate, or delete your Account and/or your ability to access or use the Service (or any part of the foregoing) at any time and for any or no reason, and you acknowledge and agree that we shall have no liability or obligation to you in such event and that you will not be entitled to a refund of any amounts that you have already paid to us. If we terminate your Account or restrict your access or use of the Service, you retain ownership of your NFTs. You may still access your NFTs through public blockchains and other web3 wallets, platforms, and/or websites.</p>
                        </li>

                        <li>
                            <p><strong>Severability</strong></p>
                            <p>If any term, clause, or provision of these Terms is held invalid or unenforceable, then that term, clause, or provision will be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, clause, or provision, or any other term, clause, or provision of these Terms.  </p>
                        </li>

                        <li>
                            <p><strong>Injunctive Relief</strong></p>
                            <p>You agree that a breach of these Terms will cause irreparable injury to OpenSea for which monetary damages would not be an adequate remedy and OpenSea shall be entitled to equitable relief in addition to any remedies it may have hereunder or at law without a bond, other security, or proof of damages.</p>
                        </li>

                        <li>
                            <p><strong>California Residents</strong></p>
                            <p>If you are a California resident, in accordance with Cal. Civ. Code § 1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210.</p>
                        </li>

                        <li>
                            <p><strong>Export Laws</strong></p>

                            <p>You agree that you will not export or re-export, directly or indirectly, the Service, and/or other information or materials provided by OpenSea hereunder, to any country for which the United States or any other relevant jurisdiction requires any export license or other governmental approval at the time of export without first obtaining such license or approval. In particular, but without limitation, the Service may not be exported or re-exported (a) into any U.S. embargoed countries or any country that has been designated by the U.S. Government as a “terrorist supporting” country, or (b) to anyone listed on any U.S. Government list of prohibited or restricted parties, including the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person’s List or Entity List. By using the Service, you represent and warrant that you are not located in any such country or on any such list. You are responsible for and hereby agree to comply at your sole expense with all applicable United States export laws and regulations.</p>
                        </li>

                        <li>
                            <p><strong>Survival</strong></p>

                            <p>All sections which by their nature should survive the termination of these Terms shall continue in full force and effect subsequent to and notwithstanding any termination of these Terms by OpenSea or you. Termination will not limit any of OpenSea’s other rights or remedies at law or in equity.</p>
                        </li>

                        <li>
                            <p><strong>Miscellaneous</strong></p>
                            <p>These Terms (and any other applicable terms or policies incorporated by reference in these Terms) constitute the entire agreement between you and OpenSea relating to your access to and use of the Service. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without the prior written consent of OpenSea, and OpenSea’s failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. The section headings used herein are for reference only and shall not be read to have any legal effect.</p>
                            
                            <p>The Service is operated by us in the United States. Those who choose to access the Service from locations outside the United States do so at their own initiative and are responsible for compliance with applicable local laws. You and OpenSea agree that the United Nations Convention on Contracts for the International Sale of Goods will not apply to the interpretation or construction of these Terms.</p>

                            <p>Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity.</p>
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
