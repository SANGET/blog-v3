export interface CommonPageProps {
  location: string;
  pageContext: {
    currentPage: number;
    limit: number;
    totalPosts: number;
    tags: string[];
  };
}
