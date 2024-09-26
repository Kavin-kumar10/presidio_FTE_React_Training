import React from "react";
import CatCard from "../../Components/CatCard";
import CatCardPop from "../../Components/CatCardPop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/QuizSlice";
import { Suspense } from "react";
import Loading from "../../Components/Loading";

const Category = () => {
    const Categories = useSelector(state => state.Quiz.AllCategory);
    const loading = useSelector(state => state.Quiz.loading);
    const Categorypop = useSelector(state => state.Quiz.CategoryPop);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategories());
    },[])
    return(
        <div className="Category bg-secondary text-primary w-screen min-h-screen p-5 sm:p-16 md:p-24 flex flex-col gap-10">
            {Categorypop?<CatCardPop/>:<></>} 
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl">Category</h1>
                <div className="h-1 w-30 bg-primary"></div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-white bg-primary w-fit px-3 py-2 rounded-md">Count : {Categories.length}</h1>
                {
                        loading?<Loading/>:
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {
                            Categories?.map((elem) => (
                                <CatCard key={elem.id} elem={elem} />
                            ))
                        }
                    </div>
                    }
            </div>
        </div>
    )
}

export default Category