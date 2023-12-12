import { useParams } from "next/navigation";
import { useMemo } from 'react';

const useConversation = () => {
  // retrieve parameters from the URL using the useParams hook
  const params = useParams();

  // extract the conversationId parameter from the params object
  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }, [params?.conversationId])

    // turn conversationId into boolean and stored as isOpen variable
  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  // memorize the result object to avoid unnecessary re-renders
  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
};

export default useConversation;