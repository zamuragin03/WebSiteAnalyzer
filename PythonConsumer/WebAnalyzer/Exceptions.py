class Exception403(Exception):
    def __init__(self, message="На данном сайте стоит защита от парсинга"):
        self.message = message
        super().__init__(self.message)