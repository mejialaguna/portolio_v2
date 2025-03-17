'use client';

import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';

export default function ContactFormBtn() {
  // to be able to use the useFormStatus hook, have this button as a child of a form
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}
