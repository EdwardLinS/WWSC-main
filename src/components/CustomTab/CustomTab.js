
import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';

import './CustomTab.css'
// import { teal } from '@mui/material/colors';

export default function CustomTab({content}) {

    const [activeTab, setActiveTab] = useState("1");

    return (
        <div className='wwsc-tab'>
            <Nav tabs>
                {content.map((elem, ind) => (
                    <NavItem >
                        <NavLink
                            className={activeTab === (ind + 1).toString() ? "active" : ""}
                            onClick={function noRefCheck() { setActiveTab((ind + 1).toString()) }}
                            style={{fontSize: "1.25rem", paddingLeft: "1.5vw", paddingRight: "1.5vw"}}
                        >
                            {elem.title}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
                {content.map((elem, ind) => (
                    <TabPane tabId={(ind + 1).toString()}>
                        {elem.content}
                    </TabPane>
                ))}
            </TabContent>
        </div>
    )
}
