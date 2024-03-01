import React from "react";
import Header from "../../components/header";
import AddBlogs from "./addNews";
import Footer from "../../components/footer";
import { Container } from "react-bootstrap";


function PublishNews(){

    return(
<>
        <section className="spad">
            <h1 className="text-center">PUBLISH HOTEL NEWS/PR</h1>

            <Container>
            <AddBlogs/>


            </Container>
        </section>
        </>
    );
}
export default PublishNews;