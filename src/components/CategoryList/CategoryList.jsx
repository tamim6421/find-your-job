import { useEffect, useState } from "react";
import Category from "./Category/Category";


const CategoryList = () => {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then( data => setCategory(data))
    } ,[])
    return (
        <div>
            <div className="text-center my-20">
                <h2 className="text-4xl font-semibold mb-5">Job Category List</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? </p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
                {
                    category.map ( cat => <Category key={cat.id} cat={cat}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;