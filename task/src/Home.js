import React,{useState} from "react";
import UserCard from "./Components/UserCard";
import {users as userdata} from "./Data/users";

const Home=()=>{
   const [search,setSearch]=useState("");
   const filteredUsers=userdata.filter((user)=>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
   )
    return(
        <>
        <div className="app-container">
            <h1 className="text-2xl font-bold mb-4">User Information</h1>
            <input
        type="text"
        placeholder="Search by name or role"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
            <div >
                {filteredUsers.length===0?(
                    <p>No users to display</p>
                ):(
                    <div className="user-list">
                        {filteredUsers.map((user)=>(
                            <UserCard key={user.id} user={user}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )
};

export default Home;