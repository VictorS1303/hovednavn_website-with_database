import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// ABOUT PAGE //
export const fetchTimelineCardsData = async () =>
{
    const {data, error} = await supabase
    .from('timeline')
    .select('*')
    .order('id', {ascending: true})
    return data || []
}

fetchTimelineCardsData()


// Artist Cards Data
export async function fetchArtistsData() {
  const { data: artists, error } = await supabase
  .from('artists')
  .select('*')
  .order('id', {ascending: true})

  
  return artists || []
}

fetchArtistsData()

// Music Data
export const fetchMusicData = async (id) => {
    const { data, error } = await supabase
        .from('music')
        .select('*')
        .order('id', {ascending: true})

    return data;
};
fetchMusicData()


export const fetchSong = async (id) => {
  // try {
    const { data, error } = await supabase
      .from('music')
      .select('*')
      .eq('id', id) // Filter for the specific ID
      .order('id', {ascending: true})
    
    return data[0]
};

fetchSong(0)


// Concert Data
export const fetchConcertData = async () => {
  const { data, error } = await supabase
    .from('concerts')
    .select('*')
    .order('id', {ascending: true})

  return data || []
};

fetchConcertData()

