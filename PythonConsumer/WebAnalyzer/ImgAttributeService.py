from bs4 import BeautifulSoup
import requests
from fake_useragent import UserAgent


class ImageAttributeChecker:

    def __init__(self, url: str) -> None:
        self.url = url

    def check_image_attributes(self) -> list[dict]:
        ua = UserAgent()
        response = requests.get(self.url, headers={
            'User-Agent': ua.random
        })
        response.encoding = 'UTF-8'
        soup = BeautifulSoup(response.text, 'html.parser')
        images = soup.find_all('img')
        results = []
        self.images = images
        for img in images:
            alt = img.get('alt')
            title = img.get('title')
            if not alt or not title:
                results.append({
                    'src': img['src'],
                    'alt': alt,
                    'title': title,
                })
        self.results = results
        return results

    def get_image_penalty(self) -> float:
        return len(self.results)/len(self.images)
