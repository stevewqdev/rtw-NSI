import React, { Component } from 'react'
import Head from 'next/head'
import SearchLinks from '../components/searchform/searchLinks'
import Search from '../components/searchform/search'

export default class form extends Component {

render() {
    return (
        <div className="page__contain__search">
            <section id="search__form" className="sf__wrapper">
                {/* Always includ SearchLinks component to load the files for the Search component */}
                <SearchLinks />
                <Search />
            </section>
        </div>
    )
    }
}
