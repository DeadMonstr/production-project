import React, {Suspense} from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import { AppRouter } from 'app/providers/routers'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

function App () {

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={'loading'}>
                <Navbar/>

                <div className="content-page">
                    <Sidebar/>

                    <AppRouter/>
                </div>

            </Suspense>
        </div>
    )
}

export default App
