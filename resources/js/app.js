import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import './bootstrap';
import 'antd/dist/antd.css';
import { InertiaProgress } from '@inertiajs/progress'


import Layout from './Layout/Authorized'

const app = document.getElementById('app')

InertiaProgress.init()
render(
    <Layout>
        <InertiaApp
            initialPage={JSON.parse(app.dataset.page)}
            resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
        />
    </Layout>,
    app
)
