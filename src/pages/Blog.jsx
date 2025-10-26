import React from 'react';
import Article from '../components/Article'; // Assuming you'll create this component
import { Container, Box, Divider } from '@mui/material';

const articles = [
  {
    title: 'These Are The Startups Merging Your Brain With AI',
    author: 'Rob Toews, Forbes',
    date: 'October 5, 2025',
    summary: 'A look at emerging companies developing brain-computer interfaces and neurotechnology to integrate human cognition with artificial intelligence.',
    url: 'https://www.forbes.com/sites/robtoews/2025/10/05/these-are-the-startups-merging-your-brain-with-ai/?utm_source=chatgpt.com'
  },
  {
    title: 'Pain Is Personal. Brain Stimulation Could Make Treatment That Way, Too.',
    author: 'Gina Kolata, The New York Times',
    date: 'August 14, 2025',
    summary: 'Researchers are exploring personalized brain-stimulation protocols to tailor pain therapy to individual neural signatures.',
    url: 'https://www.nytimes.com/2025/08/14/health/pain-personalized-brain-stimulation.html'
  },
  {
    title: 'Scientists move closer to precisely measuring — and treating — chronic pain',
    author: 'Ben Guarino, The Washington Post',
    date: 'March 23, 2025',
    summary: 'New precision-medicine tools aim to quantify pain signals in the brain and develop targeted interventions.',
    url: 'https://www.washingtonpost.com/science/2025/03/23/pain-measure-precision-research'
  },
  {
    title: 'Unlocking the Science of Touch and Chronic Pain',
    author: 'Scripps Research Magazine',
    date: 'January 2025',
    summary: 'Scripps scientists delve into how tactile signals are processed and how discoveries could lead to novel chronic-pain therapies.',
    url: 'https://magazine.scripps.edu/features/2025/catalyst/unlocking-the-science-of-touch-and-chronic-pain/'
  }
];

const Blog = ({ t }) => {
  const localizedArticles = (t?.blogPage?.articles && Array.isArray(t.blogPage.articles))
    ? t.blogPage.articles
    : articles;
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/tealbackground.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "'Times New Roman', serif" }}>
            {t?.blogPage?.heroTitle || 'Latest in Neurology and Pain Management'}
          </h1>
        </div>
      </section>

      {/* Articles Section */}
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <Box>
          {localizedArticles.map((article, index) => (
            <React.Fragment key={index}>
              <Article
                title={article.title}
                author={article.author}
                date={article.date}
                summary={article.summary}
                url={article.url}
              />
              {index < localizedArticles.length - 1 && <Divider sx={{ my: 4 }} />}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Blog;
