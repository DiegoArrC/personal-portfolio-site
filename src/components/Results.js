import React from "react";
import "../styling/Results.css";

const Results = props => {
    const { repos } = props;

    const ListedRepos = repos.length ?  repos.map(item => {
        return (
            <div className="Repo-Card" key={item.id}>
                <img className="Owner-Profile-Image" src={item.owner.avatar_url} alt={item.owner.name}/>
                <p className="Owner-Name">Owner: {item.owner.login}</p>
                <a className="Github-Link" target="_blank" rel="noopener noreferrer" href={item.html_url}>{item.name}</a>
                <div className="Card-Content">
                    <p className="Repo-description">{item.description}</p>
                    <p className="Repo-Project-Language">Main Language: {item.language}</p>
                    <div className="Repo-Topics">
                        {item.topics.map(child => {
                            return (
                                <span className="Topics">Topic: {child}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }): <li>There are no repositories for the specified user</li>;
    return (
        <span>
            {ListedRepos}
        </span>
    );

};

export default Results;