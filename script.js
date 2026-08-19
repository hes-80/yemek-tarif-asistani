function tarifGetir() {
  const ad = document.getElementById('yemekAdi').value.toLowerCase().trim();
  const sonucDiv = document.getElementById('sonuc');

  const tarifler = {
    "patlıcan musakka": {
      baslik: "Patlıcan Musakka",
      porsiyon: "4 kişilik",
      malzemeler: `• 4 orta boy patlıcan<br>• 400 g kıyma<br>• 2 adet soğan<br>• 3 adet domates<br>• 3 yemek kaşığı zeytinyağı<br>• 1 çay kaşığı zerdeçal<br>• Tuz, karabiber`,
      teknik: `1. Patlıcanları dilimle, tuzla 20 dk beklet, süz.<br>2. Az yağda kızart veya fırınla.<br>3. Kıymayı soğanla kavur, domates ve baharat ekle.<br>4. Fırın kabına kat kat diz, 180°C’de 40 dakika pişir.`,
      kalori: "yaklaşık 1800 kcal (1 porsiyon ≈ 450 kcal)",
      fayda: "Zerdeçal anti-inflamatuar etki gösterir, sindirimi kolaylaştırır.",
      alerjen: "Et (kıyma) içerir.",
      maliyet: "4 kişilik ≈ 190-230 TL",
      gorsel: "musakka.jpg"
    },
    "menemen": {
      baslik: "Menemen",
      porsiyon: "2 kişilik",
      malzemeler: `• 3 adet yumurta<br>• 2 adet domates<br>• 2 adet yeşil biber<br>• 1 adet soğan<br>• 2 yemek kaşığı zeytinyağı<br>• Tuz, karabiber, pul biber`,
      teknik: `1. Soğanı yemeklik doğra, yağda kavur.<br>2. Biberleri ekle, 2-3 dk sotele.<br>3. Domatesleri ekle, suyunu çekene kadar pişir.<br>4. Yumurtaları kır, karıştırarak pişir.`,
      kalori: "yaklaşık 450 kcal (2 kişilik)",
      fayda: "Domates likopen açısından zengindir, bağışıklığı destekler.",
      alerjen: "Yumurta içerir.",
      maliyet: "2 kişilik ≈ 40-60 TL",
      gorsel: ""
    },
    "mercimek çorbası": {
      baslik: "Mercimek Çorbası",
      porsiyon: "4-6 kişilik",
      malzemeler: `• 1 su bardağı kırmızı mercimek<br>• 1 adet soğan<br>• 1 adet havuç<br>• 1 yemek kaşığı un<br>• 2 yemek kaşığı tereyağı<br>• Tuz, karabiber, kimyon`,
      teknik: `1. Soğan ve havucu yemeklik doğra, yağda kavur.<br>2. Unu ekle, kokusu çıkana kadar kavur.<br>3. Mercimeği ve 5-6 su bardağı suyu ekle, kaynat.<br>4. Blenderdan geçir, baharatla servis et.`,
      kalori: "yaklaşık 1200 kcal (6 kişilik)",
      fayda: "Mercimek yüksek protein ve demir içerir, kansızlığa iyi gelir.",
      alerjen: "Gluten (un) ve süt ürünü (tereyağı) içerebilir.",
      maliyet: "6 kişilik ≈ 50-70 TL",
      gorsel: ""
    },
    "köfte": {
      baslik: "İzmir Köfte",
      porsiyon: "4 kişilik",
      malzemeler: `• 500 g kıyma<br>• 1 adet soğan<br>• 1 dilim bayat ekmek<br>• 1 yumurta<br>• Tuz, karabiber, kimyon<br>• Patates, domates, biber`,
      teknik: `1. Kıymayı soğan, ekmek ve baharatla yoğur, şekil ver.<br>2. Köfteleri kızart.<br>3. Patatesleri kızart, domates-biber ekle.<br>4. Hepsi bir arada fırında 25 dk pişir.`,
      kalori: "yaklaşık 2200 kcal (4 kişilik)",
      fayda: "Kıyma protein deposudur, kas yapımını destekler.",
      alerjen: "Et ve yumurta içerir. Gluten (ekmek) içerebilir.",
      maliyet: "4 kişilik ≈ 200-250 TL",
      gorsel: ""
    },
    "mantı": {
      baslik: "Mantı",
      porsiyon: "4 kişilik",
      malzemeler: `• 3 su bardağı un<br>• 1 yumurta<br>• 300 g kıyma<br>• 1 adet soğan<br>• Yoğurt, tereyağı, nane, sarımsak`,
      teknik: `1. Hamuru yoğur, ince aç, küçük kareler kes.<br>2. İç harcı koyup kapat.<br>3. Kaynar suda haşla.<br>4. Üzerine sarımsaklı yoğurt ve kızdırılmış tereyağı dök.`,
      kalori: "yaklaşık 2400 kcal (4 kişilik)",
      fayda: "Ev yapımı mantı doyurucu ve lezzetlidir.",
      alerjen: "Gluten, yumurta, et ve süt ürünü içerir.",
      maliyet: "4 kişilik ≈ 150-200 TL",
      gorsel: ""
    },
    "lahmacun": {
      baslik: "Lahmacun",
      porsiyon: "4 adet",
      malzemeler: `• 3 su bardağı un<br>• 200 g kıyma<br>• 1 adet soğan<br>• 1 adet domates<br>• 1 adet biber<br>• Maydanoz, tuz, karabiber, pul biber`,
      teknik: `1. Hamuru yoğur, dinlendir, ince aç.<br>2. İç harcı hazırla, hamura yay.<br>3. Taş fırında veya tavada yüksek ateşte pişir.`,
      kalori: "yaklaşık 1600 kcal (4 adet)",
      fayda: "İnce hamur + bol sebze ile daha hafif olur.",
      alerjen: "Gluten ve et içerir.",
      maliyet: "4 adet ≈ 120-160 TL",
      gorsel: ""
    },
    "etli nohut": {
      baslik: "Etli Nohut Yemeği",
      porsiyon: "4-5 kişilik",
      malzemeler: `• 2 su bardağı nohut (haşlanmış)<br>• 300 g kuşbaşı et<br>• 1 adet soğan<br>• 1 yemek kaşığı salça<br>• Zeytinyağı, tuz, karabiber, kimyon`,
      teknik: `1. Eti soğanla kavur.<br>2. Salçayı ekle, kokusu çıkana kadar kavur.<br>3. Nohutu ve suyu ekle, yumuşayana kadar pişir.`,
      kalori: "yaklaşık 1800 kcal (5 kişilik)",
      fayda: "Nohut yüksek lif ve protein içerir, uzun süre tok tutar.",
      alerjen: "Et içerir.",
      maliyet: "5 kişilik ≈ 220-280 TL",
      gorsel: ""
    }
  };

  let bulunan = null;
  for (let key in tarifler) {
    if (ad.includes(key) || key.includes(ad)) {
      bulunan = tarifler[key];
      break;
    }
  }

  if (bulunan) {
    sonucDiv.style.display = 'block';
    sonucDiv.innerHTML = `
      <h2>${bulunan.baslik}</h2>
      ${bulunan.gorsel ? `<img src="${bulunan.gorsel}" alt="${bulunan.baslik}" class="yemek-gorseli">` : ''}
      <p><strong>Minimum porsiyon:</strong> ${bulunan.porsiyon}</p>
      <p><strong>Malzemeler:</strong><br>${bulunan.malzemeler}</p>
      <p><strong>Pişirme tekniği:</strong><br>${bulunan.teknik}</p>
      <p><strong>Kalori:</strong> ${bulunan.kalori}</p>
      <p><strong>Faydaları:</strong><br>${bulunan.fayda}</p>
      <p><strong>Alerjen uyarısı:</strong><br>${bulunan.alerjen}</p>
      <p><strong>Güncel yaklaşık maliyet:</strong><br>${bulunan.maliyet}</p>
      <div class="not">Bu tarif tamamen orijinaldir • Telif hakkı ihlali yoktur</div>
    `;
  } else {
    sonucDiv.style.display = 'block';
    sonucDiv.innerHTML = `
      <h2>Tarif bulunamadı</h2>
      <p>Mevcut tarifler:<br>
      <strong>patlıcan musakka, menemen, mercimek çorbası, köfte, mantı, lahmacun, etli nohut</strong></p>
    `;
  }
}
