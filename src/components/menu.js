import React,{ Component } from "react";
import {Link} from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product',
        to: '/product',
        exact: false
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
]

class Menu extends Component {
    render () {
        return (
                <div>
                   
                   
                </div>
        )
    }
}
export default Menu;