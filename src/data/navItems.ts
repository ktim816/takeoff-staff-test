export const navItems: NavItem[] = [{
  path: '/signup',
  name: 'Sign up',
}, {
  path: '/login',
  name: 'Login',
}, {
  path: '/contacts',
  name: 'Contacts',
}];

interface NavItem {
  path: string;
  name: string;
}
