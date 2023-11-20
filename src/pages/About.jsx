import React from "react";
import CelikImg1 from "@assets/celik-1.jpeg";
import CelikImg2 from "@assets/celik-2.jpeg";
import CelikImg3 from "@assets/celik-3.jpeg";

function About() {
  return (
    <div className="hakkimizda">
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
        <div className="main-page-about-image-container">
          <div className="main-page-about-image-container-image">
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "350px",
              }}
              src={CelikImg1}
            ></img>
          </div>
          <div className="main-page-about-image-container-image">
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "350px",
              }}
              src={CelikImg2}
            ></img>
          </div>
          <div className="main-page-about-image-container-image">
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "350px",
              }}
              src={CelikImg3}
            ></img>
          </div>
        </div>
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
    </div>
  );
}

export default About;
