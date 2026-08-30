CREATE TABLE public.quiz_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient TEXT,
  recipient_name TEXT,
  my_relation TEXT,
  occasion TEXT,
  story TEXT,
  moments TEXT,
  genre TEXT,
  mood TEXT,
  name_in_song TEXT,
  special_phrase TEXT,
  whatsapp TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.quiz_submissions TO anon, authenticated;
GRANT ALL ON public.quiz_submissions TO service_role;

ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit the quiz"
  ON public.quiz_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX quiz_submissions_created_at_idx ON public.quiz_submissions (created_at DESC);