'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function EventCard({ eventId }: { eventId: Id<'events'> }) {
  const { user } = useUser();
  const router = useRouter();
  const event = useQuery(api.events.getById, { eventId });
  const availability = useQuery(api.events.getEventAvailability, { eventId });
  // const userTicket = useQuery(api.tickets.getUserTicketForEvent, {
  //   eventId,
  //   userId: user?.id ?? '',
  // });

  return <div>EventCard</div>;
}
