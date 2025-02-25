import type { Metadata } from "next";
import { SITE_CONFIG} from '@/constants';
import Mobile from '@/components/mobile';
import Name from '@/components/Name'
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
        <div className="col-lg-12"><img src="/mobile.png" style={{"height":"200px","width":"100%","objectFit":"cover"}}/></div>
        
      </div> 
      <div className="row ">
        <div className="col-lg-6 p-3"><Mobile/></div>
        <div className="col-lg-6 p-3"><Name/></div>
      </div> 
  </div>
    
  </section>
</main>
  );
}
