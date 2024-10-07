import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React, { useEffect } from 'react';


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);

  const RootComponent = () => {
    useEffect(() => {
      const loadingElement = document.getElementById('loading');
  
      // 로딩 창을 서서히 숨기기
      loadingElement.classList.add('hidden');
      
      // 일정 시간 후에 로딩 창을 완전히 제거하고 실제 콘텐츠를 표시
      setTimeout(() => {
        loadingElement.style.display = 'none';
      }, 1000); // 1초 후에 실행
    }, []);
  
    return <App />;
  };
  
  
  root.render(
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>
  );
});
