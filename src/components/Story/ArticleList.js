import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import FeaturedArticleCard from './FeaturedArticleCard';

const ArticleList = () => {
  return (
    <div className="story-container">
      {/* Featured Article */}
      <FeaturedArticleCard 
        article={{
          image: require('../../img/Story/COVER STORY.png'),
          title: "KRAMAT V: LOVE IN THE NAME OF JESUS"
        }} 
      />

      {/* Regular Articles */}
      <div className="regular-articles">
        <ArticleCard 
          article={{
            image: require('../../img/Story/KEMATIAN FB.png'),
            title: "SUPIR AKHIRAT: TEMAN PERJALANAN TERAKHIR SEBELUM LIANG KUBUR",
            excerpt: "Memasuki akhir bulan Oktober, suasana spooky langsung bercerita tumpah tuah pada malam Halloween yang jatuh pada tanggal 31 Oktober. Di Indonesia sendiri..."
          }}
        />
        <ArticleCard 
          article={{
            image: require('../../img/Story/PAK UDIN.png'),
            title: "MEMBELAH BANJIR ROB BERSAMA PAK RACHMIN",
            excerpt: "Memasuki penghujung tahun, nampaknya memberungkan kehidupan yang begitu-begitu saja adalah hal wajib bagi kita kaum tengah dan medioker..."
          }}
        />
        <ArticleCard 
          article={{
            image: require('../../img/Story/SWELLOW.png'),
            title: "SAYA SIAP BEKERJA, TAPI BENTAR DENGEN EP PASANG DULU DARI SWELLOW",
            excerpt: "Memasuki penghujung tahun, nampaknya memberungkan kehidupan yang begitu-begitu saja adalah hal wajib bagi kita kaum tengah dan medioker..."
          }}
        />
      </div>

      {/* More Story Section */}
      <Link to="/stories" className="more-story">
        <div className="more-story-header">
          <h2>MORE STORY</h2>
          <p>Discover the latest stories, interviews, and insights</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleList;