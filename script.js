function tarifGetir() {
  // Türkçe karakterleri düzelt + boşlukları sil
  let ad = document.getElementById('yemekAdi').value.toLowerCase().trim();
  ad = ad.replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i')
         .replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
         .replace(/\s+/g, '');

  const sonucDiv = document.getElementById('sonuc');

  const tarifler = {
    "patlicanmusakka": {
      baslik: "Patlıcan Musakka",
      porsiyon: "4 kişilik",
      malzemeler: `• 4 orta boy patlıcan (≈ 70 TL)<br>
• 400 g dana kıyma (≈ 320 TL)<br>
• 2 adet soğan (≈ 14 TL)<br>
• 3 adet domates (≈ 30 TL)<br>
• 3 yemek kaşığı zeytinyağı (≈ 15 TL)<br>
• 1 çay kaşığı zerdeçal + tuz, karabiber (≈ 5 TL)`,
      teknik: `1. Patlıcanları yuvarlak dilimle, tuz serpip 20-25 dakika beklet, acısını ve suyunu süz, kağıt havlu ile kurula.<br>
2. Az zeytinyağında veya fırında 180°C’de hafif kızarana kadar pişir.<br>
3. Kıymayı soğanla birlikte kavur, domatesleri ekle, baharatları atıp 8-10 dakika pişir.<br>
4. Fırın kabına bir kat patlıcan, bir kat kıymalı harç şeklinde diz. En üste domates dilimi koyabilirsin.<br>
5. 180°C önceden ısıtılmış fırında 35-40 dakika pişir.`,
      kalori: "yaklaşık 1800 kcal (1 porsiyon ≈ 450 kcal)",
      fayda: "Zerdeçal anti-inflamatuar ve sindirim dostudur.",
      alerjen: "Et (kıyma) içerir.",
      maliyet: "4 kişilik toplam ≈ 450-480 TL",
      gorsel: "musakka.jpg"
    },
    "menemen": {
      baslik: "Menemen",
      porsiyon: "2 kişilik",
      malzemeler: `• 3 adet yumurta (≈ 18 TL)<br>
• 2 adet domates (≈ 20 TL)<br>
• 2 adet yeşil biber (≈ 12 TL)<br>
• 1 adet soğan (≈ 7 TL)<br>
• 2 yemek kaşığı zeytinyağı (≈ 10 TL)<br>
• Tuz, karabiber, pul biber (≈ 3 TL)`,
      teknik: `1. Soğanı yemeklik doğra, zeytinyağında pembeleşene kadar kavur.<br>
2. Biberleri ince doğrayıp ekle, 2-3 dakika sotele.<br>
3. Domatesleri rendele veya küp küp doğra, ekle. Suyunu çekene kadar 5-6 dakika pişir.<br>
4. Yumurtaları kırıp karıştırarak ekle. İstediğin kıvama gelince ocaktan al.<br>
5. Üzerine pul biber serpip sıcak servis et.`,
      kalori: "yaklaşık 450 kcal (2 kişilik)",
      fayda: "Domates likopen açısından zengindir, bağışıklığı destekler.",
      alerjen: "Yumurta içerir.",
      maliyet: "2 kişilik toplam ≈ 70-75 TL",
      gorsel: "menemen.jpg"
    },
    "mercimekcorbasi": {
      baslik: "Mercimek Çorbası",
      porsiyon: "5-6 kişilik",
      malzemeler: `• 1 su bardağı kırmızı mercimek (≈ 18 TL)<br>
• 1 adet soğan (≈ 7 TL)<br>
• 1 adet havuç (≈ 6 TL)<br>
• 1 yemek kaşığı un (≈ 2 TL)<br>
• 2 yemek kaşığı tereyağı (≈ 25 TL)<br>
• Tuz, karabiber, kimyon (≈ 4 TL)`,
      teknik: `1. Soğan ve havucu yemeklik doğra, tereyağında kavur.<br>
2. Unu ekle, kokusu çıkana kadar 1-2 dakika kavur.<br>
3. Yıkanmış mercimeği ekle, 6 su bardağı sıcak suyu dök.<br>
4. Kaynayınca altını kıs, 20-25 dakika pişir.<br>
5. Blenderdan geçir, baharatları ekle. Kıvamı koyu olursa su ilave et.`,
      kalori: "yaklaşık 1200 kcal (6 kişilik)",
      fayda: "Mercimek yüksek protein ve demir içerir.",
      alerjen: "Gluten (un) ve süt ürünü (tereyağı) içerebilir.",
      maliyet: "6 kişilik toplam ≈ 65-75 TL",
      gorsel: "mercimek.jpg"
    },
    "kofte": {
      baslik: "İzmir Köfte",
      porsiyon: "4 kişilik",
      malzemeler: `• 500 g dana kıyma (≈ 400 TL)<br>
• 1 adet soğan (≈ 7 TL)<br>
• 1 dilim bayat ekmek içi (≈ 3 TL)<br>
• 1 yumurta (≈ 6 TL)<br>
• Tuz, karabiber, kimyon (≈ 4 TL)<br>
• 3-4 adet patates (≈ 25 TL)<br>
• 2 adet domates + 2 biber (≈ 25 TL)`,
      teknik: `1. Kıymayı, rendelenmiş soğanı, ıslatılmış ekmek içini, yumurtayı ve baharatları iyice yoğur. 15 dakika dinlendir.<br>
2. Köfte şekli verip az yağda her iki tarafını kızart.<br>
3. Patatesleri dilimleyip kızart veya fırınla.<br>
4. Fırın kabına köfteleri, patatesleri, domates ve biber dilimlerini diz.<br>
5. 180°C fırında 25-30 dakika pişir.`,
      kalori: "yaklaşık 2200 kcal (4 kişilik)",
      fayda: "Yüksek protein içerir.",
      alerjen: "Et, yumurta ve gluten (ekmek) içerir.",
      maliyet: "4 kişilik toplam ≈ 470-500 TL",
      gorsel: "kofte.jpg"
    },
    "manti": {
      baslik: "Mantı",
      porsiyon: "4 kişilik",
      malzemeler: `• 3 su bardağı un (≈ 12 TL)<br>
• 1 yumurta (≈ 6 TL)<br>
• 300 g kıyma (≈ 240 TL)<br>
• 1 adet soğan (≈ 7 TL)<br>
• Yoğurt + sarımsak (≈ 25 TL)<br>
• Tereyağı + nane (≈ 20 TL)`,
      teknik: `1. Un, yumurta, tuz ve su ile sertçe bir hamur yoğur. 30 dk dinlendir.<br>
2. Hamuru çok ince aç, küçük kareler kes.<br>
3. İç harcı (kıyma + soğan) koyup üçgen veya kese şeklinde kapat.<br>
4. Kaynar tuzlu suda 8-10 dakika haşla.<br>
5. Süz, sarımsaklı yoğurt dök, üzerine kızdırılmış tereyağı ve nane gezdir.`,
      kalori: "yaklaşık 2400 kcal (4 kişilik)",
      fayda: "Doyurucu ve lezzetli bir ana yemektir.",
      alerjen: "Gluten, yumurta, et ve süt ürünü içerir.",
      maliyet: "4 kişilik toplam ≈ 310-340 TL",
      gorsel: ""
    },
    "lahmacun": {
      baslik: "Lahmacun",
      porsiyon: "4 adet",
      malzemeler: `• 3 su bardağı un (≈ 12 TL)<br>
• 200 g dana kıyma (≈ 160 TL)<br>
• 1 adet soğan (≈ 7 TL)<br>
• 1 adet domates (≈ 10 TL)<br>
• 1 adet yeşil biber (≈ 6 TL)<br>
• 1 demet maydanoz (≈ 8 TL)<br>
• Tuz, karabiber, pul biber, kimyon (≈ 5 TL)<br>
• 2 yemek kaşığı zeytinyağı (≈ 10 TL)`,
      teknik: `1. Hamur için: Unu kaba al, ortasını aç. 1 çay kaşığı tuz + 1 su bardağı ılık su ekle. Yoğur, yumuşak ele yapışmayan hamur olana kadar 8-10 dk yoğur. Üzerini örtüp 30 dk dinlendir.<br>
2. İç harç: Soğan, domates, biber ve maydanozu çok ince doğra. Kıyma, baharatlar ve zeytinyağı ile iyice karıştır.<br>
3. Hamuru 4 eşit bezeye ayır. Her bezeyi çok ince (yufka inceliğinde) aç.<br>
4. Harcı eşit şekilde yayıp kenarlara 1 cm boşluk bırak.<br>
5. Önceden ısıtılmış taş fırında veya çok sıcak tavada 3-4 dk pişir.`,
      kalori: "yaklaşık 1600 kcal (4 adet toplam)",
      fayda: "İnce hamur + bol sebze ile daha hafif olur.",
      alerjen: "Gluten ve et içerir.",
      maliyet: "4 adet toplam ≈ 220-230 TL",
      gorsel: ""
    },
    "etlinohut": {
      baslik: "Etli Nohut Yemeği",
      porsiyon: "5 kişilik",
      malzemeler: `• 2 su bardağı haşlanmış nohut (≈ 40 TL)<br>
• 300 g kuşbaşı et (≈ 280 TL)<br>
• 1 adet soğan (≈ 7 TL)<br>
• 1 yemek kaşığı salça (≈ 5 TL)<br>
• 3 yemek kaşığı zeytinyağı (≈ 15 TL)<br>
• Tuz, karabiber, kimyon (≈ 4 TL)`,
      teknik: `1. Eti zeytinyağında kavur, soğanı ekle pembeleşince salçayı atıp 2-3 dakika kavur.<br>
2. Nohutu ve 3-4 su bardağı sıcak suyu ekle.<br>
3. Baharatları koy, kısık ateşte nohutlar yumuşayana kadar 40-50 dakika pişir.<br>
4. Suyu azalırsa azar azar sıcak su ekle.`,
      kalori: "yaklaşık 1800 kcal (5 kişilik)",
      fayda: "Nohut yüksek lif ve protein içerir, uzun süre tok tutar.",
      alerjen: "Et içerir.",
      maliyet: "5 kişilik toplam ≈ 350-370 TL",
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
      ${bulunan.gorsel ? `<img src="${bulunan.gorsel}" alt="${bulunan.baslik}" class="yemek-gorseli">` : '<p style="color:#888; font-style:italic;">(Görsel yakında eklenecek)</p>'}
      <p><strong>Minimum porsiyon:</strong> ${bulunan.porsiyon}</p>
      <p><strong>Malzemeler (güncel maliyetlerle):</strong><br>${bulunan.malzemeler}</p>
      <p><strong>Pişirme tekniği:</strong><br>${bulunan.teknik}</p>
      <p><strong>Kalori:</strong> ${bulunan.kalori}</p>
      <p><strong>Faydaları:</strong><br>${bulunan.fayda}</p>
      <p><strong>Alerjen uyarısı:</strong><br>${bulunan.alerjen}</p>
      <p><strong>Güncel yaklaşık maliyet (Ağustos 2026 – A101/BİM/Şok/Migros):</strong><br>${bulunan.maliyet}</p>
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
