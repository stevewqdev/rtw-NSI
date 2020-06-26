import React, { useEffect} from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/header/header.css'
import '../components/footer/footer.css'
import "./css/master.css"
import "./css/landing.css"
import "./css/home.css"

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <link rel="icon" href="/touch.png" />
                <meta name="Description" content="The pandemic has disproportionately impacted our cities' most vulnerable residents and we all have a part to play in supporting our neighbors. The time is now to engage in critical racial justice work, tackle food insecurity, strengthen our education system, and combat social isolation. " />
                <meta httpEquiv="Content-Language" content="en"/>
                <title>Serve the Moment</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <Header landingMenu={pageProps.landingMenu} menuItems={pageProps.mainMenu} masterElements={pageProps.masterElements} />
            <Component {...pageProps} />
            <Footer customClass={'bottom'} landingMenu={pageProps.landingMenu} menuItems={pageProps.mainMenu} masterElements={pageProps.masterElements} />
        </div>
    )
}

MyApp.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/menus/v1/menus/main-menu`)
    const mainMenu = await res.json()

    const resLand = await fetch(`${process.env.ProjectUrl}/wp-json/menus/v1/menus/landing-menu`)
    const landingMenu = await resLand.json()

    const optionRes = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/options/options-page`)
    const masterElements = await optionRes.json()

    return {
        pageProps: {
          mainMenu,
          masterElements,
          landingMenu,
        },
    }
}

export default MyApp