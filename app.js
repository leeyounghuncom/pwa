let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // 기본 설치 프롬프트 막기
  e.preventDefault();
  deferredPrompt = e;

  // 버튼 표시
  const installBtn = document.getElementById('installBtn');
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    alert(3)
    // 설치 프롬프트 표시
    deferredPrompt.prompt();

    // 사용자의 선택 처리
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA 설치됨');
      } else {
        console.log('PWA 설치 거부됨');
      }
      deferredPrompt = null; // 초기화
    });
  });
});


/*

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/pwa/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

*/
