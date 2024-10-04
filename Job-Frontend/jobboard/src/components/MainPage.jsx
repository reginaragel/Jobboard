import React from "react";
import './MainPage.css';

const MainPage=()=>{

    return(
        <div>
            <header className="header">
                <div className="title"> Job Board</div>
                <div className="navbar">
                    <div className="home">
                        <a href="home">Home</a>
                    </div>
                    <div className="browse">
                        <a href="browsw">Browse Jobs</a>
                    </div>
                    <div className="Pages">
                        <a href="page">Pages</a>
                    </div>
                    <div className="Blog">
                        <a href="blog">Blog</a>
                    </div>
                </div>
                <div className="entry">
                <div className="login">
                    <a href="/login">Login</a>
                </div>
                <div className="jobpost">
                    <a href="post">Post a Job</a>
                </div>
                </div>
            </header>
            <section className="middle">
                <h3>India's Largest Job Board #1</h3>
                <h1>Find your next dream job</h1>
            </section>
            <section className="select">
                <select className="selection">
                    <option>Job</option>
                    <option>Internships</option>
                </select>
                <input type="text" placeholder="Enter Keyword"/>
                <input type="text" placeholder="Location"/>
                <button className="btn">Search</button>
            </section>
            <section className="joblist">
                <div className="list">
                    <span>Explore Recent Jobs</span>
                </div>
            </section>

        </div>
    )
}

export default MainPage