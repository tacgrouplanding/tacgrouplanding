import "./App.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Subservice from "./Subservice";
import OurQuality from "./OurQuality";
import ProcessCard from "./ProcessCard";
import { CiLocationOn } from "react-icons/ci";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

function App() {
  const processDescription =
    "Nulla adipisicing nostrud laborum Lorem quis proident. Eiusmod exercitation enim velit cupidatat cillum. Cillum enim deserunt labore dolor tempor.";

  return (
    <div className="main-page">
      <div className="main-page-header">
        <div className="main-page-header-container">
          <div className="main-page-header-container-logo">Logo</div>
          <div className="main-page-header-container-menu">
            <div className="main-page-header-container-menu-item">Menu Item</div>
            <div className="main-page-header-container-menu-item">Menu Item</div>
            <div className="main-page-header-container-menu-item">Menu Item</div>
            <div className="main-page-header-container-menu-item">Menu Item</div>
          </div>
        </div>
      </div>
      <div className="main-page-landing">
        <Carousel showStatus={false} showThumbs={false} autoPlay>
          <img src="https://placehold.co/1200x600"></img>
          <img src="https://placehold.co/1200x600"></img>
          <img src="https://placehold.co/1200x600"></img>
          <img src="https://placehold.co/1200x600"></img>
        </Carousel>
      </div>
      <div className="main-page-services">
        <h1>5N1K Çelik</h1>
        <div className="main-page-services-container">
          <Subservice
            title="Hizmetlerimiz"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
          <Subservice
            title="Hizmetlerimiz"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
          <Subservice
            title="Hizmetlerimiz"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
          <Subservice
            title="Hizmetlerimiz"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
        </div>
      </div>
      <div className="main-page-summary">
        <div className="main-page-summary-blog">
          <h2 className="main-page-summary-blog-title">
            Çelik Kullanmanın Avantajları
          </h2>
          <div className="main-page-summary-blog-description">
            Günümüz dünyasında iklim değişiklikleri,doğal afetler ve özellikle
            depremlerle birlikte yaşamak çok olağanlaştı. Yaşadığımız enerji
            krizi nedeniyle doğal enerji kaynaklarına olan eğilim artmakta. Bu
            durum, yaşam ve çalışma alanlarımızda güvenliği önceliklendirmenin
            zorunluluğunu ve zaman, maliyet, konfor kayıplarını azaltmanın da
            önemini gösteriyor. Bu bağlamda, yapı sektörünün teknik unsurlarını
            tasarlayan mühendislerimiz, montaj öncesi profil üretim aşamasında,
            gerektiğinde demonte edilebilen, hafif veya orta ağırlıkta, korozyon
            direnci sağlayan, geri dönüşüme uygun ve birçok avantaj barındıran
            çelik yapı sistemlerini önermektedir.
          </div>
        </div>
        <div className="main-page-summary-image"></div>
      </div>
      <div className="main-page-pros">
        <OurQuality />
        <OurQuality />
        <OurQuality />
        <OurQuality />
        <OurQuality />
        <OurQuality />
      </div>
      <div className="main-page-process">
        <h2>Sürecimiz Nasıl İşliyor</h2>
        <div className="main-page-process-container">
          <ProcessCard title="title" description={processDescription} />
          <ProcessCard title="title" description={processDescription} />
          <ProcessCard title="title" description={processDescription} />
          <ProcessCard title="title" description={processDescription} />
        </div>
      </div>
      <div className="main-page-formcontact">
        <div className="main-page-formcontact-container">
          <div className="main-page-formcontact-container-form">
            <h2>Bize Ulaşın</h2>
            <div>
              <AiFillPhone /> 0555 555 55 55
            </div>
            <div>
              <AiFillMail /> gmail@gmail.com
            </div>
          </div>
          <div className="main-page-formcontact-container-image">
            <img style={{
              objectFit: "cover",
              width: "100%",
            }} src="https://placehold.co/600x400"></img>
          </div>
        </div>
      </div>
      <div className="main-page-footer">
        <div className="main-page-footer-container">
          <div className="main-page-footer-location">
            <h3>Konum</h3>
            <div>
              <CiLocationOn /> Karaman Organize Sanayi Bölgesi <br /> 5.Sokak
              No:4
            </div>
          </div>
          <div className="main-page-footer-contact">
            <h3>İletişim</h3>
            <div>
              <AiFillPhone /> 0555 555 55 55
            </div>
            <div>
              <AiFillMail /> gmail@gmail.com
            </div>
          </div>
          <div className="main-page-footer-socials">
            <h3>Sosyal Medyada Biz</h3>
            <div>
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillTwitterCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
