import { FirebaseNotesAdapter } from "@/lib/FirebaseNotesAdapter";
import type { NotesAdapter } from "@/lib/notesAdapter";

const adapter: NotesAdapter = new FirebaseNotesAdapter();

export default adapter;