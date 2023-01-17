import React, { useState,useEffect } from 'react';
import ApiService from '../../ApiService/Api.service';

export default function Thumbnail(){
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading]=useState(false);

    const loadAPI = async() =>{
        try{
            setLoading(true);
            const userData=await ApiService.httpGet('/users');
            setUsers(userData);
            setLoading(false);
        }catch(err){
            console.error(err.message);
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        loadAPI();
    },[]);

    if(isLoading){
        return <h3>Loading....</h3>
    }

    return (
        <div className='userDetails'>
            {
                 users.map((user)=>{
                    return <div key={user.id} className='cardView'>
                        <div className='userName'>
                            {
                                `Name : ${user.name}`
                            }
                        </div>
                        <div className='userUserName'>
                            {
                                `Username : ${user.username}`
                            }
                        </div>
                        <div className='userEmail'>
                            {
                                `Email : ${user.email}`
                            }
                        </div>
                        <div className='address'>
                            {
                                `Address : ${user.address.street} ${user.address.suite}
                                           ${user.address.city}, ${user.address.zipcode}`
                            }
                        </div>
                        <div className='userPhone'>
                            {
                                `Phone : ${user.phone}`
                            }
                        </div>
                        <div className='userWebsite'>
                            {
                                `Website : ${user.website}`
                            }
                        </div>
                        <div className='userCompany'>
                            {
                                `Company Name : ${user.company.name}`
                            }
                        </div>
                     </div>
                 })
            }
        </div>
    );
}