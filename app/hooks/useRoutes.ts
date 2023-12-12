// Provide an array of route objects, each representing a navigation link in the app
// useMemo to memoize the array of routes and their properties based on the current pathname and the state obtained from useConversation

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import {
  HiArrowLeftOnRectangle,
  HiUsers
} from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

import useConversation from './useConversation';

const useRoutes = () => {
  // Get current pathname
  const pathname = usePathname();
  // Get conversationId. Note that useConversation is a function that returns an object
  const { conversationId } = useConversation();

  // UseuseMemo to memoize the array of route objects
  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: '/conversations',
      icon: HiChat,
      // Determine if the route is active based on the pathname or the conversationId
      active: pathname === '/conversations' || !!conversationId
    },{
      label: 'Users',
      href: '/users',
      icon: HiUsers,
      active: pathname === '/users'
    }, {
      label: 'Loutout',
      href: '#',
      // Define an onClick handler to sign out when the route is clicked
      onClick: () => signOut(),
      icon: HiArrowLeftOnRectangle
    }
  ], [pathname, conversationId]);

  // return the array of route objects, which include Chat, User and Loutout routes
  return routes;
}

export default useRoutes;