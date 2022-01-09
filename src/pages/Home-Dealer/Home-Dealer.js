import "./Home-Dealer.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InformationCard from "../../components/InformationCard/InformationCard";
import HomeDealerCard from "../../components/HomeDealerCard/HomeDealerCard";
import dataOutlet from "../../json/OutletCard.json";
import dataPromo from "../../json/InformationCard.json";

const homeDealer = () => {
  const dummy = dataOutlet.data;
  const dummyPromo = dataPromo.data;
  console.log(dummy);
  return (
    <div class="homedealer">
      <Header />
      <div class="background">
        <div class="max-width">
          <div>
            <div class="bg-biru" />
            <div class="isi1">
              <h class="title">Temukan Outlet Suzuki terdekat di daerah </h>
              <h class="title-2">sekitar Anda</h>
              {dummy.map((item) => {
                return (
                  <HomeDealerCard
                    service={item.service}
                    title={item.title}
                    phone={item.phone}
                    location={item.location}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div class="bg-biru-2" />
            <div class="isi2">
              <h class="promotitle-1">Informasi Terbaru</h>
              <h class="promotitle-2">
                Seputar Promo, Berita, Event dari Suzuki
              </h>
              {dummyPromo.map((item) => {
                return <InformationCard date={item.date} title={item.title} />;
              })}
              <button>Lihat Semua Informasi</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default homeDealer;
