import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import useBlockchainContext from '../../../hooks/useBlockchainContext';
import BlockDetail from '../BlockDetail/BlockDetail';

const Blocks = () => {

    const { mineResult} = useBlockchainContext()
    const [blocks,setBlocks] = useState([])

    useEffect(()=>{
        setBlocks(mineResult.Block)
        console.log(blocks)
    },[mineResult,blocks])

    return (
        <div>
            <h2>Rechain</h2>
            <div className="row gx-0">
                <div className="col-lg-6">
                    <h3>Latest Blocks</h3>
                    <p>The most recently mined blocks</p>
                    <div>
                        <table class="table">
                            
                        <thead>
                          <tr>
                            <th scope="col">Block Index</th>
                            <th scope="col">Miner</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                blocks.map(block=>{
                                    return( 
                                            <tr>
                                                <Link to={`block-detail/${block.index}`}>
                                                <td>000{block.index}</td>
                                                </Link>
                                                <td>{block.miner}</td>
                                            </tr>
                                     )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>Block Details</h2>
                    <div>
                        <Routes>
                            <Route path='/block-detail/:blockIndex' element={<BlockDetail />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blocks;