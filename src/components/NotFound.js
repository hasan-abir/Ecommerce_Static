import React from 'react'
import styled from 'styled-components'

export default function NotFound(props) {
    return (
        <ErrorWrapper>
            <div>
                <h1 className="text-title">Error: 404</h1>
                <p className="text-title">The requested URL <span className="text-brown">{props.location.pathname}</span> was not found.</p>
            </div>
        </ErrorWrapper>
    )
}

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    padding: 0 1rem; 
    div{
        border: 1rem solid var(--color-two);
        padding: 2rem;
    }
`
