#!/usr/bin/python3

from http.server import CGIHTTPRequestHandler
from jarvis import Mime
import subprocess
import urllib.parse as urlparse
import json
import os
import re
import traceback


with open("/etc/jarvis/root.dir", "r") as f:
    DIRECTORY = f.read() + "/setup/web"

DIRECTORY = "/home/pi/jsetup/web"
os.chdir(DIRECTORY)


def cmd(command):
    # print(f"executing: {command}")
    return subprocess.check_output(command, stderr=subprocess.STDOUT, shell=True)


class Webserver(CGIHTTPRequestHandler):
    cgi_directories = ["/r"]

    def do_POST(self):
        path = self.path.split("?")[0]
        arguments = {k: v[0] for k, v in urlparse.parse_qs(
            urlparse.urlparse(self.path).query).items()}
        body = json.loads(self.rfile.read(
            int(self.headers.get('Content-Length'))))
        ip = self.client_address[0]

        os.environ["HTTP_POST_BODY"] = json.dumps(body)
        os.environ["HTTP_REQUEST_IP"] = ip
        os.environ["HTTP_ARGUMENTS"] = json.dumps(arguments)
        os.environ["HTTP_PATH"] = json.dumps(path)

        if self.is_cgi():
            self.run_cgi()
            return


    def do_GET(self):
        path = self.path.split("?")[0]
        arguments = {k: v[0] for k, v in urlparse.parse_qs(
            urlparse.urlparse(self.path).query).items()}

        if self.is_cgi():
            self.run_cgi()
            return

        if path[1:] == "":
            path = "/index.html"

        result = ""
        if os.path.isfile(f"{DIRECTORY}/{path[1:]}"):
            try:
                result = open(f"{DIRECTORY}/{path[1:]}", "r").read()
            except Exception:
                result = open(f"{DIRECTORY}/{path[1:]}", "rb").read()
            self._send_headers(content_type=Mime.get(path[1:]))
        elif os.path.isfile(f"{DIRECTORY}/{path[1:]}.html"):
            result = open(f"{DIRECTORY}/{path[1:]}.html", "r").read()
            self._send_headers(content_type=Mime.get(f"{path[1:]}.html"))
        else:
            splitted = path[1:].split("/")
            guessed_paths = ["/".join(splitted[0:x]) + "." + ".".join(
                splitted[x:len(splitted)]) for x in range(1, len(splitted))]
            correct_guess = False
            for p in guessed_paths:
                if os.path.isfile(p):
                    result = open(p, "r").read()
                    correct_guess = True
                elif os.path.isfile(f"{p}.html"):
                    result = open(f"{p}.html", "r").read()
                    correct_guess = True
            if not correct_guess:
                self._send_404()

        if type(result) is str:
            groups = re.findall('<\?\?([\w\W]*?)\?\?>', result)

            if groups is not None:
                for group in groups:
                    try:
                        # result = result.replace(f"<??{group}??>", bytearray(eval(
                        #     group.strip().strip("\n")), encoding="utf-8").decode("utf-8").strip().strip("\n"))
                        code_result = eval(group.strip().strip("\n"))
                        if isinstance(code_result, str):
                            code_result = bytearray(
                                code_result, encoding="utf-8")
                        result = result.replace(
                            f"<??{group}??>", code_result.decode("utf-8").strip().strip("\n"))
                    except Exception:
                        print("=== FAILED CODE ===")
                        print(group)
                        traceback.print_exc()
                        print("=== FAILED CODE END ===")
                        result = result.replace(f"<??{group}??>", "")
            result = result.encode()

        self.wfile.write(result)

    def _send_headers(self, code=200, content_type="text/html; charset=utf-8", allow_origin="*"):
        self.send_response(code)
        self.send_header('Access-Control-Allow-Origin', allow_origin)
        self.send_header('Content-Type', content_type)
        self.end_headers()

    def _send_404(self, error=None):
        self._send_headers(404)
        self.wfile.write(
            open(f"{DIRECTORY}/not_found.html", "r").read().encode())

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers",
                         "Content-Type, X-Request, X-Requested-With")
        self.send_header('Content-Length', '0')
        self.end_headers()
