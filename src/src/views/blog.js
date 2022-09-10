import { Button, Spin  } from 'antd';
import React, { useState, useEffect } from 'react';
import store from '../store/store'
import api from '../utils/api'

function Blog(props) {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        api.post('/test').then((res) => {
            setList(res.data.data)
        })
    }, [])

    const liOnClick = (name) => {
        window.alert(name)
    }

    return(
        <>
            <div>
                <p>{count}</p>
                <Button style={{margin: '20px'}} onClick={() => {setCount(count + 1)}}>点击我</Button>
            </div>

            <div>
                <ul>
                    { list.map((val) => {
                        return (
                            <li onClick={() => liOnClick(val.Name)} key={val.id}>{val.Name}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Blog;