import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

/**
 * Header
 * - Logo
 * - List Items(right side)
 * - Nav Items
 * Body 
 * - Search
 * - Restaurant Container
 *  - Restaurant Card
 *    - Image
 *    - Name for Res,Star rating,Cuisine,Delivery time 
 * Footer
 * - Copyrights 
 * - Links
 * - Address
 * - Contacts
 */

/**
 * Components
 * - Header
 * - Body
 *   - RestairantCard
 */


const AppLayout = () => {
    return(
      <div className="app">
        <Header />
        <Body />
      </div>
    )
}

export default AppLayout;

