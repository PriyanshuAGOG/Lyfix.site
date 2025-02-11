interface MediumPost {
  title: string;
  content: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  categories: string[];
}

export async function getMediumPosts(username: string): Promise<MediumPost[]> {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
  );
  const data = await response.json();
  return data.items;
}
