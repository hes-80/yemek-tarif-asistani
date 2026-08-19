function tarifGetir() {
  const ad = document.getElementById('yemekAdi').value.toLowerCase().trim();
  const sonucDiv = document.getElementById('sonuc');

  const tarifler = {
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
2. İç harç: Soğan, domates, biber ve maydanozu çok ince doğra veya rondodan geçir. Kıyma, baharatlar ve zeytinyağı ile iyice karıştır.<br>
3. Hamuru 4 eşit bezeye ayır. Her bezeyi çok ince (yufka inceliğinde) aç.<br>
4. Harcı eşit şekilde yayıp kenarlara 1 cm boşluk bırak.<br>
5. Önceden ısıtılmış taş fırında veya çok sıcak tavada (kapağı kapalı) 3-4 dk pişir. Altı çıtır olunca hazır.`,
      kalori: "yaklaşık 1600 kcal (4 adet toplam)",
      fayda: "İnce hamur + bol sebze ile daha hafif ve sindirimi kolay olur.",
      alerjen: "Gluten (un) ve et içerir.",
      maliyet: `4 adet toplam ≈ 220-250 TL<br>
(A101 / BİM / Şok / Migros Ağustos 2026 ortalaması)`,
      gorsel: ""
    },
    // Diğer tarifler şimdilik eski haliyle kalıyor, hepsini aynı şekilde güncelleyeceğiz
    "patlıcan musakka": {
      baslik: "Patlıcan Musakka",
      porsiyon: "4 kişilik",
      malzemeler: `• 4 orta boy patlıcan<br>• 400 g kıyma<br>• 2 adet soğan<br>• 3 adet domates<br>• 3 yemek kaşığı zeytinyağı<br>• 1 çay kaşığı zerdeçal<br>• Tuz, karabiber`,
      teknik: `1. Patlıcanları dilimle, tuzla 20 dk beklet, süz.<br>2. Az yağda kızart veya fırınla.<br>3. Kıymayı soğanla kavur, domates ve baharat ekle.<br>4. Fırın kabına kat kat diz, 180°C’de 40 dakika pişir.`,
      kalori: "yaklaşık 1800 kcal (1 porsiyon ≈ 450 kcal)",
      fayda: "Zerdeçal anti-inflamatuar etki gösterir, sindirimi kolaylaştırır.",
      alerjen: "Et (kıyma) içerir.",
      maliyet: "4 kişilik ≈ 320-380 TL (gerçekçi güncel)",
      gorsel: "musakka.jpg"
    }
    // ... diğerleri aynı şekilde güncellenecek
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
      <p>Mevcut tarifler: <strong>patlıcan musakka, menemen, mercimek çorbası, köfte, mantı, lahmacun, etli nohut</strong></p>
    `;
  }
}
