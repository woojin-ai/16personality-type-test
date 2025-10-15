export default function SideAds() {
  return (
    <>
      {/* 왼쪽 세로 광고 - 1400px 이상 화면에서만 표시 */}
      <div className="hidden xl:block fixed left-4 top-1/2 -translate-y-1/2 z-10">
        <ins 
          className="kakao_ad_area" 
          style={{ display: 'none' }}
          data-ad-unit="DAN-iO3yQjSuNvLpZirZ"
          data-ad-width="160"
          data-ad-height="600"
        />
      </div>

      {/* 오른쪽 세로 광고 - 1400px 이상 화면에서만 표시 */}
      <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-10">
        <ins 
          className="kakao_ad_area" 
          style={{ display: 'none' }}
          data-ad-unit="DAN-iO3yQjSuNvLpZirZ"
          data-ad-width="160"
          data-ad-height="600"
        />
      </div>
    </>
  );
}
