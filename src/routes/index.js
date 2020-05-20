import React from 'react';
import { Provider } from 'react-redux'

import store from '../store/index'
import AppRoutes from './app.routes';

const Routes = () => (
    <AppRoutes />
)

export default AppRoutes;