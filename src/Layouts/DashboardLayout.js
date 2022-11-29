import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../hooks/useRole';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [role] = useRole(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {role === 'buyer' && <>
                            <li><Link to='/orders'>All Oders</Link></li>
                        </>
                        }
                        {role === 'seller' && <>
                            <li><Link to='add-product'>Add A product</Link></li>
                            <li><Link to='my-products'>My products</Link></li>
                            <li><Link to='my-buyers'>My Buyers</Link></li>
                        </>
                        }
                        {role === 'admin' && <>
                            <li><Link to='/all-sellers'>All Sellers </Link></li>
                            <li><Link to='/all-buyers'>All Buyers</Link></li>
                            <li><Link to='/repoted-item'>Reported Items</Link></li>
                        </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;