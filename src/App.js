import React from 'react';
import {Menu} from 'semantic-ui-react';

const items = [
    { key: 'Home', active: true, name: 'Home' },
    { key: 'About us', name: 'About us' },
    { key: 'Suggestions', name: 'Suggestions' },
  ]

const menu = () => <Menu items={items} />;


 export default menu;