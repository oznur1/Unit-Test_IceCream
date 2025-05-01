import React from 'react'

const Card = ({item}) => {
    return (
        <div className="bg-black/20 border border-white/50 rounded-[24px] pl-[10px] pr-[20px] py-[30px] flex gap-[15px] lg:gap-[30px]">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-[100px] md:w-[150px] drop-shadow-2xl" />
          </div>
    
          <div className="flex-1">
            <h1 className="text-[24px] font-medium">{item.name}</h1>
    
            
    
            <div className="mt-5 flex justify-between">
              <p>₺{item.price} / top</p>
    
              <button
              
                className={`border py-1 px-3 rounded-md hover:bg-white/30 transition `}
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      );
    };

    export default Card;
