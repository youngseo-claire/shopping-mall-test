
import { Link } from 'react-router-dom'


export default function DetailWishPopup({ onClose }) {
    return (
        // 모달팝업으로 진행 그래서 한번 더 감쌌음
        <div className='popup-wrap'>
            <div className="popup">
                <h2>찜목록이 추가 되었습니다</h2>
                <div>
                    <button onClick={onClose}>쇼핑계속하기</button>
                    <Link to="/userInfo" state={{ menu: "찜목록" }}>찜 목록 보기</Link>
                </div>
            </div>
        </div>
    )
}
