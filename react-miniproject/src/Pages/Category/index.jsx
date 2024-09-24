import React from "react";
import CatCard from "./ Components/CatCard";

const Category = () => {
    return(
        <div className="Category bg-white text-primary w-screen h-screen p-5 sm:p-16 md:p-24 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl">Category</h1>
                <div className="h-1 w-30 bg-primary"></div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-white bg-primary w-fit px-3 py-2 rounded-md">Count : 6</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                    <CatCard/>
                </div>
            </div>
        </div>
    )
}

export default Category