from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///inventario.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    cantidad = db.Column(db.Integer, nullable=False, default=0)
    categoria = db.Column(db.String(50), nullable=True)
    fecha_expiracion = db.Column(db.Date, nullable=True)

    def __repr__(self):
        return f"<Producto {self.nombre}>"


@app.route("/")
def home():
    return "¡Servidor Flask funcionando!"

if __name__ == "__main__":
    app.run(debug=True)
