import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import './assets/css/index.scss';

import thesis_img1 from './assets/image/thesis-img1.png';
import thesis_img2_1 from './assets/image/thesis-img2-1.png';
import thesis_img2_2 from './assets/image/thesis-img2-2.png';
import thesis_img2_3 from './assets/image/thesis-img2-3.png';
import thesis_img2_4 from './assets/image/thesis-img2-4.png';
import thesis_img3_1 from './assets/image/thesis-img3-1.png';
import thesis_img3_2 from './assets/image/thesis-img3-2.png';
import thesis_img3_3 from './assets/image/thesis-img3-3.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  const updateScreen = () => {
    setScreenHeight(window.innerHeight)
  }
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  React.useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      window.addEventListener('resize', updateScreen);
  });
  return (
    <div className={`header ${scrollPosition > 1 ? 'scrolled' : ''}${scrollPosition > screenHeight ? '2' : ''}`}>
      <a href='' className='header-left'>
        <span className='logo-k'/>
        <span className='logo-g'/>
        <span className='logo-u'/>
      </a>
      <div className='header-right'>
        {/* choiji1995@naver.com */}
        kwin0125@naver.com
      </div>
    </div>
  )
}
const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='main-banner-title'>
        <div className='main-banner-title-top'>
          <motion.div 
            className='main-banner-title-top-1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Future with
          </motion.div>
          <motion.div 
            className='main-banner-title-top-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Sustainable Life
          </motion.div>
        </div>
        <motion.div 
          className='main-banner-title-bot'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1}}
        >
          생명공학의 발전, 지속 가능한 삶이 함께하는 미래를 꿈꿉니다.
        </motion.div>
      </div>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='section1-wrap'>
      <div className='section1'>
        <div className='section1-top'>
          <motion.div
            className='section1-top1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mind • Character
          </motion.div>
          <motion.div
            className='section1-top2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            KGU는 생명공학기술의 <br/>
            지속가능한 미래를 위해 연구합니다.
          </motion.div>
        </div>
        <div className='section1-bot'>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className='img'/>
            <div>
              <p>자연 친화력</p>
              <p>
                생물체의 성격 파악 <br/>
                새로운 약과 줄기세포 제품 <br/>
                기술 개발합니다.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3}}
          >
            <span className='img'/>
            <div>
              <p>수리 논리력</p>
              <p>
                논리적인 구조 판단 <br/>
                짜임새 있는 논리를 <br/>
                도출하기 위해 추론합니다.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6}}
          >
            <span className='img'/>
            <div>
              <p>사색 탐구형</p>
              <p>
                생각과 집중적 성향 <br/>
                호기심이 많고 <br/>
                내용을 깊이 이해합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='section2-wrap'>
      <div className='section2'>
        <motion.div 
          className='section2-img'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <div className='section2-content'>
          <div className='section2-content-top'>
            <motion.div
              className='section2-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>About</span> KGU
            </motion.div>
            <motion.div
              className='section2-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              생명의 아름다움을 전하는 연구원 <br/>
              <span>김건욱</span>입니다.
            </motion.div>
          </div>
          <motion.div
            className='section2-content-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='tag'> # 생명의 아름다움을 탐구하는 자세 </div>
            <div className='tag'> # 올바른 성장, 따뜻한 나눔 </div>
          </motion.div>
          <motion.div
            className='section2-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            예술과 자연 그리고 생명은 하나라고 생각합니다. <br/>
            예술이란 생명체가 느끼는 아름다움이고, 그러한 예술에 아름다움을 느끼는 이유는<br/>
            생명이 갖는 고유의 성격이 예술에도 반영되었기 때문입니다.<br/>
            <br/>
            저는 생명을 탐구하는 것 자체가 예술이고, 인간이 즐길 수 있는 큰 재미라고 생각합니다.<br/>
            인간은 생명이란 큰 범주 안에 드는 하나의 존재이기에,<br/>
            다른 생명을 탐구하고 그 존재에 대해 의문과 논리적인 사색을 갖을 수 있습니다.<br/>
            <br/>
            이러한 생명 탐구의 자세는 우리에게 아름다움과 기쁨도 주지만,<br/>
            궁극적으로 의학 발전에 도움이 되고, 더 나은 미래의 편리함을 보여줍니다.<br/>
            <br/>
            <p className='accent'>지속가능한 미래! 혼자가 아닌, 함께 그려나가고 싶습니다.</p>
          </motion.div>
        </div>
        
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <div className='section3-wrap'>
      <div className='section3'>
        <div className='section3-content'>
          <p className='title'>Graduation</p>
          <div className='contents'>
            <div className='item'>
              <p>2021</p>
              <p>연세대학교 미래캠퍼스 생명과학과 학사 졸업</p>
            </div>
            <div className='item'>
              <p>2023</p>
              <p>연세대학교 신촌캠퍼스 생명공학과 석사 졸업</p>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <p className='title'>Skills</p>
          <div className='contents'>
            <div className='item'>
              <p>#</p>
              <p>Cell culture & Viability test</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>Immunocytochemistry</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>Protein extraction & Western blot</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>Pyruvate kinase activity test</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>Ex vivo vibrissa assay</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>H&E staining</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>PCR</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>Pipette</p>
            </div>
            <div className='item'>
              <p>#</p>
              <p>Optical & Confocal microscope</p>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <p className='title'>Papers</p>
          <div className='contents'>
            <div className='item'>
              <p>BMB reports</p>
              <p>Wnt/β-catenin signaling activator restores hair regeneration suppressed by diabetes mellitus </p>
            </div>
            <div className='item'>
              <p>Pharmaceutics</p>
              <p>Pyruvate Kinase M2 Promotes Hair Regeneration by Connecting Metabolic and Wnt/β-Catenin Signaling </p>
            </div>
            <div className='item'>
              <p>Cells</p>
              <p>CXXC5 Mediates DHT-Induced Androgenetic Alopecia via PGD2 </p>
            </div>
            <div className='item'>
              <p>International Journal <br/> of Molecular Sciences</p>
              <p>KY19382 Accelerates Cutaneous Wound Healing via Activation of the Wnt/β-Catenin Signaling Pathway </p>
            </div>
            <div className='item'>
              <p>Pharmaceutics</p>
              <p>Pyruvate kinase M2 Accelerates Cutaneous Wound Healing via Glycolysis and Wnt/β-Catenin Signaling </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Section4 = () => {
  return (
    <div className='section4-wrap'>
      <div className='section4'>
        <div className='section4-content'>
          <p className='title'>Patent</p>
          <div className='contents'>
            <div className='item'>
              <p>
                최강열•류영찬•김건욱 <br/>
                (10-2023-0015930)
              </p>
              <p>
                인디루빈 유도체 및 대사활성화제를 포함하는 탈모 방지 또는 발모 촉진용 조성물 <br/> 
                2023-02-07
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section5 = () => {
  const [current, setCurrent] = React.useState(1);
  return (
    <div className='section5-wrap'>
      <div className='section5'>
        <div className='section5-top'>
          <div className='section5-top1' >
            Graduation Thesis
          </div>
          <div className='section5-top2' >
            <p> 모유두세포와 모델 마우스를 통한 L-serine의 탈모 개선 효과 연구 </p>
            <p> L-Serine accelerates hair regrowth by stimulating dermal papilla cells and activating hair follicle stem cells </p>
          </div>
        </div>
        <div className='section5-bot'>
          <div 
            onClick={()=>{
              if ( current !== 1 ) {
                setCurrent(current - 1);
              }
            }} 
            className={`arrow-left ${current == 1 ? 'disabled' : ''}`}
          >
            <p/>
          </div>
          <div className='section5-bot-content'>
            <div className={`item ${current == 1 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img1} alt='thesis1'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 2 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_1} alt='thesis1'/>
                  </div>
                  <p className='desc'>
                    Cell viability test
                  </p>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_2} alt='thesis1'/>
                  </div>
                  <p className='desc'>
                    Pyruvate kinase (PK) <br/>
                    activity test
                  </p>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_3} alt='thesis1'/>
                  </div>
                  <p className='desc'>
                    Immunocytochemistry <br/>
                    (ICC)
                  </p>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_4} alt='thesis1'/>
                  </div>
                  <p className='desc'>
                    Western blot
                  </p>
                </div>
              </div>
              <div className='desc'>
                <p>Cell study에서는 모발 성장의 핵심 세포인 Dermal papilla cell(모유두세포)를 타겟으로 진행하였습니다.</p>
                <p>인간의 primary dermal papilla cell을 사용하였고, L-serine을 처리 시에 세포의 생존율과 PK 활성 등을 평가하였습니다.</p>
                <p>모유두세포의 활성 마커인 Versican의 활성을 평가하기 위해 ICC와 Western blot을 수행하였습니다.</p>
              </div>
            </div>
            <div className={`item ${current == 3 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3_1} alt='thesis1'/>
                  </div>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3_2} alt='thesis1'/>
                  </div>
                  <p className='desc'>
                    Ex vivo vibrissa culture
                  </p>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3_3} alt='thesis1'/>
                  </div>
                  <p className='desc'>
                    Immunohistochemistry <br/>
                    (IHC)
                  </p>
                </div>
              </div>
              <div className='desc'>
                <p>
                  L-serine의 모발 길이 성장 효과를 보기 위해 마우스의 vibrissa를 분리하여 L-serine이 담긴 media에 ex vivo culture 하였고, <br/>
                  vibrissa 길이 성장에 대한 L-serine의 효능을 평가하였습니다.
                </p>
                <p>모유두세포의 활성 마커인 Versican의 활성을 평가하기 위해 culture한 vibrissa를 harvest하여 IHC를 수행하였습니다.</p>
              </div>
            </div>
          </div>
          <div onClick={()=>{
            if ( current !== 3 ) {
              setCurrent(current + 1);
            }
          }} className={`arrow-right ${current == 3 ? 'disabled' : ''}`}>
            <p/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section6 = () => {
  return (
    <div className='section6-wrap'>
      <div className='section6'>
        <motion.div 
          className='section6-content'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>Let’s Work Together</p>
          <p>생명공학의 발전, 지속 가능한 삶이 함께하는 미래를 꿈꿉니다.</p>
        </motion.div>
        <motion.div 
          className='section6-link'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <a href='/' target='_blank'>
            <div className='button'>
              <p>WITH</p>
              <div className='logo'>
                <span className='logo-k'/>
                <span className='logo-g'/>
                <span className='logo-u'/>
              </div>
              <div className='arrow'/>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='footer'>
      <a href='' className='footer-left'>
        <span className='logo-k'/>
        <span className='logo-g'/>
        <span className='logo-u'/>
      </a>
      <div className='footer-right'>
        Tel :  010-3441-4176 <br/>
        Email : kwin0125@naver.com <br/>
        Copyright 2024. KGU. All rights reserved.
      </div>
    </div>
  )
}
const Main = () => {
  return (
    <div className='main'>
      <Header />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
