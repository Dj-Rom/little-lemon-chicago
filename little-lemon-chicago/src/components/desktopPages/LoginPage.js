import React, { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialTwitter,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GithubLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';
import { setError } from '../../features/slices/errorSlice';
import { useDispatch } from 'react-redux';

const REDIRECT_URI = window.location.href;

const LoginPage = () => {
  document.title = 'Restaurant Sign In';
  const dispatch = useDispatch();
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState(null);

  const onLoginStart = useCallback(() => {}, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4} lg={4} xs={12}>
          <>
            <div
              className={`App ${provider && profile ? 'hide' : ''}`}
              role="region"
              aria-labelledby="login-options-heading"
            >
              <h1 id="login-options-heading" className="title">
                Social Login
              </h1>

              <LoginSocialFacebook
                isOnlyGetToken
                appId={process.env.REACT_APP_FB_APP_ID || ''}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }) => {
                  try {
                    setProvider(provider);
                    setProfile(data);
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error during Facebook login: ${error}`,
                      }),
                    );
                  }
                }}
                onReject={(err) => {
                  try {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Facebook login error: ${err}`,
                      }),
                    );
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error handling Facebook login rejection: ${error}`,
                      }),
                    );
                  }
                }}
              >
                <FacebookLoginButton aria-label="Login with Facebook" />
              </LoginSocialFacebook>

              <LoginSocialInstagram
                isOnlyGetToken
                client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ''}
                client_secret={process.env.REACT_APP_INSTAGRAM_APP_SECRET || ''}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }) => {
                  try {
                    setProvider(provider);
                    setProfile(data);
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error during Instagram login: ${error}`,
                      }),
                    );
                  }
                }}
                onReject={(err) => {
                  try {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Instagram login error: ${err}`,
                      }),
                    );
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error handling Instagram login rejection: ${error}`,
                      }),
                    );
                  }
                }}
              >
                <InstagramLoginButton aria-label="Login with Instagram" />
              </LoginSocialInstagram>

              <LoginSocialMicrosoft
                isOnlyGetToken
                client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ''}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }) => {
                  try {
                    setProvider(provider);
                    setProfile(data);
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error during Microsoft login: ${error}`,
                      }),
                    );
                  }
                }}
                onReject={(err) => {
                  try {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Microsoft login error: ${err}`,
                      }),
                    );
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error handling Microsoft login rejection: ${error}`,
                      }),
                    );
                  }
                }}
              >
                <MicrosoftLoginButton aria-label="Login with Microsoft" />
              </LoginSocialMicrosoft>

              <LoginSocialLinkedin
                isOnlyGetToken
                client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ''}
                client_secret={process.env.REACT_APP_LINKEDIN_APP_SECRET || ''}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }) => {
                  try {
                    setProvider(provider);
                    setProfile(data);
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error during LinkedIn login: ${error}`,
                      }),
                    );
                  }
                }}
                onReject={(err) => {
                  try {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `LinkedIn login error: ${err}`,
                      }),
                    );
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error handling LinkedIn login rejection: ${error}`,
                      }),
                    );
                  }
                }}
              >
                <LinkedInLoginButton aria-label="Login with LinkedIn" />
              </LoginSocialLinkedin>

              <LoginSocialGithub
                isOnlyGetToken
                client_id={process.env.REACT_APP_GITHUB_APP_ID || ''}
                client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ''}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }) => {
                  try {
                    setProvider(provider);
                    setProfile(data);
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error during GitHub login: ${error}`,
                      }),
                    );
                  }
                }}
                onReject={(err) => {
                  try {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `GitHub login error: ${err}`,
                      }),
                    );
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error handling GitHub login rejection: ${error}`,
                      }),
                    );
                  }
                }}
              >
                <GithubLoginButton aria-label="Login with GitHub" />
              </LoginSocialGithub>

              <LoginSocialTwitter
                isOnlyGetToken
                client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ''}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }) => {
                  try {
                    setProvider(provider);
                    setProfile(data);
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error during Twitter login: ${error}`,
                      }),
                    );
                  }
                }}
                onReject={(err) => {
                  try {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Twitter login error: ${err}`,
                      }),
                    );
                  } catch (error) {
                    dispatch(
                      setError({
                        errorType: 'errorLogin',
                        message: `Error handling Twitter login rejection: ${error}`,
                      }),
                    );
                  }
                }}
              >
                <TwitterLoginButton aria-label="Login with Twitter" />
              </LoginSocialTwitter>
            </div>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
