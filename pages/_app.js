import React, { useEffect} from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from 'next/head'
import FloatingScreen from '../components/floating-screen/floating-screen'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/header/header.css'
import '../components/footer/footer.css'
import "./css/master.css"
import "./css/landing.css"
import "./css/home.css"
import "./css/experience.css"
import "./css/impact.css"
import "./css/who-we-are.css"
import "./css/getting-started.css"
import "./css/heroComponent.css"
import "./css/searchForm.css"
import "./css/resources.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                
                <link rel="icon" href="/touch.png" />
                <meta name="Description" content="The pandemic has disproportionately impacted our cities' most vulnerable residents and we all have a part to play in supporting our neighbors. The time is now to engage in critical racial justice work, tackle food insecurity, strengthen our education system, and combat social isolation. " />
                <meta httpEquiv="Content-Language" content="en"/>
                <title>Serve the Moment</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <Header landingMenu={pageProps.landingMenu} menuItems={pageProps.mainMenu} masterElements={pageProps.masterElements} />
            {
                pageProps.masterElements.acf.show_window
                ? <FloatingScreen screenData={pageProps.masterElements} />
                : ""
            }
            <Component {...pageProps} />
            <Footer partners={pageProps.partnerData} customClass={'bottom'} landingMenu={pageProps.landingMenu} menuItems={pageProps.mainMenu} masterElements={pageProps.masterElements} />
            <script type="text/javascript">
                {`var __ss_noform = __ss_noform || [];
                __ss_noform.push(['baseURI', 'https://app-3QNMWRHCZE.marketingautomation.services/webforms/receivePostback/MzawMLEwMjM1BQA/']);
                __ss_noform.push(['endpoint', '2634af05-920a-4055-9b6a-e4592ec85d29']);`
                }
            </script>
            <script type="text/javascript" src="https://koi-3QNMWRHCZE.marketingautomation.services/client/noform.js?ver=1.24" ></script>

        </>
    )
}

MyApp.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/menus/v1/menus/main-menu`)
    const mainMenu = await res.json()

    // const resLand = await fetch(`${process.env.ProjectUrl}/wp-json/menus/v1/menus/landing-menu`)
    // const landingMenu = await resLand.json()

    const optionRes = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/options/options-page`)
    const masterElements = await optionRes.json()

    const resDataPartners = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/partners?per_page=100`)
    const partnerData = await resDataPartners.json()

    return {
        pageProps: {
          mainMenu,
          masterElements,
          partnerData,
          //   landingMenu,
        },
    }
}

export default MyApp