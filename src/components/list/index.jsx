import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import api from '../../utils/api';
import Card from '../card';
import Loader from "../loader/index"
import Error from "../error/index"


const List = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    const [data,setData]=useState(null);
    
    
    useEffect(() => {
        setIsLoading(true);
    
        api
          .get("/ice-creams")
          .then((res) => setData(res.data))
          .catch((err) => setError(err.message))
          .finally(() => setIsLoading(false));
      }, []);
    
    
    
    return (
     <div className="my-[30px]">
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Error info={error} />
    ) : (
      data && (
        <div className="grid mt-[30px] gap-[15px] lg:gap-[30px] lg:grid-cols-2">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )
    )}
  </div>
);
};
export default List
