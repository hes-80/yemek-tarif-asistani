function tarifGetir() {
  const ad = document.getElementById('yemekAdi').value.toLowerCase().trim();
  const sonucDiv = document.getElementById('sonuc');

  if (ad.includes('patlıcan') || ad.includes('musakka')) {
    sonucDiv.style.display = 'block';
    sonucDiv.innerHTML = `
      <h2>Patlıcan Musakka</h2>
      
      <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80" 
           alt="Patlıcan Musakka" 
           class="yemek-gorseli"
           onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Musakka.jpg'">
      
      <p><strong>Minimum porsiyon:</strong> 4 kişilik</p>
      
      <p><strong>Malzemeler:</strong><br>
      • 4 orta boy patlıcan<br>
      • 400 g kıyma<br>
      • 2 adet soğan<br>
      • 3 adet domates<br>
      • 3 yemek kaşığı zeytinyağı<br>
      • 1 çay kaşığı zerdeçal<br>
      • Tuz, karabiber</p>
      
      <p><strong>Pişirme tekniği:</strong><br>
      1. Patlıcanları dilimle, tuzla 20 dk beklet, süz.<br>
      2. Az yağda kızart veya fırınla.<br>
      3. Kıymayı soğanla kavur, domates ve baharat ekle.<br>
      4. Fırın kabına kat kat diz, 180°C’de 40 dakika pişir.</p>
      
      <p><strong>Kalori (4 kişilik toplam):</strong> yaklaşık 1800 kcal<br>
      (1 porsiyon ≈ 450 kcal)</p>
      
      <p><strong>Zerdeçal’ın faydaları:</strong><br>
      Anti-inflamatuar etki gösterir, sindirimi kolaylaştırır, güçlü antioksidandır.</p>
      
      <p><strong>Alerjen uyarısı:</strong><br>
      Et (kıyma) içerir. Gluten ve süt ürünü yoktur. Et alerjisi olanlar dikkat etsin.</p>
      
      <p><strong>Güncel yaklaşık maliyet (Ağustos 2026 – Türkiye ortalaması):</strong><br>
      4 kişilik ≈ 190-230 TL</p>
      
      <div class="not">
        Bu tarif tamamen orijinaldir • Telif hakkı ihlali yoktur
      </div>
    `;
  } else {
    sonucDiv.style.display = 'block';
    sonucDiv.innerHTML = `
      <h2>Tarif bulunamadı</h2>
      <p>Şimdilik sadece <strong>“patlıcan musakka”</strong> örneği hazır.<br>
      Diğer tarifleri birlikte ekleyeceğiz.</p>
    `;
  }
}