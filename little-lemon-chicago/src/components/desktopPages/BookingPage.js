import React, { useRef } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Form as SemanticForm, Input } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import LinearProgress from '@mui/material/LinearProgress';
import {
  bookingSelector,
  changeBookingInputValue,
  resetBookingInputValue,
} from '../../features/slices/pageBookingSlice';
import styles from '../../styles/components_styles/booking_page.module.scss';
import Datepicker from '../otherComponents/Datepicker';
import Timepicker from '../otherComponents/Timepicker';
import dayjs from 'dayjs';
import { initialValues, userSchema } from '../../helpers/userSchemaAndInitialValues';
import { Alert, Box, Typography } from '@mui/material';
import { alertMessage, pageSelector, setLoading, toggleRender } from '../../features/slices/pageViewSlice';
import { useNavigate } from 'react-router-dom';
import { clearError, errorSelector, setError } from '../../features/slices/errorSlice';

const BookingPage = () => {
  document.title = 'Restaurant Booking';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorSel = useSelector(errorSelector);
  const bookingSel = useSelector(bookingSelector);
  const pageViewSel = useSelector(pageSelector);
  const formRef = useRef(null);

  // LOADER
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const initialFormikValues = {
    ...initialValues,
    ...bookingSel,
    date: bookingSel.date ? dayjs(bookingSel.date).format('YYYY-MM-DD') : '',
    time: bookingSel.time ? dayjs(bookingSel.time, 'HH:mm').format('HH:mm') : '',
  };

  const handleFieldChange = (field, value) => {
    dispatch(changeBookingInputValue({ [field]: value }));
  };
  const handleSubmit = (values, resetForm, setValues) => {
    new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      setTimeout(() => {
        resolve();
      }, 2000);
    })
      .then(() => {
        dispatch(alertMessage({ status: true, message: bookingSel }));
      })
      .then((resolve) => {
        setTimeout(() => {
          dispatch(alertMessage({ status: false, message: values }));
        }, 4000);
      })
      .then(() => {
        setTimeout(() => {
          navigate('/');
          dispatch(resetBookingInputValue());
          dispatch(toggleRender());
          dispatch(setLoading(false));
        }, 1000);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setError({ errorType: 'errorBooking', message: error }));
      });
  };

  return (
    <section className={styles.booking_page}>
      <Container>
        <Row className="justify-content-md-center">
          {errorSel.errorBooking ? (
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
              <Alert
                severity="error"
                onClose={() => {
                  dispatch(clearError());
                }}
              >
                <Typography variant="h6">Error:</Typography>
                <Typography>{errorSel.errorMessage}</Typography>
              </Alert>
            </Box>
          ) : (
            ''
          )}
          {pageViewSel.alert.status ? (
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
              <Alert severity="success">
                <Typography variant="h6">Your table is reserved for:</Typography>
                <Typography>
                  Telefon number:
                  {pageViewSel.alert.message.tel}
                </Typography>
                <Typography>Email: {pageViewSel.alert.message.email}</Typography>
                <Typography>Date: {pageViewSel.alert.message.date}</Typography>
                <Typography>Time: {pageViewSel.alert.message.time}</Typography>
                <Typography>Occasion: {pageViewSel.alert.message.occasion}</Typography>
                <Typography>Thank you! we will be waiting for You!</Typography>
                <Typography>We will be waiting for You!</Typography>
              </Alert>
            </Box>
          ) : (
            ''
          )}
          <Col lg={8} md={8}>
            <h1>Find a table for any occasion!</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={8} md={8}>
            <Formik
              initialValues={initialFormikValues}
              validationSchema={userSchema}
              onSubmit={(values, { resetForm, setSubmitting, setValues }) => {
                setSubmitting(false);
                handleSubmit(values, resetForm, setValues);
              }}
              innerRef={formRef}
            >
              {({
                errors,
                touched,
                values,
                resetForm,
                setFieldValue,
                setTouched,
                setErrors,
                submitForm,
                isValid,
                dirty,
              }) => (
                <SemanticForm as={Form}>
                  <SemanticForm.Field>
                    <label htmlFor="email">Email</label>
                    <Field name="email">
                      {({ field }) => (
                        <>
                          <Input
                            {...field}
                            type="email"
                            id={styles.email}
                            maxLength="30"
                            placeholder="Enter your email"
                            onChange={(e) => {
                              const value = e.target.value;
                              setFieldValue('email', value);
                              handleFieldChange('email', value);
                            }}
                            onBlur={() => setTouched({ email: true })}
                            value={values.email}
                            style={{
                              border: touched.email && errors.email ? '.9px solid red' : '',
                            }}
                          />
                          <ErrorMessage name="email">
                            {(msg) => <div style={{ color: 'red', fontSize: '0.875em' }}>{msg}</div>}
                          </ErrorMessage>
                        </>
                      )}
                    </Field>
                  </SemanticForm.Field>
                  <SemanticForm.Field>
                    <label htmlFor="guests">Number of guests</label>
                    <Field name="guests">
                      {({ field }) => (
                        <>
                          <Input
                            tabIndex={0}
                            {...field}
                            type="text"
                            id={styles.guests}
                            maxLength="10"
                            placeholder="A number between 1 and 10"
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value === '' || (Number(value) >= 1 && Number(value) <= 10)) {
                                setFieldValue('guests', value);
                                handleFieldChange('guests', value);
                              }
                            }}
                            onBlur={() => setTouched({ guests: true })}
                            value={values.guests}
                            style={{
                              border: touched.guests && errors.guests ? '.9px solid red' : '',
                            }}
                          />
                          <ErrorMessage name="guests">
                            {(msg) => <div style={{ color: 'red', fontSize: '0.875em' }}>{msg}</div>}
                          </ErrorMessage>
                        </>
                      )}
                    </Field>
                  </SemanticForm.Field>
                  <SemanticForm.Field>
                    <label htmlFor="tel">Phone Number</label>
                    <Field name="tel">
                      {({ field, form }) => {
                        const isError = form.touched.tel && form.errors.tel;
                        return (
                          <>
                            <Input
                              tabIndex={0}
                              {...field}
                              type="text"
                              id={styles.tel}
                              placeholder="+1-XXX-XXX-XXXX"
                              maxLength="12"
                              onChange={(e) => {
                                const formattedValue = e.target.value
                                  .replace(/\D/g, '')
                                  .replace(/(\d{1})(\d{2})(\d{3})(\d{4})/, '$1$2-$3-$4')
                                  .substring(0, 12);
                                setFieldValue('tel', formattedValue);
                                handleFieldChange('tel', formattedValue);
                              }}
                              onBlur={() => setTouched({ tel: true })}
                              value={values.tel}
                              style={{
                                border: isError ? '.9px solid red' : '',
                              }}
                            />
                            <ErrorMessage name="tel">
                              {(msg) => <div style={{ color: 'red', fontSize: '0.875em' }}>{msg}</div>}
                            </ErrorMessage>
                          </>
                        );
                      }}
                    </Field>
                  </SemanticForm.Field>
                  <SemanticForm.Field>
                    <label htmlFor="date">Choose date</label>
                    <Datepicker
                      tabIndex={0}
                      id={styles.date}
                      selected={(values.date = bookingSel.date)}
                      onChange={(dates) => {
                        const [start] = dates;
                        if (start) {
                          const formattedDate = bookingSel.dat.format('YYYY-MM-DD');
                          setFieldValue('date', formattedDate);
                          handleFieldChange('date', formattedDate);
                          setErrors('date', true);
                        }
                      }}
                      onBlur={() => setTouched({ date: true })}
                      selectsRange
                      inline
                    />
                    <ErrorMessage name="date">
                      {(msg) => <div style={{ color: 'red', fontSize: '0.875em' }}>{msg}</div>}
                    </ErrorMessage>
                  </SemanticForm.Field>
                  <SemanticForm.Field>
                    <label htmlFor="time">Choose time</label>
                    <Timepicker
                      tabIndex={0}
                      placeholder="Select"
                      id={styles.time}
                      selected={bookingSel.time}
                      onTimeChanged={(e) => {
                        setFieldValue('time', e);
                      }}
                      onBlur={() => setTouched('time', true)} // Handle blur event
                      inline
                    />
                    <ErrorMessage name="time">
                      {(msg) => <div style={{ color: 'red', fontSize: '0.875em' }}>{msg}</div>}
                    </ErrorMessage>
                  </SemanticForm.Field>
                  <SemanticForm.Field>
                    <label htmlFor="occasion">Occasion</label>
                    <Field
                      as="select"
                      name="occasion"
                      id={styles.occasion}
                      onChange={(e) => {
                        setFieldValue('occasion', e.target.value);
                        handleFieldChange('occasion', e.target.value);
                      }}
                      onBlur={() => setTouched({ occasion: true })}
                      value={values.occasion}
                      style={{
                        border: touched.occasion && errors.occasion ? '.9px solid red' : '',
                      }}
                    >
                      <option value="">Select an occasion</option>
                      <option onChange={(e) => handleFieldChange('occasion', 'birthday')} value="birthday">
                        Birthday
                      </option>
                      <option onChange={(e) => handleFieldChange('occasion', 'anniversary')} value="anniversary">
                        Anniversary
                      </option>
                      <option onChange={(e) => handleFieldChange('occasion', 'other')} value="other">
                        Other
                      </option>
                    </Field>
                    <ErrorMessage name="occasion">
                      {(msg) => <div style={{ color: 'red', fontSize: '0.875em' }}>{msg}</div>}
                    </ErrorMessage>
                  </SemanticForm.Field>
                  <Button
                    type="submit"
                    id={styles.button_booking}
                    primary
                    disabled={!(isValid && dirty)}
                    onClick={() => {
                      submitForm();
                      resetForm();
                    }}
                  >
                    {pageViewSel.isLoading ? (
                      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </SemanticForm>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookingPage;
