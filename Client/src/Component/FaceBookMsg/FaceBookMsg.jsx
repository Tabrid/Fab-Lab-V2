"use client";

import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <div>
            <FacebookProvider appId="1026539548498333" chatSupport>
                <CustomChat pageId="236615422861611" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default FacebookMsg;