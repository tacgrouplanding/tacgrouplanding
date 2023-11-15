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
import LandingSlideImg1 from "./assets/landing-slide-img-1.jpeg";
import LandingSlideImg2 from "./assets/landing-slide-img-2.jpeg";
import CelikImg1 from "./assets/celik-1.jpeg";
import CelikImg2 from "./assets/celik-2.jpeg";
import CelikImg3 from "./assets/celik-3.jpeg";
import taclogo from "./assets/tac-logo.png";

// Icons
import isoIcon from "./assets/iso.webp";
import steelIcon from "./assets/steel.webp";
import planningIcon from "./assets/planning.webp";
import lightIcon from "./assets/light.webp";
import insulatingIcon from "./assets/insulating.webp";

function App() {
  const processDescription =
    "Nulla adipisicing nostrud laborum Lorem quis proident. Eiusmod exercitation enim velit cupidatat cillum. Cillum enim deserunt labore dolor tempor.";

  const scrollClick = (scrollId) => {
    window.scrollTo({
      top: document.getElementById(scrollId).offsetTop - 200,
      behavior: "smooth",
    });
  };
  return (
    <div className="main-page">
      <div className="main-page-header">
        <div className="main-page-header-container">
          <div className="main-page-header-container-logo">
            <img
              src={taclogo}
              style={{
                filter: "invert(1)",
                width: "100px",
              }}
            ></img>
          </div>
          <div className="main-page-header-container-menu">
            <div
              className="main-page-header-container-menu-item"
              onClick={() => {
                scrollClick("hakkimizda");
              }}
            >
              Hakkımızda
            </div>
            <div
              className="main-page-header-container-menu-item"
              onClick={() => {
                scrollClick("hizmetlerimiz");
              }}
            >
              Hizmetlerimiz
            </div>
            <div
              className="main-page-header-container-menu-item"
              onClick={() => {
                scrollClick("nedenbiz");
              }}
            >
              Neden Biz?
            </div>
            <div
              className="main-page-header-container-menu-item"
              onClick={() => {
                scrollClick("surecimiz");
              }}
            >
              Sürecimiz
            </div>
            <div
              className="main-page-header-container-menu-item"
              onClick={() => {
                scrollClick("iletisim");
              }}
            >
              İletişim
            </div>
          </div>
        </div>
      </div>
      <div id="anasayfa" className="main-page-landing">
        <Carousel showStatus={false} showThumbs={false} autoPlay={true}>
          <div>
            <img src={LandingSlideImg1}></img>
          </div>
          <div>
            <img src={LandingSlideImg2}></img>
          </div>
        </Carousel>
      </div>
      <div className="main-page-about" id="hakkimizda">
        <h1>Hakkımızda</h1>
        <p>
          Taç Group, hafif çelik konutlar, hafif çelik villalar, hafif çelik
          eğitim binaları, hafif çelik oteller, hafif çelik sağlık yapıları,
          hafif çelik özel tasarım satış ofisleri, hafif çelik endüstriyel
          yapılar sektöründe faaliyet göstermek üzere 2023 yılında kurulmuştur.
          Karaman’da, 6.000 metrekarelik alana yayılan, son teknolojiyle
          donatılmış tesislerde üretilen dünya standartlarında ve yüksek
          kalitede ürünlerini nihai tüketiciyle buluşturulmaktadır.
        </p>
        <p>
          Firmamız genişleyen ürün yelpazesiyle müşterilerimize başarıyla hizmet
          vermektedir. Müşteri memnuniyetini esas alarak çalışan teknik ve idari
          personel, müşteri ihtiyaçları doğrultusunda hızlı ve kaliteli çözümler
          sunmaktadır. Maksimum kaliteyi standart gören anlayışıyla AR-GE
          çalışmalarına büyük önem veren firmamız, son teknolojileri takip
          edilerek oluşturduğu makine parkında, sıfır hata hedefiyle üretim
          yapmaktadır.
        </p>
        <p>
          Taç Group, profesyonel çalışma sistemi içerisinde, proje aşamasında
          bilgilendirme ve yönlendirme ile müşterilere büyük avantajlar
          sağlamaktadır. Kaliteli ürün ve hizmet bütünlüğü içerisinde bulunmayı
          misyon edinmiştir.
        </p>
      </div>
      <div className="main-page-vision">
        <div className="main-page-vision-container">
          <h1>Vizyon & Misyon</h1>
          <p>
            Taç Group Çelik ürünleri dünyada tanınmış üretim ve sistem
            standartlarına uygun olarak üretmektedir. Bu ürünler, ‘’Light Gauge
            Steel Frame’’ teknolojisi kullanılarak inşa edilmektedir. Taç Group,
            tasarım, projelendirme, üretim ve yapı modül bileşenleri dahil olmak
            üzere tüm süreçleriyle birlikte yönetilen bütünleşik bir yazılım
            çözümleri sunmaktadır.
          </p>
          <p>
            Gelişen teknolojiyle birlikte müşterilerimizin kullanım amaçlarına
            ve kültürel isteklerine göre sürdürülebilir ve çevreye duyarlı,
            estetik, konforlu, çevre ve arazi koşullarına uygun yaşam alanları
            sunmak en büyük hedefimizdir. Hafif çelik yapı sistemleri, güvenliği
            en üst düzeye çıkarmakla kalmaz, aynı zamanda uzun vadeli
            dayanıklılık sağlar.
          </p>
          <p>
            Bu sayede, hem doğal afetlere karşı dirençli hem de enerji
            verimliliğini artırarak sürdürülebilir bir geleceği destekler.
          </p>
        </div>
      </div>
      <div className="main-page-services">
        <h1>Hafif Çelik Yapılar</h1>
        <div id="hizmetlerimiz" className="main-page-services-container">
          <Subservice
            title="Hafif Çelik Konut"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
          <Subservice
            title="Hafif Çelik Villa"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
          <Subservice
            title="Hafif Çelik İdari Bina"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
          <Subservice
            title="Tiny House"
            itemList={["item1", "item2", "item3", "item4", "item5"]}
          />
        </div>
      </div>
      <div className="main-page-summary">
        <div className="main-page-summary-blog">
          <h1 className="main-page-summary-blog-title">
            NEDEN HAFİF ÇELİK YAPILAR TERCİH ETMELİYİZ?
          </h1>
          <div className="main-page-summary-blog-description">
            <ul>
              <li>
                Hafif çelik yapılar, projenizi hayata geçirme sürecinizi büyük
                ölçüde hızlandırır. Bu da size zaman ve maliyet tasarrufu
                sağlar.
              </li>
              <li>
                Dayanıklılık konusunda endişelenmenize gerek yoktur. Çelik
                yapılar, uzun ömürlü ve sağlam bir çözüm sunar. Hava koşullarına
                ve diğer dış etkenlere karşı dirençlidirler, bu da size uzun
                vadede sorunsuz bir yapının keyfini çıkarma fırsatı sunar.
              </li>
              <li>
                Tasarım özgürlüğü konusunda hafif çelik yapılar sınırsızdır.
                Hayal ettiğiniz her türlü mimari çözümü gerçekleştirebilirsiniz.
                Modern ve estetik tasarımlarla konfor alanınıza erişebilirsiniz.
              </li>
              <li>
                Çevre dostu bir seçenek olmaları da önemli bir avantajdır. Geri
                dönüştürülebilir çelik malzeme kullanılarak, çevreye duyarlı bir
                inşaat yöntemi sunarlar. Depreme karşı yüksek dayanıklılıkları,
                özellikle deprem riski taşıyan bölgelerde müşterilerinizin
                güvenliğini ön planda tutmanıza yardımcı olur.
              </li>
              <li>
                Hafif çelik yapılar, müşterilerimize hızlı, dayanıklı, çevre
                dostu ve estetik bir inşaat çözümü sunar. Projenizi
                gerçekleştirirken her açıdan avantajlı bir seçenek olduğunu
                göreceksiniz.
              </li>
            </ul>
          </div>
        </div>
        <div className="main-page-summary-image">
          <img
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            src={CelikImg3}
          ></img>
        </div>
      </div>
      <div className="main-page-pros" id="nedenbiz">
        <h1>Neden Bizi Seçmelisiniz?</h1>
        <div className="main-page-pros-container">
          <OurQuality
            description={"Hafiflik"}
            icon={lightIcon}
            subdescription={
              "Biz, yapıların taşıma ve dayanıklılık gereksinimlerini en hafif çözümlerle karşılamayı hedefliyoruz."
            }
          />
          <OurQuality
            description={"Dayanıklılık"}
            icon={steelIcon}
            subdescription={
              "Yapıların uzun ömürlü olmasını sağlamak için korozyon, çürüme ve paslanma gibi sorunlardan arındırılmış yapılar sunuyoruz."
            }
          />
          <OurQuality
            description={"Hızlı ve Planlı Yapım"}
            icon={planningIcon}
            subdescription={
              "Yapım sürecini hızlı ve planlı bir şekilde tamamlamayı ve detaylı çözümleri önceden düşünmeyi taahhüt ediyoruz."
            }
          />
          <OurQuality
            description={"Yangın Yalıtımı"}
            icon={insulatingIcon}
            subdescription={
              "60 - 120 dakika yangın yalıtımı ile güvenli tahliyeyi mümkün kılma amacındayız."
            }
          />
          <OurQuality
            description={"Uluslararası Standartlar"}
            icon={isoIcon}
            subdescription={
              "Uluslararası standartlara uygun olarak yüksek güvenlikli üretim süreçleri sunuyoruz."
            }
          />
        </div>
      </div>
      <div className="main-page-process" id="surecimiz">
        <h2>Sürecimiz Nasıl İşliyor</h2>
        <div className="main-page-process-container">
          <ProcessCard title="title" description={processDescription} />
          <ProcessCard title="title" description={processDescription} />
          <ProcessCard title="title" description={processDescription} />
          <ProcessCard title="title" description={processDescription} />
        </div>
      </div>
      <div className="main-page-formcontact" id="iletisim">
        <div className="main-page-formcontact-container">
          <div className="main-page-formcontact-container-form">
            <h2>Bize Ulaşın</h2>
            <div>
              <AiFillPhone /> +90 (538) 363 69 89
            </div>
            <div>
              <AiFillMail /> info@tacgroup.com
            </div>
          </div>
          <div className="main-page-formcontact-container-image">
            <img
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              src={LandingSlideImg1}
            ></img>
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
              <AiFillPhone /> +90 (538) 363 69 89
            </div>
            <div>
              <AiFillMail /> info@tacgroup.com
            </div>
          </div>
          <div className="main-page-footer-socials">
            <h3>Sosyal Medyada Biz</h3>
            <div className="main-page-footer-socials-items">
              {/* onClick=
              {() => {
                window.open(
                  "https://www.facebook.com/TAC-Group-101675395417941",
                  "_blank"
                );
              }} */}
              <div>
                <AiFillFacebook />
              </div>
              <div>
                <AiFillInstagram />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
              <div>
                <AiFillTwitterCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
