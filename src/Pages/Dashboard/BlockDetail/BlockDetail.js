import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBlockchainContext from '../../../hooks/useBlockchainContext';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from '@emotion/css';

const BlockDetail = () => {
    const {blockIndex} = useParams()
    const { blocks} = useBlockchainContext()

    let block =  blocks.find(({index}) => index===parseInt(blockIndex) )

    const ROOT_CSS = css({
        height: 400,
       
      });
      
    
    return (
        <div className='mt-5 pt-3'>
            <ScrollToBottom className={ROOT_CSS}>
                <table className='table m-2'>
                    <tbody>
                        <tr>
                            <td>Index</td>
                            <td>{block?.index}</td>
                        </tr>

                        <tr>
                            <td>Nonce</td>
                            <td>{block?.nonce}</td>
                        </tr>

                        <tr>
                            <td>Merkle Root</td>
                            <td>{block?.merkleRoot}</td>
                        </tr>
                        
                        <tr>
                            <td>Timestamp</td>
                            <td>{block?.timestamp}</td>
                        </tr>
                        
                        <tr>
                            <td>Hash</td>
                            <td>{block?.hash}</td>
                        </tr>

                        <tr>
                            <td>Previous Hash</td>
                            <td>{block?.previousHash}</td>
                        </tr>
                        
                        <tr>
                            <td>Miner</td>
                            <td>{block?.miner}</td>
                        </tr>
                    </tbody>
                </table>
            </ScrollToBottom>
        </div>
    );
};

export default BlockDetail;