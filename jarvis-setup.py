#!/usr/bin/python3

from http.server import HTTPServer
from classes.Webserver import Webserver
from jarvis import Exiter


server = HTTPServer(('', 80), Webserver)
while Exiter.running:
    server.handle_request()
