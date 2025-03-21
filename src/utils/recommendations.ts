export function getCategoryRecommendation(category: string): { diet: string; exercise: string } {
  switch (category) {
    case "Zayıf":
      return {
        diet: "Kilo almak için protein, sağlıklı yağlar ve kompleks karbonhidratlar tüketin. Öğün atlamayın ve günlük 5-6 öğün beslenmeye çalışın.",
        exercise: "Ağırlık antrenmanları yaparak kas kazanımını artırabilirsiniz. Hafif kardiyo yaparak kalp sağlığınızı da destekleyin.",
      };
    case "Sağlıklı":
      return {
        diet: "Sağlıklı bir yaşam sürdürmek için sebze, meyve, tam tahıllar ve protein tüketmeye devam edin. Şekerli ve işlenmiş gıdalardan kaçının.",
        exercise: "Haftada en az 150 dakika orta şiddette egzersiz yapın. Yürüyüş, koşu, yoga ve yüzme gibi aktiviteleri tercih edebilirsiniz.",
      };
    case "Kilolu":
      return {
        diet: "Kalori açığı oluşturarak kilo vermek için işlenmiş gıdalardan kaçının. Bol sebze ve protein tüketin, şeker ve basit karbonhidratları azaltın.",
        exercise: "Haftada en az 3-4 gün tempolu yürüyüş veya hafif koşu yapın. Kuvvet antrenmanları ile kas kaybını önleyin.",
      };
    case "Şişman":
      return {
        diet: "Düşük kalorili, dengeli bir diyet uygulayın. Porsiyon kontrolüne dikkat edin ve lif oranı yüksek yiyecekler tüketin.",
        exercise: "Düşük yoğunluklu kardiyo (yürüyüş, yüzme) ile başlayın. Direnç antrenmanlarını doktor veya uzman kontrolünde ekleyin.",
      };
    case "Aşırı Şişman":
      return {
        diet: "Sağlıklı kilo vermek için bir beslenme uzmanı veya diyetisyene danışın. Şeker ve doymuş yağlardan kaçının, dengeli bir diyet uygulayın.",
        exercise: "Doktor kontrolünde uygun egzersizleri belirleyin. Hafif yürüyüşler, su aerobiği veya düşük yoğunluklu aktiviteler önerilir.",
      };
    default:
      return {
        diet: "Dengeli beslenmeye ve hareketli bir yaşam tarzı sürdürmeye devam edin!",
        exercise: "Düzenli egzersiz yaparak formunuzu koruyun.",
      };
  }
}
