from bs4 import BeautifulSoup
import requests
from fake_useragent import UserAgent
from .decorators import timing_decorator
from urllib.parse import urlparse


class HTMLService:

    def __init__(self, urls: list[str]) -> None:
        self.urls = urls

    def get_htmls(self):
        html_results = []
        time_results = []
        broken_links_result = []
        for url in self.urls:
            (html, status_code), load_time = self.check_page(url)

            # Извлекаем относительный путь из URL
            parsed_url = urlparse(url)
            relative_path = parsed_url.path

            if status_code >= 400:
                broken_links_result.append(url)

            html_results.append({'url': url, 'html': html})
            time_results.append({'url': relative_path, 'load_time': load_time})

        self.html_results = html_results
        self.time_results = time_results
        self.broken_links_result = broken_links_result

    def get_overall_performance_score(self):
        return len([el for el in self.time_results if el.get('load_time') < 3])/len(self.time_results)

    @timing_decorator
    def check_page(self, url: str) -> dict:
        ua = UserAgent()
        response = requests.get(url, headers={
            'User-Agent': ua.random
        })
        response.encoding = 'UTF-8'
        return response.text, response.status_code
