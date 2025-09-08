import NoteForm from '@/components/NoteForm/NoteForm';
import { Metadata } from 'next';

import css from './CreateNote.module.css';

export const metadata: Metadata = {
  title: 'New note',
  description: 'Create new note',
  openGraph: {
    title: 'New note',
    description: 'Create new note',
    url: 'https://08-zustand-iota-sooty.vercel.app/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Notes application',
      },
    ],
  },
};

const page = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
};

export default page;
