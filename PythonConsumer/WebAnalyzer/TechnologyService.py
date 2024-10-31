from Wappalyzer import Wappalyzer, WebPage
import requests
from fake_useragent import UserAgent

ua = UserAgent()


class TechnologyService:
    def __init__(self, url):
        self.url = url

    def get_technologies(self):
        wappalyzer = Wappalyzer.latest()
        webpage = WebPage.new_from_url(self.url)
        full_analyze = wappalyzer.analyze_with_versions_and_categories(webpage)
        self.full_analyze = full_analyze

    def HasSSL(self,):
        try:
            response = requests.get(self.url, headers={
                'User-Agent': ua.random
            })
            return response.url.startswith('https')
        except requests.RequestException:
            return False

    def Check404Page(self,):
        response = requests.get(f"{self.url}/765rcfvghbjkbu", headers={
            'User-Agent': ua.random
        })
        return response.status_code == 404

    def Check200Page(self,):
        response = requests.get(f"{self.url}", headers={
            'User-Agent': ua.random
        })
        return response.status_code == 200

    def HasSitemap(self,):
        response = requests.get(f"{self.url}/sitemap.xml", headers={
            'User-Agent': ua.random
        })
        return response.status_code == 200

    def HasRobotsTxt(self,):
        response = requests.get(f"{self.url}/robots.txt", headers={
            'User-Agent': ua.random
        })
        return response.status_code in (200, 304)
