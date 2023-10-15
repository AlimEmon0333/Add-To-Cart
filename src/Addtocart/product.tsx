import axios from "axios";
import { useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../config/redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
export default function Product() {
    const [productsList, setProductsList] = useState<any>([])
    const [openBackdrop, setOpenBackdrop] = useState<boolean>(false)
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.cart)
    const callingData = () => {
        setOpenBackdrop(true)
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setOpenBackdrop(false)
                setProductsList([...res.data])
            })
            .catch(err => {
                alert(err)
                setOpenBackdrop(false)
            })
    }
    const addToCart = (x: any) => {
        dispatch(add(x))
    }
    const navigate = useNavigate()
    useEffect(() => { callingData() }, [])
    return (
        <>
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openBackdrop}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
            <div className="container flex items-center my-3 p-4 rounded-lg" style={{ backgroundColor: "#fbeaeb", borderBottom: "4px solid #2f3c7e", height: "120px" }}>
                <div className="grid grid-cols-7">
                    <div className="col-span-6">
                        <h3>
                            Add to <span className="" style={{ color: "#2f3c7e", borderBottom: "5px solid #fbeaeb" }}>cart</span>
                        </h3>
                    </div>
                    <div className="text-end">
                        <button className="btn" style={{ backgroundColor: "#2f3c7e", color: "#fbeaeb" }} onClick={() => navigate('/cart')}>Added Items : {data.length}</button>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row ">
                    {productsList.map((x: any, i: any) => {
                        return (
                            <>
                                <div className="col-md-4 border-1 text-center flex justify-center " key={i} style={{ backgroundColor: "fbeaeb" }}>
                                    <div className="m-5">
                                        <img src={x.image} width="200px" height='200px' alt="" />
                                        <h5 className="my-3">Name : {x.title}</h5>
                                        <p className="my-3">category : {x.category}</p>
                                        <h6 className="my-3">Price : {x.price} $</h6>
                                        <button className="btn" onClick={() => { addToCart(x) }} style={{ color: "#fbeaeb", backgroundColor: "#2f3c7e" }}>Add to cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}