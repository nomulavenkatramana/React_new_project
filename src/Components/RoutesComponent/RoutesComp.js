import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AboutUs from '../Aboutus/AboutUs'
import Contactus from '../Contactus/ContactUs'
import ListsAndKeys from '../Lists/ListsAndKeys'
import ComponentLifeCycle from '../ComponentsLifeCycle/ComponentLifeCycle'
import Pagination from '../Pagination/Pagination'
import PaginationHooks from '../Hooks/PaginationHooks'
import Counter from '../Hooks/Counter'

function RoutesComp() {
    return (
        <div>
            <Routes>
                <Route path="/aboutpage" element={<AboutUs />} />
                <Route path="/contactspage" element={<Contactus />} />
                <Route path="/listandkeys" element={<ListsAndKeys />} />
                <Route path="/complifecycle" element={<ComponentLifeCycle />} />
                <Route path="/pagination" element={<Pagination />} />
                <Route path="/paginationhooks" element={<PaginationHooks />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>

        </div>
    )
}
export default RoutesComp;