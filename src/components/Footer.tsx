export default function Footer() {
  return (
    <>
      {/* 카카오 애드핏 광고 */}
      <div className="w-full bg-white py-6">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* PC용 광고 (728x90) - md 이상에서만 보임 */}
          <div className="hidden md:flex justify-center">
            <ins 
              className="kakao_ad_area" 
              style={{ display: 'none' }}
              data-ad-unit="DAN-OfXi7hXqhrpbM3Al"
              data-ad-width="728"
              data-ad-height="90"
            />
          </div>
          
          {/* 모바일용 광고 (320x100) - md 미만에서만 보임 */}
          <div className="flex md:hidden justify-center">
            <ins 
              className="kakao_ad_area" 
              style={{ display: 'none' }}
              data-ad-unit="DAN-xWHDOndemYU6KOjh"
              data-ad-width="320"
              data-ad-height="100"
            />
          </div>
        </div>
      </div>
      
      <footer className="w-full border-t bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">© 2025 16가지 성격유형 검사. All rights reserved.</p>
            <p className="text-xs text-gray-500">
              본 검사는 참고용이며, 공식 MBTI 검사가 아닙니다.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
