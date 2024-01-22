import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NaverAccess = () => {
  const navigate = useNavigate();
  const code = new URLSearchParams(window.location.search).get('code');
  const REDIRECT_URI = 'http://localhost:5173/members/signin/oauth/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${REDIRECT_URI}${code}`);
        console.log(response.data);
        const ACCESS_TOKEN = response.data.accesstoken;

        localStorage.setItem('token', ACCESS_TOKEN);

        navigate('/mypage');
      } catch (error) {
        console.error(error);
        window.alert('실패입니다');
      }
    };

    if (code) {
      fetchData();
    }
  }, [code, navigate, REDIRECT_URI]);
};

export default NaverAccess;
