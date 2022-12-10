import React, {useState,useEffect} from "react";
import Results from "./Results";

const RepoList = () => {
    const [githubUser, setGithubUser] = useState("DiegoArrC");
    const [repoData, setRepoData] = useState({});

    const fetchRepos = async() => {
        const response = await fetch(`https://api.github.com/users/${githubUser}/repos?type=all&sort=created&per_page=30`);
        const data = await response.json();
        setRepoData(data);
    }
    useEffect(() => {
        fetchRepos()
    },[]);
    
    console.log(repoData);

    return(
        <>
        <span>
            <input type="text" placeholder="Search for User" onChange={(e) => setGithubUser(e.target.value)} className="input_search"/>
        <button onClick={fetchRepos} className="Search_button">Search Github</button></span>
        <span>
        <h2 className="Header2">Repositories for {githubUser}</h2></span>
        <div className="repo-list">
            <Results repos = {repoData}/>
        </div>
        </>
        
    );
}

export default RepoList;
