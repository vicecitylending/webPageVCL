import App from 'next/app'
// import { appWithTranslation } from '../i18n'
import '../style/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from  '../components/navbar'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

// export default appWithTranslation(MyApp)

export default MyApp