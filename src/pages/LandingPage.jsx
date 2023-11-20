import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Subservice from "@components/Subservice";
import OurQuality from "@components/OurQuality";
import ProcessCard from "@components/ProcessCard";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

import LandingSlideImg1 from "@assets/landing-slide-img-1.jpeg";
import LandingSlideImg2 from "@assets/landing-slide-img-2.jpeg";
import CelikImg3 from "@assets/celik-3.jpeg";
import contact from "@assets/contact.jpg";
// Icons
import isoIcon from "@assets/iso.webp";
import steelIcon from "@assets/steel.webp";
import planningIcon from "@assets/planning.webp";
import lightIcon from "@assets/light.webp";
import insulatingIcon from "@assets/insulating.webp";

import teslimatmontaj from "@assets/teslimatmontaj.jpg";
import kalitekontrol from "@assets/kalitekontrol.webp";
import tasarimproje from "@assets/tasarimproje.jpg";
import musteriihtiyac from "@assets/musteriihtiyac.png";

import hafifcelikkonut from "@assets/hafifcelikkonut.png";
import hafifcelikvilla from "@assets/hafifcelikvilla.png";
import hafifcelikidaribina from "@assets/hafifcelikidaribina.png";
import tinyhouse from "@assets/tinyhouse.jpg";

function LandingPage() {
  const processDescription = {
    0: "Bu aşamada, müşterilerimizin ihtiyaçlarını anlamak için detaylı bir analiz yaparız. Müşterilerimizin beklentilerini ve taleplerini anlamak için yüz yüze görüşmeler, anketler ve site ziyaretleri gerçekleştiririz. Bu aşamada, çelik yapıların sağladığı avantajları vurgularız, örneğin dayanıklılık, hafiflik, enerji verimliliği ve çevre dostu özellikleri gibi.",
    1: "İhtiyaç analizi sonucunda, müşterilerimize özel çelik ev tasarımları geliştiririz. Müşterilerimizin estetik tercihlerini, bütçelerini ve diğer özel gereksinimlerini dikkate alarak özelleştirilmiş projeler sunarız. Bu aşamada, çelik yapıların esnek tasarım özellikleri ve hızlı montaj avantajlarını vurgularız.",
    2: "Tasarım onaylandıktan sonra, üretim aşamasına geçeriz. Çelik yapı malzemelerimizi yüksek kalite standartlarına göre üretiriz. Üretim sürecinde kalite kontrol süreçlerini sıkı bir şekilde uygularız ve müşterilerimize, çelik yapıların dayanıklılığı, deprem dayanıklılığı ve uzun ömürlülüğü gibi avantajlarını açıklayarak güven vermeye çalışırız.",
    3: "Çelik evin parçalarını ürettikten sonra, hızlı bir şekilde montaj sürecine geçeriz. Çelik yapıların kolay monte edilebilir olması, müşterilerimize hızlı bir şekilde evlerine kavuşma avantajı sunar. Teslimat ve montaj sürecinde, müşterilerimize çelik yapıların enerji verimliliği ve sürdürülebilirlik konularında sağladığı avantajları vurgularız.",
  };

  const serviceDescription = {
    0: "Hafif çelik konutlarımız, mükemmel dayanıklılık, hafiflik ve enerji verimliliği ile birleşerek estetik tasarımlar ve çevre dostu yaşam alanları sunar.",
    1: "Hafif çelik villalarımız, modern tasarımları, yüksek dayanıklılıkları ve enerji verimliliği ile öne çıkarak konforlu ve lüks bir yaşam alanı sunar, müşterilerimize estetik ve fonksiyonelliği bir arada yaşama fırsatı tanır.",
    2: "Hafif çelik kullanarak inşa ettiğimiz idari binalar, hızlı montaj avantajı ile birlikte işyerlerine uygun, modern ve işlevsel çözümler sunar. Dayanıklı yapısı, uzun ömürlülüğü ve çevre dostu özellikleri ile iş dünyasına sürdürülebilir bir iş ortamı sağlar.",
    3: "Tiny House konseptimiz, minimalizm ve fonksiyonellik ile bir araya gelerek küçük ev hayali kuranlara şık ve sürdürülebilir bir yaşam alanı sunar. Hafif çelik kullanımı, taşınabilirlik ve enerji tasarrufu gibi avantajlarla, kullanıcılarına özgürlük ve çevre dostu bir yaşam tarzı vaat eder.",
  };

  return (
    <div className="main-page">
      <div className="main-page-landing">
        <div id="anasayfa" className="main-page-landing-container">
          <Carousel
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop={true}
          >
            <div>
              <img src={LandingSlideImg1}></img>
            </div>
            <div>
              <img src={LandingSlideImg2}></img>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="main-page-services">
        <h1>Hafif Çelik Yapılar</h1>
        <div id="hizmetlerimiz" className="main-page-services-container">
          <Subservice
            subserviceImg={hafifcelikkonut}
            title="Hafif Çelik Konut"
            description={serviceDescription[0]}
          />
          <Subservice
            subserviceImg={hafifcelikvilla}
            title="Hafif Çelik Villa"
            description={serviceDescription[1]}
          />
          <Subservice
            subserviceImg={hafifcelikidaribina}
            title="Hafif Çelik İdari Bina"
            description={serviceDescription[2]}
          />
          <Subservice
            subserviceImg={tinyhouse}
            title="Tiny House"
            description={serviceDescription[3]}
          />
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
      <div className="main-page-summary">
        <div className="main-page-summary-blog">
          <h1 className="main-page-summary-blog-title">
            Neden hafif çelik yapılar tercih etmeliyiz?
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
      <div className="main-page-process" id="surecimiz">
        <h1>Sürecimiz Nasıl İşliyor</h1>
        <div className="main-page-process-container">
          <ProcessCard
            title="Müşteri İhtiyaç Analizi ve Danışmanlık"
            processImg={musteriihtiyac}
            description={processDescription[0]}
          />
          <ProcessCard
            title="Tasarım ve Proje Geliştirme"
            processImg={tasarimproje}
            description={processDescription[1]}
          />
          <ProcessCard
            title="Kalite Kontrol ve Üretim"
            processImg={kalitekontrol}
            description={processDescription[2]}
          />
          <ProcessCard
            title="Teslimat ve Montaj"
            processImg={teslimatmontaj}
            description={processDescription[3]}
          />
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
              src={contact}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
