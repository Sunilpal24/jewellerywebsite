import React from "react";
import { useSelector } from "react-redux";
import WishList2 from "./WishList2";

const WishList = () => {
  const wish = useSelector((state) => state.wishlist);
  return (
    <div>
      <h1 className="text-center item">WishList</h1>
      {wish.length === 0 ? (
        <div className="text-center">
          <img src="image/nodatafound.png" />
        </div>
      ) : (
        <div className="row">
          {wish.map((e) => {
            return (
              <div key={e.id} className="col-md-3 col-sm-6 mb-3">
                <WishList2
                  id={e.id}
                  name={e.name}
                  img={e.img}
                  title={e.title}
                  price={e.price}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WishList;
