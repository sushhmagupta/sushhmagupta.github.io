import type { Metadata } from "next";
import { SITE_CONFIG} from '@/constants';
import Mobile from '@/components/mobile'
const description=""
export const metadata: Metadata = {
  title: SITE_CONFIG.NAME,
  description: description,
  keywords:"",
  openGraph: {
    title: SITE_CONFIG.NAME, 
    description: description,
    url:  SITE_CONFIG.URL, // Replace with your actual URL
    siteName: SITE_CONFIG.NAME,
    images: [
      {
        url: SITE_CONFIG.URL+"/sushhma.png",type: "logo", // Replace with your image URL
        alt: SITE_CONFIG.NAME,
      },
    ],
  }
};
export default function Home() {  
  return (
    <main className="main">
 
  <section id="about" className="about section">
  
  <div className="container">
    <div className="row ">
        <div className="col"><img src="/mobile.png" width="100%"/></div>
        <div className="col p-3"><Mobile/></div>
      </div> 
  </div>

  </section>
</main>
  );
}
