import App from 'next/app'
import { appWithTranslation } from 'next-i18next';
import '../style/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "@material-tailwind/react";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
    )
  }


MyApp.getServerSideProps = async (appContext) => {
  const appProps = await App.getServerSideProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)

// export default MyApp