import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { useProductStore } from '../store/useProductStore'
import { useLocation, useNavigate } from 'react-router-dom';
import "./scss/cart.scss"
import PaymentModal from '../components/PaymentModal';

export default function Payment() {
    const {
        cartItems,
        totalPrice,
        selectedCoupon,
        coupons,
        finalPrice,
        onSelectedCoupon,
        onFinalPrice,
        onAddOrder,
    } = useProductStore();

    const navigate = useNavigate();

    //useLocation() 현재 페이지의 url + state정보를 가져오는 훅
    const location = useLocation();
    const selectedItems = location.state?.selectedItems || cartItems;
    const selectedTotal = location.state?.selectedTotal || totalPrice;
    console.log("cart에서 넘어온 데이터", selectedItems, selectedTotal);

    //모달 팝업을 제어할 변수 만들기
    const [showPay, setShowPay] = useState(false);

    //결제하기를 클릭하면 popup을 보여줄 메서드
    const handlePayment = () => {
        setShowPay(true)
    }
    //결제 취소버튼
    const handleClosePopup = () => {
        setShowPay(false)
    }

    //결제가 완료
    const handleConfirm = (e) => {
        alert("결제가 완료되었습니다. 주문 내역을 확인하세요")
        //주문한 내용을 orderList에 저장하기
        onAddOrder({
            items: selectedItems,
            total: finalPrice
        })

        //마이페이지 주문내역으로 이동
        navigate("/userinfo")
    }



    useEffect(() => {
        onFinalPrice(selectedTotal)
    }, [totalPrice, selectedCoupon])

    return (
        <div className="sub-page-wrap">
            <div className="inner">
                <SectionTitle title="결제하기" />
                <div className="payment-list-wrap cart-wrap">
                    <ul className='cart-list'>
                        {selectedItems.map((item) => (
                            <li>
                                <div className="cart-goods-info">
                                    <img src={item.image} alt="" />
                                    <div>
                                        <p>{item.title}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                                <div className="cart-right">
                                    <p>{item.count}</p>
                                    <p>{item.price * item.count}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="coupon-wrap">
                    <div>총 결제 금액 : {selectedTotal}</div>
                    <div>쿠폰 :
                        {coupons.map((c) => (
                            <label>
                                <input
                                    type='radio'
                                    name='coupon'
                                    //선택한 쿠폰이 있는지 없는지 확인 후 있으면 그 아이디값
                                    checked={selectedCoupon?.id === c.id}
                                    onChange={() => onSelectedCoupon(c)}
                                />
                                {c.text}

                            </label>
                        ))}
                        <label>
                            <input type="radio" name="coupon" onChange={() => onSelectedCoupon(null)} />쿠폰적용안함
                        </label>
                    </div>
                    <div>최종결제금액 : {finalPrice} </div>
                    <p><button onClick={handlePayment}>결제하기</button></p>
                </div>
            </div>
            {/* 모달은 리턴 안에*/}
            {/* 결제 모달 */}
            {showPay ? <PaymentModal onClose={handleClosePopup} onConfirm={handleConfirm} /> : ""}

        </div>
    )
}
