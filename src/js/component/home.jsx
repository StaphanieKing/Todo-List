import React from “react”;
import { Item } from “./Item.jsx”
import { ItemLeft } from “./ItemLeft.jsx”;
import { Input } from “./Input.jsx”;
//create your first component
const Home = () => {
    return (
        <div className=“center”>
            <h1>todos</h1>
            <div className=“container”>
                <Input className=“input”/>
                <Item/>
                <ItemLeft/>
            </div>
        </div>
    );
};
export default Home;













