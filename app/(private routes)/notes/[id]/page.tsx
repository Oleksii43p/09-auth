import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api/serverApi';
import NoteDetailsClient from './NoteDetails.client';
import { Metadata } from 'next';

interface NoteDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NoteDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return {
    title: `Note ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note ${note.title}`,
      description: note.content.slice(0, 30),
      url: `https://08-zustand-iota-sooty.vercel.app/notes/${id}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'Note',
        },
      ],
    },
  };
}

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
