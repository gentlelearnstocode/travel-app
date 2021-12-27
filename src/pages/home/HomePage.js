import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/NavBar";

const HomePage = () =>{
    return <React.Fragment>
        <header>
            <Nav/>
        </header>
        <main>
            <Header/>
            <Content/>
        </main>
    </React.Fragment>
}
export default HomePage