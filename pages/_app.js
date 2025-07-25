import App from 'next/app'
import { appWithTranslation } from 'next-i18next';
import '../style/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "@material-tailwind/react";
import { PrismicProvider } from '@prismicio/react';
import { PrismicClient } from '../prismic-configuration';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <PrismicProvider client={PrismicClient()}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicProvider>
    )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)