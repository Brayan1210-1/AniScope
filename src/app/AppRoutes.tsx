import { BrowserRouter, Route, Routes } from "react-router";

import { AnimeListPage } from "@/modules/anime/pages/anime-list.page";

export const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/">
                    <Route index element={<AnimeListPage />} />

                    <Route path="/:id" element={<h1>pagina detalle</h1>} />


                </Route>



            </Routes>

        </BrowserRouter >

    )
}