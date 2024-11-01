from bs4 import BeautifulSoup
import requests
from fake_useragent import UserAgent


class PageChecker:

    def __init__(self, result) -> None:
        self.result = result
        self.results = []

    def check_pages(self) -> list[dict]:
        results = []
        for result in self.result:
            page_info = self.check_page(result.get('url'), result.get('html'))
            results.append(page_info)
            
        self.results = results
        return results

    def check_page(self, url: str, html: str) -> dict:
        soup = BeautifulSoup(html, 'html.parser')

        h1 = soup.find('h1')
        title = soup.find('title')
        description = soup.find('meta', attrs={'name': 'description'})

        h1_count = len(soup.find_all('h1'))
        h2_count = len(soup.find_all('h2'))
        h3_count = len(soup.find_all('h3'))
        h4_count = len(soup.find_all('h4'))
        h5_count = len(soup.find_all('h5'))

        # Извлечение данных Open Graph
        og_title = soup.find('meta', property='og:title')
        og_description = soup.find('meta', property='og:description')
        og_image = soup.find('meta', property='og:image')
        og_url = soup.find('meta', property='og:url')

        return {
            'url': url,
            'h1': h1.text.strip() if h1 != '' else None,
            'title': title.text.strip() if title else None,
            'description': description['content'].strip() if description else None,
            'h1_count': h1_count,
            'h2_count': h2_count,
            'h3_count': h3_count,
            'h4_count': h4_count,
            'h5_count': h5_count,
            'og_title': og_title['content'].strip() if og_title else None,
            'og_description': og_description['content'].strip() if og_description else None,
            'og_image': og_image['content'].strip() if og_image else None,
            'og_url': og_url['content'].strip() if og_url else None
        }

    def get_pages_penalty(self):
        overall_penalty = len(self.results)*5
        pages_penalty = 0
        for result in self.results:
            page_penalty = 0
            if result.get('h1') is None or result.get('h1') == '':
                page_penalty += 1
            if result.get('h1') == result.get('title'):
                page_penalty += 1
            if result.get('h1_count') > 1:
                page_penalty += 1
            if result.get('title') is None:
                page_penalty += 1
            if result.get('description') is None:
                page_penalty += 1
            pages_penalty += page_penalty
        return (overall_penalty-pages_penalty)/overall_penalty
