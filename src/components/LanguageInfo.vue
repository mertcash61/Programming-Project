<template>
  <div class="language-info">
    <div v-for="language in languages" :key="language.id" :id="language.id" class="language-card">
      <h2>{{ language.name }}</h2>
      <article>
        <h3>{{ language.name }} Hakkında</h3>
        <p>{{ language.description }}</p>
        <h4>Özellikler:</h4>
        <ul>
          <li v-for="(feature, index) in language.features" :key="index">
            {{ feature }}
          </li>
        </ul>
        <h4>Kullanım Alanları:</h4>
        <ul>
          <li v-for="(usage, index) in language.usages" :key="index">
            {{ usage }}
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script class="language-info">
export default {
  name: 'LanguageInfo',
  data() {
    return {
      languages: [
        {
          id: 'pascal',
          name: 'Pascal',
          description: 'Pascal, eğitim amaçlı olarak geliştirilmiş, yapısal programlama paradigmasını destekleyen bir programlama dilidir.',
          features: [
            'Güçlü tip sistemi',
            'Kolay okunabilir sözdizimi',
            'Yapısal programlama desteği'
          ],
          usages: [
            'Eğitim',
            'Sistem programlama',
            'Bilimsel hesaplamalar'
          ]
        },
        {
          id: 'basic',
          name: 'BASIC',
          description: 'BASIC, başlangıç seviyesindeki programcılar için tasarlanmış, öğrenmesi kolay bir programlama dilidir.',
          features: [
            'Basit sözdizimi',
            'Yorumlanan dil',
            'Eğitim odaklı tasarım'
          ],
          usages: [
            'Eğitim programlama',
            'Basit uygulamalar',
            'Hobi projeleri'
          ]
        },
        {
          id: 'c',
          name: 'C',
          description: 'C, sistem programlama için geliştirilmiş, yüksek performanslı ve taşınabilir bir programlama dilidir.',
          features: [
            'Donanıma yakın programlama',
            'Yüksek performans',
            'Platform bağımsızlık'
          ],
          usages: [
            'İşletim sistemleri',
            'Gömülü sistemler',
            'Sistem yazılımları'
          ]
        },
        {
          id: 'cobol',
          name: 'COBOL',
          description: 'COBOL, iş dünyası için geliştirilmiş, veri işleme odaklı bir programlama dilidir.',
          features: [
            'İş odaklı sözdizimi',
            'Güçlü veri işleme yetenekleri',
            'Mainframe sistemlerle uyumluluk'
          ],
          usages: [
            'Bankacılık sistemleri',
            'Finans uygulamaları',
            'Kurumsal veri işleme'
          ]
        },
        {
          id: 'perl',
          name: 'Perl',
          description: 'Perl, metin işleme ve sistem yönetimi için güçlü özelliklere sahip bir programlama dilidir.',
          features: [
            'Güçlü metin işleme',
            'Regular expression desteği',
            'Sistem yönetimi araçları'
          ],
          usages: [
            'Sistem administrasyonu',
            'Web geliştirme',
            'Metin işleme uygulamaları'
          ]
        },
        {
          id: 'ada',
          name: 'Ada',
          description: 'Ada, güvenilirlik ve güvenlik odaklı, askeri ve havacılık uygulamaları için geliştirilmiş bir dildir.',
          features: [
            'Güçlü tip kontrolü',
            'Paralel programlama desteği',
            'Yüksek güvenilirlik'
          ],
          usages: [
            'Havacılık sistemleri',
            'Askeri uygulamalar',
            'Gerçek zamanlı sistemler'
          ]
        },
        {
          id: 'fortran',
          name: 'Fortran',
          description: 'Fortran, bilimsel hesaplamalar için geliştirilmiş ilk yüksek seviyeli programlama dilidir.',
          features: [
            'Bilimsel hesaplama optimizasyonu',
            'Matris işlemleri desteği',
            'Yüksek performans'
          ],
          usages: [
            'Bilimsel hesaplamalar',
            'Nümerik analiz',
            'Fizik simülasyonları'
          ]
        },
        {
          id: 'delphi',
          name: 'Delphi',
          description: 'Delphi, hızlı uygulama geliştirme için tasarlanmış, Pascal tabanlı bir programlama dilidir.',
          features: [
            'Görsel programlama araçları',
            'Hızlı uygulama geliştirme',
            'Veritabanı entegrasyonu'
          ],
          usages: [
            'Masaüstü uygulamaları',
            'İş uygulamaları',
            'Veritabanı uygulamaları'
          ]
        },
        {
          id: 'vue',
          name: 'Vue.js',
          description: 'Vue.js, modern web uygulamaları geliştirmek için kullanılan progresif bir JavaScript framework\'üdür.',
          features: [
            'Reaktif veri bağlama',
            'Bileşen tabanlı mimari',
            'Hafif ve esnek yapı'
          ],
          usages: [
            'Single Page Applications',
            'Web arayüzleri',
            'İnteraktif uygulamalar'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.language-info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.language-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

h3 {
  color: #34495e;
  margin: 10px 0;
}

h4 {
  color: #2c3e50;
  margin: 15px 0 10px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  margin: 5px 0;
  color: #666;
}

p {
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}
</style> 