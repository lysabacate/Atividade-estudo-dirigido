from flask import Flask, render_template, request, flash, redirect
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'abuble'

app.route('/')