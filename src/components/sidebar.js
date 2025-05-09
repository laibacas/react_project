import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggle }) {
    return (
        <div style={{
            width: isOpen ? '250px' : '80px',
            height: '100vh',
            background: 'linear-gradient(135deg, #2c3e50, #1a1a2e)',
            color: 'white',
            transition: 'all 0.3s ease-in-out',
            padding: '20px 15px',
            boxSizing: 'border-box',
            boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            zIndex: 100,
            overflow: 'hidden'
        }}>
            <button
                onClick={toggle}
                style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '30px',
                    transition: 'all 0.2s',
                    ':hover': {
                        background: 'rgba(255, 255, 255, 0.2)'
                    }
                }}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        ':hover': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            transform: 'translateX(5px)'
                        }
                    }}
                >
                    <span>🏠</span>
                    {isOpen && <span>Home</span>}
                </Link>

                <Link
                    to="/about"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        ':hover': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            transform: 'translateX(5px)'
                        }
                    }}
                >
                    <span>ℹ️</span>
                    {isOpen && <span>About</span>}
                </Link>

                <Link
                    to="/contact"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        ':hover': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            transform: 'translateX(5px)'
                        }
                    }}
                >
                    <span>✉️</span>
                    {isOpen && <span>Contact</span>}
                </Link>
            </div>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '12px',
                    textAlign: 'center'
                }}>
                    © {new Date().getFullYear()} Your App
                </div>
            )}
        </div>
    )
}