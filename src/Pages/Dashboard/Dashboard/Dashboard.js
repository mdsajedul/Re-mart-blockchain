import React from 'react';
import './dashboard.css'
import { Link, Route, Routes } from 'react-router-dom';
import MiningPool from '../MiningPool/MiningPool';
import useUserContext from '../../../hooks/useUserContext';
import Blocks from '../Blocks/Blocks';
import BlockDetail from '../BlockDetail/BlockDetail';

const Dashboard = () => {
    const {user} = useUserContext()
    return (
        <div className='container'>
            <div className='row my-3 gy-3'>
                <div className='col-lg-3 '>
                    <div className='left-panel '>
                        <div className='d-flex justify-content-center mb-3'>
                            <div>
                                <h2>{user.username}</h2>
                            </div>
                        </div>
                        <div className='left-btn-group'>
                            <Link className='left-btn' to='mining-pool' >Mining Pool</Link>
                            <Link className='left-btn' to='blocks' >Blocks</Link> 
                        </div>
                        
                    </div>
                </div>
                <div className='col-lg-9 '>
                    <div className='right-panel '>
                        <Routes>
                            <Route path="/" element={<MiningPool/>}/>
                            <Route path="mining-pool" element={<MiningPool/>}/>
                            <Route path='blocks/*' element={<Blocks/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;