import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@templates/Home';
import Login from '@templates/Login';
import CreateAccount from '@templates/CreateAccount';
import MyAccount from '@templates/MyAccount';
import SaveAccount from '@templates/SaveAccount';
import PasswordRecovery from '@templates/PasswordRecovery';
import SendEmail from '@templates/SendEmail';
import NewPassword from '@templates/NewPassword';
import Orders from '@templates/MyOrders';
import Order from '@templates/MyOrder';
import NotFound from '@templates/NotFound';
import AppContext from '@context/appContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/save-account" element={<SaveAccount />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
