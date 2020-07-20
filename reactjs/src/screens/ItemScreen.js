import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsItem } from "../functions/itemsFunctions";

function ItemScreen(props) {
  const itemDetails = useSelector((state) => state.itemDetails);
  const { item, loading, error } = itemDetails;
  const dispatch = useDispatch();
  const [quantaty, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(detailsItem(props.match.params.id));
    return () => {
      //
    };
  }, [dispatch, props.match.params.id]);

  const addToBasket = () => {
    props.history.push(
      "/basket/" + props.match.params.id + "?quantaty=" + quantaty
    );
  };

  return (
    <div>
      {loading ? (
        <div>Items are currently loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className='itemDetails'>
          <div className='detailsImage'>
            <img src={item.image} alt='item'></img>
          </div>
          <div className='detailsInformation'>
            <ul>
              <li>
                <h3>{item.name}</h3>
              </li>
              <li className='itemDescription'>{item.description}</li>
              <li>
                Price: <b>${item.price}</b>
              </li>
              <li className='itemInfo'>{item.details}</li>
              <li className='continueShopping'>
                <Link to='/'>&#11013;</Link>
                <Link to={"/"}>Continue Shopping</Link>
              </li>
            </ul>
          </div>
          <div className='detailsAction'>
            <ul>
              <li>
                Price: <b>${item.price}</b>
              </li>
              <li>
                Status: <b>Available</b>
              </li>
              <li>
                Quantaty:
                <div className='basketQuantaty '>
                  <button
                    className='quantatyButton'
                    onClick={() => quantaty !== 1 && setQuantity(quantaty - 1)}
                  >
                    &#x2796;
                  </button>
                  <p className='quantatyNumber'>{quantaty}</p>
                  <button
                    className='quantatyButton'
                    onClick={() => setQuantity(quantaty + 1)}
                  >
                    &#x2795;
                  </button>
                </div>
              </li>
              <li>
                <button className='addToBasket' onClick={addToBasket}>
                  Add to Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ItemScreen;
