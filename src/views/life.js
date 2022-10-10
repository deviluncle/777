import React, { useState, useEffect } from 'react';

function Life(){

    // 防抖
    const debounce = (fn, time) => {
        let timer;
        return () => {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
                fn()
            }, time)
        }
    } 

    useEffect(() => {
        window.onresize = debounce(function(){
            console.log(789)
        }, 1000)
    }, [])


    return (
        <>
            <p>防抖和节流</p>
        </>
    );  
}

export default Life;