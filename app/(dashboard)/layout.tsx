import React from 'react';

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({children}: Props) => {
    return (
        <div lang="en" className='min-h-screen'>
            <body >{children}</body>
        </div>
    )
}

export default DashboardLayout;