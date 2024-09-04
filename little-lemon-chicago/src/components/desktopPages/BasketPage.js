import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_PRODUCT,
  ORDER_SENDING_START,
  ORDER_SENDING_SUCCESS,
  orderOnlineSelector,
  REMOVE_PRODUCT,
} from '../../features/slices/pageOrderOnlineSlice'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../../styles/components_styles/basket.module.scss'
import styles_mobile from '../../styles/mobile/basket_mobile.module.scss'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Alert, Box, Stack, Typography } from '@mui/material'
import {
  clearError,
  errorSelector,
  setError,
} from '../../features/slices/errorSlice'
import { pageSelector } from '../../features/slices/pageViewSlice'

const BasketPage = () => {
  document.title = 'Restaurant Basket'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { orderList, orderAmount, sendingOrder } =
    useSelector(orderOnlineSelector)
  const { error, errorMessage } = useSelector(errorSelector)
  const pageSel = useSelector(pageSelector)

  const style = pageSel.isMobile ? styles_mobile : styles

  const handleAddProduct = (e, title, price) => {
    e.preventDefault()
    dispatch(ADD_PRODUCT({ title, price }))
  }

  const handleRemoveProduct = (e, title, price) => {
    e.preventDefault()
    dispatch(REMOVE_PRODUCT({ title, price }))
  }

  const handleOrderSubmission = () => {
    return new Promise((resolve, reject) => {
      if (orderAmount === 0) {
        const errorMessage = 'Order amount cannot be 0$'
        reject(errorMessage)
      } else {
        dispatch(ORDER_SENDING_START())
        resolve('Order sent successfully')
      }
    })
      .then(() => {
        setTimeout(() => {
          dispatch(ORDER_SENDING_SUCCESS())
        }, 2000)
      })
      .catch((error) => {
        dispatch(setError({ errorType: 'errorBasket', message: error }))
      })
  }

  return (
    <div
      className={style.basket}
      role="region"
      aria-labelledby="basket_heading"
    >
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
        {sendingOrder && (
          <Alert severity="success">
            <Typography variant="h6">SUCCESS</Typography>
            <Typography>
              Your order number {Math.floor(Math.random() * 100)}
            </Typography>
          </Alert>
        )}

        {error && (
          <Stack sx={{ width: '100%' }} spacing={4}>
            <Alert
              severity="error"
              onClose={() => {
                dispatch(clearError())
              }}
            >
              <Typography variant="h6">ERROR</Typography>
              <Typography>{errorMessage}</Typography>
            </Alert>
          </Stack>
        )}
      </Box>

      <Container>
        <Row className="justify-content-md-center">
          <Col lg={8} md={8}>
            <h2 id="basket_heading">Your Basket</h2>
            <table aria-describedby="basket_summary">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className={styles.plus_minus_btn}
                        aria-label={`Remove ${item.title} from basket`}
                        onClick={(e) =>
                          handleRemoveProduct(e, item.title, item.price)
                        }
                      >
                        <FiMinus />
                      </button>
                      <button
                        className={styles.plus_minus_btn}
                        aria-label={`Add ${item.title} to basket`}
                        onClick={(e) =>
                          handleAddProduct(e, item.title, item.price)
                        }
                      >
                        <FiPlus />
                      </button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4">
                    <strong>Total Amount:</strong>
                  </td>
                  <td>${orderAmount.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>

            <button
              disabled={error || sendingOrder}
              className={style.basket_order_btn}
              onClick={handleOrderSubmission}
              aria-label={sendingOrder ? 'Sending order' : 'Place order'}
            >
              {sendingOrder ? 'Sending...' : 'Order now'}
            </button>
            <button
              className={style.basket_order_btn_back}
              onClick={() => navigate('/order_online')}
              aria-label="Go back to order online"
            >
              Back
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BasketPage
