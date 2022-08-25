import {QueryClientProvider,QueryClient} from 'react-query'
import '../styles/css/index.css';

const qClient = new QueryClient()

function MyApp({ Component, pageProps }) {
 
  return (
    <QueryClientProvider client={qClient}>
        <Component {...pageProps} />    
    </QueryClientProvider>  
  )
}

export default MyApp
