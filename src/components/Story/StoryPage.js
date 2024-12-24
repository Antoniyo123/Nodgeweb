import React, { useState } from 'react';
import '../../css/Story/StoryPage.css';

const articles = [
  {
    id: 1,
    category: 'COLUMN',
    date: '12.09.24',
    headline: 'Dear Pilkada 2024',
    excerpt: 'Rabu (21/8/24) DPR RI menyampaikan keinginannya untuk merevisi putusan Mahkamah Konstitusi (MK) dalam Putusan Nomor 60/PUU-XXXII/2024 dan Nomor 70/PPU-XXII/2024 terkait pencalonan kepala daerah...',
    image: require('../../img/Story/COVER STORY PILKADA.png')
  },
  {
    id: 2,
    category: 'MUSIC',
    date: '11.09.24',
    headline: 'Kramat V: Love in the name of Jesus',
    excerpt: 'Kramat V mungkin hanya nama jalan biasa diantara nama-nama jalan penting lainnya di Jakarta. Namun, buat sebagian orang, terlebih bagi mereka yang tinggal dan melihat langsung fenomena kemunculan Tuhan Yesus di 2001...',
    image: require('../../img/Story/COVER STORY.png')
  },
  {
    id: 3,
    category: 'COLUMN',
    date: '05.06.24',
    headline: "Terperangkap Dua Pilihan dan Begitulah 'Polarisasi Musikal' (rerun)",
    excerpt: "Content creator Jovial dan Andovi da Lopez yang beberapa tahun ke belakang tengah bertaruh pada dunia teater musikal, kembali menggelar 'Polarisasi Musikal' (rerun) pada...",
    image: require('../../img/Story/STORY POLARISASI.png')
  },
  {
    id: 4,
    category: 'COLUMN',
    date: '12.09.24',
    headline: 'SBY PESTAPORA 2024: MASIH INGAT AKU?',
    excerpt: '"SBY, SBY, SBY," begitulah teriakan para penonton Pestapora 2024 saat tahu bahwa Presiden ke-6 Republik Indonesia, Susilo Bambang Yudhoyono atau yang kerap disapa SBY, memasuki panggung Pestapora Stage...',
    image: require('../../img/Story/SBY PESPOR.png')
  },
  {
    id: 5,
    category: 'MUSIC',
    date: '11.09.24',
    headline: 'Merawat Kesehatan Mental di Atas Kursi Indomaret',
    excerpt: 'Kaos hitam oblong dibalut kemeja flanel yang lusuh dengan kartu identitas menggantung, Rama (25), seorang wartawan media online masuk ke dalam Indomaret berdiri di depan barisan kulkas, kepalanya meliuk-liuk mencari minuman kemasan dengan harga miring...',
    image: require('../../img/Story/INDOMARET.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: '“Mari Ber-Lenso” Tanda Negara Masih Butuh Revolusi',
    excerpt: 'Pernahkah membayangkan apa jadinya kalau negeri ini hanya ada lagu berbahasa Indonesia dengan irama musik yang diciptakan sendiri?...',
    image: require('../../img/Story/berlenso 2.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Coding Party Bersama Algorapture',
    excerpt: 'Jumat minggu lalu, Tim Redaksi Nodge+ berkesempatan untuk datang ke sebuah acara bernama Algorapture yang berlangsung di Krapela, Row 9, Blok M, Jakarta Selatan....',
    image: require('../../img/Story/ALGORUPTURE FB.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Siapapun Presidennya, Tetaplah Bersepeda Seperti Pak Udin',
    excerpt: 'Di acara Pesta Rakyat hari Minggu (20/10), sebagian masyarakat Indonesia turun ke sepanjang Jalan Sudirman hingga kawasan Bundaran HI untuk merayakan dilantiknya Prabowo Subianto dan Gibran Rakabuming Raka sebagai Presiden dan Wakil Presiden Indonesia ke-8...',
    image: require('../../img/Story/PAK UDIN.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Begini Nasib Perantau Di Pilkada 2024',
    excerpt: 'Beberapa lembaga survei ternama di Indonesia sudah mulai menunjukan hasil hitung cepat mereka dalam Pemilihan Kepala Daerah (Pilkada) 2024. Hasilnya tentu bisa memuaskan dan bisa juga tidak...',
    image: require('../../img/Story/STORY COVER.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Bagi Gen Z, Antara Menurunkan Parameter atau Tidak Menikah Sama Sekali',
    excerpt: 'Ilham Faza (23), seorang pemuda asal Jakarta yang selama tahun 2024 ini masih kesulitan mencari pekerjaan, begitu pangling saat ditanya kapan menikah oleh temannya...',
    image: require('../../img/Story/COVER GEN Z.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Saya Siap Bekerja, Tapi Bentar Denger EP pasang Dulu dari Swellow',
    excerpt: 'Memasuki penghujung tahun, nampaknya merenungkan kehidupan yang begitu-begitu saja adalah hal wajib bagi kita kaum tengah dan medioker...',
    image: require('../../img/Story/SWELLOW.png')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Supir Akhirat: Teman Perjalanan Terakhir Sebelum Liang Kubur',
    excerpt: 'Memasuki akhir bulan Oktober, suasana seolah langsung berubah menjadi lebih mistis. Mungkin ini karena perayaan Halloween yang jatuh pada tanggal 31 Oktober. Di Indonesia sendiri, Halloween tidak dirayakan sesuai sejarah...',
    image: require('../../img/Story/KEMATIAN FB.png')
  }
];

const categories = ['ALL', 'COLUMN', 'MUSIC', 'ART', 'CULTURE'];

const ArticlePage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredArticles = activeCategory === 'ALL' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className='story__container'>
      <header className="page-header">
        <h1 className="page-title">Our Stories</h1>
        <p className="page-subtitle">Discover the latest stories, interviews, and insights</p>
      </header>

      {/* <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className="articles-container">
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image-wrapper">
                <img 
                  src={article.image}
                  alt={article.headline}
                  className="article-image"
                />
                <div className="article-overlay" />
                
                <div className="article-content">
                  <div className="article-meta">
                    {/* <span>{article.category}</span> */}
                    {/* <span>{article.date}</span> */}
                  </div>
                  <h2 className="article-headline">
                    {article.headline}
                  </h2>

                </div>
              </div>
              <p className="article-excerpt">
                    {article.excerpt}
                  </p>
                  <a href="#" className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;