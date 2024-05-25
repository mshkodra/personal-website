"use client";
import Link from 'next/link'
import React, {useEffect, useState} from "react"
export default function Header(props) {
    return (
        <div className="header">
            
            <Link href="/">
                <h1 style={{opacity: props.arr[0] ? "60%" : "100%"}}>Home</h1>
            </Link>

            <Link href="/about">
                <h1 style={{opacity: props.arr[1] ? "60%" : "100%"}}>About</h1>
            </Link>

            <Link href="/work">
                <h1 style={{opacity: props.arr[2] ? "60%" : "100%"}}>Work</h1>
            </Link>


            <Link href="/projects">
                <h1 style={{opacity: props.arr[3] ? "60%" : "100%"}}>Projects</h1>
            </Link>


            <Link href="/blog">
                <h1 style={{opacity: props.arr[4] ? "60%" : "100%"}}>Blog</h1>
            </Link>
        </div>
    )
}