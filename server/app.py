from flask import Flask
from flask_migrate import Migrate
from models import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///hotel.db"


@app.route('/')
def index():
    return "Vista Hotel Database"


if __name__ == '__main__':
    app.run(port=8040, debug=True)