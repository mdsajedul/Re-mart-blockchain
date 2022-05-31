import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBlockchainContext from '../../../hooks/useBlockchainContext';

const BlockDetail = () => {
    const {blockIndex} = useParams()

    const [blocks,setBlocks] = useState([])
    const { mineResult} = useBlockchainContext()

    useEffect(()=>{
        setBlocks(mineResult.Block)
        console.log(blocks)
    },[mineResult,blocks])

    let block =  blocks.find(({index}) => index===parseInt(blockIndex) )
    
    return (
        <div>
            <table className='table'>
                <tr>
                    <td>Block Index</td>
                    <td>Nonce</td>
                    <td>Merkle Root</td>
                    <td>Timestamp</td>
                    <td>Hash</td>
                    <td>Previous Hash</td>
                    <td>Miner</td>
                </tr>
                <tr>
                    <td>{block?.index}</td>
                    <td>{block?.nonce}</td>
                    <td>{block?.merkleRoot}</td>
                    <td>{block?.timestamp}</td>
                    <td>{block?.hash}</td>
                    <td>{block?.previousHash}</td>
                    <td>{block?.miner}</td>
                </tr>
            </table>
            {/* <h1>Block Details {blockIndex}</h1>
            <p>Block Index: {block?.index}</p>
            <p>Nonce: {block?.nonce}</p>
            <p>Merkle Root: {block?.merkleRoot}</p>
            <p>Timestamp: {block}</p> */}
        </div>
    );
};

export default BlockDetail;