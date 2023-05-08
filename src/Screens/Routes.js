import HomeScreen from '../Screens/HomeScreen'
import ConfirmEmailScreen from './ConfirmEmailScreen'
import ProfileScreen from './ProfileScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

export const AuthGroup = {
  'home': {
    name: 'home',
    title: 'home',
    component: HomeScreen,
  },

  'SignIn': {
    name: 'SignIn',
    title: 'SignIn',
    component: SignInScreen,
  },

  'SignUp': {
    name: 'SignUp',
    title: 'SignUp',
    component: SignUpScreen,
  },

  'confirmEmail': {
    name: 'confirmEmail',
    title: 'confirmEmail',
    component: ConfirmEmailScreen,
  },
};

export const AccessGroup = {
  'Profile': {
    name: 'Profile',
    title: 'Profile',
    component: ProfileScreen,
  },
};
