import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Bell, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Don't show navbar on landing/login pages
    if (location.pathname === '/' || location.pathname === '/login') {
        return null;
    }

    const handleLogout = () => {
        navigate('/');
    };

    const navLinks = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/log-data', label: 'Log Data' },
        { path: '/medications', label: 'Meds' },
        { path: '/reports', label: 'Reports' },
        { path: '/resources', label: 'Resources' },
    ];

    return (
        <nav className="border-b border-gray-100 bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <div className="w-3 h-3 bg-black transform rotate-45"></div>
                    <span className="text-xl font-bold tracking-tight">Alaafia AI</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black font-semibold"
                                    : "text-gray-500 hover:text-black transition-colors"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Bell className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User" />
                    </div>
                    <button onClick={handleLogout} className="hidden md:block p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <LogOut className="w-5 h-5" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-black font-semibold text-lg"
                                    : "text-gray-500 text-lg"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <button onClick={handleLogout} className="text-left text-red-500 font-medium pt-2 border-t border-gray-100">
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
