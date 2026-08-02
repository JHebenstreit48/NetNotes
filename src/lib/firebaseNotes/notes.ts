import { FirebaseNotesAdapter } from "@/lib/firebaseNotes/FirebaseNotesAdapter";
import type { NotesAdapter } from "@/lib/notesAdapter";

const adapter: NotesAdapter = new FirebaseNotesAdapter();

export default adapter;