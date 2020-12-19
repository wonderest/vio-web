import axios from 'axios';
import {
  FETCH_SIMPANAN_REQUEST,
  FETCH_SIMPANAN_SUCCESS,
  FETCH_SIMPANAN_FAILURE,
} from 'utils/redux/simpanan/simpanan.types';
import { BASE_URL } from 'utils/redux/url';

const simpananRequest = () => {
  return {
    type: FETCH_SIMPANAN_REQUEST,
  };
};

const simpananSuccess = (simpanan) => {
  return {
    type: FETCH_SIMPANAN_SUCCESS,
    payload: simpanan,
  };
};

const simpananFailure = (error) => {
  return {
    type: FETCH_SIMPANAN_FAILURE,
    payload: error,
  };
};

const simpanan = () => {
  const URL = `${BASE_URL()}`;
  return (dispatch) => {
    dispatch(simpananRequest());
    axios
      .get(URL)
      .then((res) => {
        dispatch(simpananSuccess(res.data));
      })
      .catch((error) => {
        dispatch(simpananFailure(error.message));
      });
  };
};

const simpananCreate = (data) => {
  const URL = `${BASE_URL()}`;
  return (dispatch) => {
    dispatch(simpananRequest());
    axios
      .post(URL, data)
      .then((res) => {
        dispatch(simpananSuccess(res.data));
      })
      .catch((error) => {
        dispatch(simpananFailure(error.message));
      });
  };
};

const simpananDelete = (id) => {
  const URL = `${BASE_URL()}/${id}`;
  return (dispatch) => {
    dispatch(simpananRequest());
    axios
      .delete(URL)
      .then((res) => {
        dispatch(simpananSuccess(res.data));
      })
      .catch((error) => {
        dispatch(simpananFailure(error.message));
      });
  };
};

const simpananUpdate = (id, data) => {
  const URL = `${BASE_URL()}/${id}`;
  return (dispatch) => {
    dispatch(simpananRequest());
    axios
      .put(URL, data)
      .then((res) => {
        dispatch(simpananSuccess(res.data));
      })
      .catch((error) => {
        dispatch(simpananFailure(error.message));
      });
  };
};

export { simpanan, simpananCreate, simpananDelete, simpananUpdate };
