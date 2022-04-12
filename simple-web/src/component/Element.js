import React from 'react';

export const Element = ( {element} ) => {
    return (
        <div className="">
          <img src={element.image} alt="" className="rounded"/>
          <div className="px-6 py-4">
            <ul>
              <li>
                <strong>Name: </strong>
                {element.name}
              </li>
              <li>
                <strong>Created On: </strong>
                {element.creation_time}
              </li>
              <li>
                <strong>Token Price: </strong>
                {element.token_price}
              </li>
            </ul>
          </div>
        </div>
      );
};