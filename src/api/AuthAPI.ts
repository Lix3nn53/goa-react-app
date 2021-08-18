const handleAuthResponse = (res: any) => {
  if (res.data.refreshToken && res.data.accessToken) {
    localStorage.setItem('refreshToken', res.data.refreshToken);
    localStorage.setItem('accessToken', res.data.accessToken);

    return { error: false };
  }
  return { error: res.data.errorMessage };
};

const googleAuth = async (params: any) => {
  try {
    const res = await fetch(`/v1/auth/google${params}`);
    console.log('googleAuth', res.json());

    return handleAuthResponse(res);
  } catch (error) {
    if (error.response && error.response.data) {
      return { error: error.response.data.message };
    }

    return { error: true };
  }
};

export default {
  googleAuth,
};
