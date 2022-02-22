import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdressPage from "../page/AdressPage/AdressPage";
import CarPage from "../page/CarPage/CarPage";
import EditRecordPage from "../page/EditRecordPage/EditRecordPage";
import FeedPage from "../page/FeedPage/FeedPage";
import LoginPage from "../page/LoginPage/LoginPage";
import ResultPage from "../page/ResultPage/ResultPage";
import SearchPage from "../page/SearchPage/SearchPage";
import SignUpPage from "../page/SignUpPage/SignUp";
import ProfilePage from "../page/SingUpPage/SingUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/restaurante/:id">
                    <ResultPage />
                </Route>
                <Route exact path="/cadastro-endereco">
                    <AdressPage />
                </Route>
                <Route exact path="/carrinho">
                    <CarPage />
                </Route>
                <Route exact path="/perfil">
                    <ProfilePage />
                </Route>
                <Route exact path="/edicao-cadastro">
                    <EditRecordPage />
                </Route>
                <Route exact path="/busca">
                    <SearchPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
