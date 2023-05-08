import {setProducts,startLoadingProducts} from './'

export const getProducts=()=>{
    return async (dispatch,query="")=>{
        dispatch(startLoadingProducts)

        const data = await fetch(`https://fakestoreapi.com/products`)
				.then((response) => response.json())
				.then((result) => result);
        // console.log(data)
        dispatch(setProducts(data))
    }
}