import { useContext } from 'react';
import { AuthContext } from './../contexts/AuthContextProvider';

export const useAuth = () =>{
  return  useContext(AuthContext);
}