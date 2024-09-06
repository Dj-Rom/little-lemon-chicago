import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/desktopComponents/Header';
import Main from './components/desktopComponents/Main';
import Footer from './components/desktopComponents/Footer';
import FooterMobile from './components/mobileVersionComponents/FooterMobilePage';
import { clearError, errorSelector, setError } from './features/slices/errorSlice';
import { Alert, Box, Typography } from '@mui/material';
import HeaderMobile from './components/mobileVersionComponents/HeaderMobile';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './features/slices/pageOrderOnlineSlice';
import data_menu from './data/menuData';
import { pageSelector } from './features/slices/pageViewSlice';

// Custom Error Boundary to catch errors in any child component
class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, isOffline: !navigator.onLine };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props.dispatch(setError({ type: 'errorBoundary', payload: error, errorInfo }));
    console.error('Error caught by ErrorBoundary: ', error, errorInfo);
  }

  componentDidMount() {
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('error', this.handleGlobalError);
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('error', this.handleGlobalError);
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  handleOffline = () => {
    this.setState({ isOffline: true });
    this.props.dispatch(
      setError({
        errorType: 'errorBoundary',
        message: 'You are offline. Please check your internet connection.',
      }),
    );
  };

  handleOnline = () => {
    this.setState({ isOffline: false });
    this.props.dispatch(clearError());
  };

  handleGlobalError = (event) => {
    this.props.dispatch(
      setError({
        errorType: 'errorBoundary',
        message: 'An unexpected error occurred. Please try again later.',
      }),
    );
    console.error('Global error caught: ', event.error);
    this.setState({ hasError: true });
  };

  handleUnhandledRejection = (event) => {
    this.props.dispatch(
      setError({
        errorType: 'errorBoundary',
        message: 'An unexpected promise rejection occurred. Please try again later.',
      }),
    );
    console.error('Unhandled promise rejection: ', event.reason);
    this.setState({ hasError: true });
  };

  render() {
    return this.props.children;
  }
}

// Functional App Component
function App() {
  const dispatch = useDispatch();
  const errorSel = useSelector(errorSelector);
  const refAddedToBasket = useRef(null);
  const pageSel = useSelector(pageSelector);

  useEffect(() => {
    // Chrome message listener removed
  }, []);

  function handleClickOrderOnlineCard(e) {
    e.preventDefault();
    const notification = refAddedToBasket.current;
    if (notification) {
      notification.classList.add('show');
      notification.style.transition = 'transform 0.5s';

      setTimeout(() => {
        notification.classList.remove('show');
      }, 1500);
    }
    console.log(e.target);
    const role = e.target.getAttribute('type');
    const itemId = e.target.id || e.target.parentNode.id;

    if (role && itemId) {
      let item = null;
      for (const category in data_menu) {
        item = data_menu[category].find((item) => item.id === itemId);
        if (item) break;
      }

      if (item) {
        if (role === 'ADDED') {
          dispatch(ADD_PRODUCT(item));
        } else if (role === 'REMOVE') {
          dispatch(REMOVE_PRODUCT(item));
        }
      } else {
        dispatch(setError('Item not found'));
      }
    }
  }

  return (
    <CustomErrorBoundary dispatch={dispatch}>
      {errorSel.error ? (
        <Box
          sx={{
            position: 'fixed',
            textAlign: 'center',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1300',
          }}
        >
          <Alert severity="error">
            <Typography>ERROR:</Typography>
            <Typography>{errorSel.errorMessage}</Typography>
          </Alert>
        </Box>
      ) : null}
      {pageSel.isMobile ? <HeaderMobile /> : <Header />}
      <Main refAddedToBasket={refAddedToBasket} handleClickOrderOnlineCard={handleClickOrderOnlineCard} />
      {pageSel.isMobile ? <FooterMobile /> : <Footer />}
    </CustomErrorBoundary>
  );
}

export default App;
