import React,{useState} from 'react'
import { Panel } from 'rsuite'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';

function Product(props) {

    const [activeColor, setActiveAcolor] = useState('')

    return (
        <div className='single-product'>
            <Panel bodyFill style={{ display: 'inline-block', width: "100%" }}>
                <img src={props.img} style={{ width: "100%" }} alt='product-img' />



                <div className='product-box'>
                    <div className="product-icon">
                        {props.rating >= 1 ? <BsStarFill className='starIcon' /> : props.rating >= .5 ? <BsStarHalf className='starIcon' /> : <BsStar className='starIcon' />}
                        {props.rating >= 2 ? <BsStarFill className='starIcon' /> : props.rating >= 1.5 ? <BsStarHalf className='starIcon' /> : <BsStar className='starIcon' />}
                        {props.rating >= 3 ? <BsStarFill className='starIcon' /> : props.rating >= 2.5 ? <BsStarHalf className='starIcon' /> : <BsStar className='starIcon' />}
                        {props.rating >= 4 ? <BsStarFill className='starIcon' /> : props.rating >= 3.5 ? <BsStarHalf className='starIcon' /> : <BsStar className='starIcon' />}
                        {props.rating >= 5 ? <BsStarFill className='starIcon' /> : props.rating >= 4.5 ? <BsStarHalf className='starIcon' /> : <BsStar className='starIcon' />}

                    </div>
                    <div className="brand">
                        <p className='productBrand'> {props.brand}</p>
                    </div>

                </div>




                <Panel header={props.heading}>


                    <div className='product-box'>
                        <div className="product-color-box">
                            {props.color.map(item => (
                                <span className='productColor activeColor' style={{ background: `#${item}` }}></span>
                            ))}

                        </div>
                        <div className="product-size">
                            {props.size.map(item => (
                                <span>{item}</span>
                            ))}
                        </div>

                    </div>

                    <span className='cart-product'>
                        <AiOutlineShopping className='shopping-bag' />
                    </span>

                    <span className='price'>
                        ${props.price}
                    </span>
                </Panel>
            </Panel>
        </div>
    )
}

export default Product