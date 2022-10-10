import { Button, Spin, message } from 'antd';
import React, { useState, useEffect } from 'react';
import store from '../store/store'
import api from '../utils/api'

const Blog = (props) =>  {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        api.post('/test').then((res) => {
            setList(res.data.data)
        })
    }

    const toDel = (id, e) => {
        const r = window.confirm('确认删除吗?')
        if (r) {
            api.post('/testDelete', {id: id}).then((res) => {
                message.success(res.data.message)
                getData()
            }).catch((e) => {
                window.alert(e)
            })
        }
        e.stopPropagation()
    }

    const toEdit = (val) => {
        const res = window.prompt("请输入要更改的名字", val.name)
        if (res !== null && res !== ""){ 
            api.post('/testEdit', {id: val.id, name: res}).then((res) => {
                message.success(res.data.message)
                getData()
            }).catch((e) => {
                window.alert(e)
            })
        } 
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
                            <div>
                                <p style={{cursor: 'pointer'}} 
                                   onClick={() => toEdit(val)} 
                                   key={val.id}>
                                    {val.name}
                                    <span onClick={(e) => toDel(val.id, e)}> x</span>
                                </p>
                                
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Blog;