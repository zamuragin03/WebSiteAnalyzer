from bs4 import BeautifulSoup
import requests
from fake_useragent import UserAgent
from urllib.parse import urljoin
from .Exceptions import Exception403
import re


class ScrappingService:

    def __init__(self, url: str) -> None:
        self.url = url
        self.internal_links = []
        self.external_links = []

    def process(self) -> list[str]:
        self.GetAllWebsiteLinks()
        self.FindAllLinks()

    def GetAllWebsiteLinks(self) -> list[str]:
        ua = UserAgent()
        response = requests.get(self.url, headers={
            'User-Agent': ua.random
        })
        if response.status_code == 403:
            raise Exception403
        soup = BeautifulSoup(response.text, 'html.parser')

        links = [a['href'] for a in soup.find_all('a', href=True)]
        self.links: list[str] = list(set(links))
        self.DevideLinks()

    def FindAllLinks(self):
        self.social_links = {
            'Telegram': None,
            'Facebook': None,
            'Instagram': None,
            'Snapchat': None,
            'YouTube': None,
            'Vk': None,
            'Others': []
        }

        for link in self.external_links:
            if 't.me' in link:
                self.social_links['Telegram'] = link
            elif 'facebook.com' in link:
                self.social_links['Facebook'] = link
            elif 'instagram.com' in link:
                self.social_links['Instagram'] = link
            elif 'snapchat.com' in link:
                self.social_links['Snapchat'] = link
            elif 'youtube.com' in link:
                self.social_links['YouTube'] = link
            elif 'vk.com' in link:
                self.social_links['Vk'] = link
            else:
                url_pattern = "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$"
                if re.match(url_pattern, link):
                    self.social_links['Others'].append(link)

    def DevideLinks(self):
        for link in self.links:
            # Проверка абсолютных ссылок
            if link.startswith(('http://', 'https://')):
                if self.url in link:
                    self.internal_links.append(link)
                else:
                    self.external_links.append(link)
            # Проверка относительных путей
            elif link.startswith('/'):
                self.internal_links.append(urljoin(self.url, link))
            # Проверка относительных путей, не начинающихся с '/'
            elif link.endswith(('.php', '.html', '.aspx', '.jsp')) or '?' in link:
                self.internal_links.append(urljoin(self.url, link))
            # Игнорируем ссылки
            elif link.startswith(('tel:', '#')):
                continue
            else:
                self.external_links.append(link)
