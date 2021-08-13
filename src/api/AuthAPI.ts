const handleAuthResponse = (res: any) => {
  if (res.data.refreshToken && res.data.accessToken) {
    localStorage.setItem('refreshToken', res.data.refreshToken);
    localStorage.setItem('accessToken', res.data.accessToken);

    return { success: true };
  }
  return { success: false, errorMessage: res.data.errorMessage };
};

const googleAuth = async (params: any) => {
  try {
    const res = await fetch(`/auth/google${params}`);

    return handleAuthResponse(res);
  } catch (error) {
    if (error.response && error.response.data) {
      return { success: false, errorMessage: error.response.data.message };
    }

    return { success: false };
  }
};

export default {
  googleAuth,
};
