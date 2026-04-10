
import { useProductStore } from '../store/useProductStore'

export default function WishList() {
    const { wishLists, onRemovewish } = useProductStore();
    return (
        <div className='cart-wrap'>
            <ul className='wish-list cart-list'>
                {wishLists.map((wish, id) => (
                    <li>
                        <div className="img-box cart-goods-info">
                            <img src={wish.image} alt="" />
                        </div>
                        <div className="text-box">
                            <h3>{wish.title}</h3>
                            <p>{wish.price}</p>
                        </div>
                        <p><button onClick={() => onRemovewish(wish.id)}>삭제</button></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
