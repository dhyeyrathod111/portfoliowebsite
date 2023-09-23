import React from 'react'
import Link from 'next/link'
const Breadcrumb = props => {
    return (
        <section className="agy-page-title-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <div className="agy-page-title-text">
                            <h1>{props.page}</h1>
                            <ul>
                                <li><Link href={"/"}>Home</Link></li>
                                <li>{props.page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb